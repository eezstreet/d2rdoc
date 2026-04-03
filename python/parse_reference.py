"""
Parse the locbones D2R Data Guide (v2.4) single-page HTML reference
and generate data/old/2.4/*.js files in the same format as data/files/*.js.

Usage:
    python python/parse_reference.py <path-to-reference-html>
"""

import sys
import os
import re
import json
from html.parser import HTMLParser


# Mapping from reference HTML section IDs to output JS file keys.
# The reference combines some files (e.g. AMW = armor+misc+weapons).
# Sub-sections like "AMW1" (Armor.txt only) get their own file key.
SECTION_TO_FILE = {
    "ActInfo": {"key": "actinfo", "title": "actinfo.txt"},
    # AMW shared fields go into a "shareditems" file
    "AMW": {"key": "shareditems", "title": "Shared Item Fields (armor.txt, misc.txt, weapons.txt)"},
    "AMW1": {"key": "armor", "title": "armor.txt"},
    "AMW2": {"key": "misc", "title": "misc.txt"},
    "AMW3": {"key": "weapons", "title": "weapons.txt"},
    "AutoMagic": {"key": "automagic", "title": "automagic.txt"},
    "AutoMap": {"key": "automap", "title": "AutoMap.txt"},
    "Belts": {"key": "belts", "title": "belts.txt"},
    "Books": {"key": "books", "title": "books.txt"},
    "CharStats": {"key": "charstats", "title": "charstats.txt"},
    "CubeMain": {"key": "cubemain", "title": "cubemain.txt"},
    "DifficultyLevels": {"key": "difficultylevels", "title": "difficultylevels.txt"},
    "Experience": {"key": "experience", "title": "experience.txt"},
    "Gamble": {"key": "gamble", "title": "gamble.txt"},
    "Gems": {"key": "gems", "title": "gems.txt"},
    "Hireling": {"key": "hireling", "title": "hireling.txt"},
    "HirelingDesc": {"key": "hirelingdesc", "title": "hirelingdesc.txt"},
    "Inventory": {"key": "inventory", "title": "inventory.txt"},
    "ItemRatio": {"key": "itemratio", "title": "itemratio.txt"},
    "ItemStatCost": {"key": "itemstatcost", "title": "ItemStatCost.txt"},
    "ItemTypes": {"key": "itemtypes", "title": "ItemTypes.txt"},
    "LevelGroups": {"key": "levelgroups", "title": "LevelGroups.txt"},
    "Levels": {"key": "levels", "title": "Levels.txt"},
    "LvlMaze": {"key": "lvlmaze", "title": "LvlMaze.txt"},
    "LvlPrest": {"key": "lvlprest", "title": "LvlPrest.txt"},
    "LvlSub": {"key": "lvlsub", "title": "LvlSub.txt"},
    "LvlTypes": {"key": "lvltypes", "title": "LvlTypes.txt"},
    "LvlWarp": {"key": "lvlwarp", "title": "LvlWarp.txt"},
    "MagicAffix": {"key": "magicprefix", "title": "MagicPrefix.txt"},
    "Missiles": {"key": "missiles", "title": "Missiles.txt"},
    "MonEquip": {"key": "monequip", "title": "monequip.txt"},
    "MonLvl": {"key": "monlvl", "title": "MonLvl.txt"},
    "MonPreset": {"key": "monpreset", "title": "MonPreset.txt"},
    "MonProp": {"key": "monprop", "title": "MonProp.txt"},
    "MonSeq": {"key": "monseq", "title": "monseq.txt"},
    "MonStats": {"key": "monstats", "title": "monstats.txt"},
    "MonStats2": {"key": "monstats2", "title": "monstats2.txt"},
    "MonType": {"key": "montype", "title": "MonType.txt"},
    "MonUMod": {"key": "monumod", "title": "monumod.txt"},
    "MonSounds": {"key": "monsounds", "title": "monsounds.txt"},
    "NPC": {"key": "npc", "title": "npc.txt"},
    "Objects": {"key": "objects", "title": "objects.txt"},
    "ObjGroup": {"key": "objgroup", "title": "objgroup.txt"},
    "ObjPreset": {"key": "objpreset", "title": "objpreset.txt"},
    "Overlay": {"key": "overlay", "title": "Overlay.txt"},
    "PetType": {"key": "pettype", "title": "pettype.txt"},
    "Properties": {"key": "properties", "title": "Properties.txt"},
    "QualityItems": {"key": "qualityitems", "title": "qualityitems.txt"},
    "RarePrefix": {"key": "rareprefix", "title": "RarePrefix.txt"},
    "RareSuffix": {"key": "raresuffix", "title": "RareSuffix.txt"},
    "RareAffix": {"key": "rareprefix", "title": "RarePrefix.txt"},  # fallback alias
    "Runes": {"key": "runes", "title": "Runes.txt"},
    "SetItems": {"key": "setitems", "title": "SetItems.txt"},
    "Sets": {"key": "sets", "title": "Sets.txt"},
    "Shrines": {"key": "shrines", "title": "shrines.txt"},
    "Skills": {"key": "skills", "title": "skills.txt"},
    "SkillDesc": {"key": "skilldesc", "title": "skilldesc.txt"},
    "Sounds": {"key": "sounds", "title": "sounds.txt"},
    "SoundEnviron": {"key": "soundenviron", "title": "SoundEnviron.txt"},
    "States": {"key": "states", "title": "states.txt"},
    "SuperUniques": {"key": "superuniques", "title": "SuperUniques.txt"},
    "TreasureClassEx": {"key": "treasureclassex", "title": "TreasureClassEx.txt"},
    "UniqueAppellation": {"key": "uniqueappellation", "title": "UniqueAppellation.txt"},
    "UniqueItems": {"key": "uniqueitems", "title": "UniqueItems.txt"},
    "UniquePrefix": {"key": "uniqueprefix", "title": "UniquePrefix.txt"},
    "UniqueSuffix": {"key": "uniquesuffix", "title": "UniqueSuffix.txt"},
    "WanderingMon": {"key": "wanderingmon", "title": "wanderingmon.txt"},
    # Reference files
    "ArmType": {"key": "armtype", "title": "ArmType.txt"},
    "BodyLocs": {"key": "bodylocs", "title": "bodylocs.txt"},
    "Colors": {"key": "colors", "title": "colors.txt"},
    "CompCode": {"key": "compcode", "title": "compcode.txt"},
    "Composit": {"key": "composit", "title": "Composit.txt"},
    "CubeMod": {"key": "cubemod", "title": "cubemod.txt"},
    "ElemTypes": {"key": "elemtypes", "title": "ElemTypes.txt"},
    "Events": {"key": "events", "title": "events.txt"},
    "HitClass": {"key": "hitclass", "title": "HitClass.txt"},
    "LowQualityItems": {"key": "lowqualityitems", "title": "lowqualityitems.txt"},
    "MissCalc": {"key": "misscalc", "title": "misscalc.txt"},
    "MonAI": {"key": "monai", "title": "monai.txt"},
    "MonMode": {"key": "monmode", "title": "MonMode.txt"},
    "MonPlace": {"key": "monplace", "title": "MonPlace.txt"},
    "ObjMode": {"key": "objmode", "title": "ObjMode.txt"},
    "ObjType": {"key": "objtype", "title": "objtype.txt"},
    "PlayerClass": {"key": "playerclass", "title": "PlayerClass.txt"},
    "PlrMode": {"key": "plrmode", "title": "PlrMode.txt"},
    "PlrType": {"key": "plrtype", "title": "PlrType.txt"},
    "SkillCalc": {"key": "skillcalc", "title": "skillcalc.txt"},
    "StorePage": {"key": "storepage", "title": "StorePage.txt"},
}

# Type marker mapping from reference format [X] to our type system
TYPE_MARKERS = {
    "[N]": "int",
    "[O]": "string",
    "[B]": "bool",
    "[C]": "calc",
    "[X]": "int",  # deprecated/unused fields marked with [X]
}


def strip_html_tags(text):
    """Remove HTML tags from a string, preserving text content."""
    clean = re.sub(r'<[^>]+>', '', text)
    # Normalize whitespace
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean


def parse_reference_html(html_path):
    """Parse the reference HTML and extract sections with their fields."""
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into lines for processing
    lines = content.split('\n')

    sections = {}  # section_id -> {overview_paragraphs, fields}
    current_section_id = None
    in_data_fields = False
    current_overview = []

    for i, line in enumerate(lines):
        stripped = line.strip()

        # Detect h2 section headers: <h2 id="SectionID">Title</h2>
        h2_match = re.search(r'<h2\s+id="([^"]+)"[^>]*>(.*?)</h2>', stripped)
        if h2_match:
            section_id = h2_match.group(1)
            if section_id in SECTION_TO_FILE:
                current_section_id = section_id
                in_data_fields = False
                current_overview = []
                if section_id not in sections:
                    sections[section_id] = {
                        "overview": [],
                        "fields": [],
                    }
                continue

        # Detect "Data Fields" header
        if current_section_id and re.search(r'<h3[^>]*>.*Data Fields.*</h3>', stripped):
            in_data_fields = True
            # Save accumulated overview
            if current_overview and current_section_id in sections:
                sections[current_section_id]["overview"] = current_overview[:]
            current_overview = []
            continue

        # If we hit another h2 or h3 that's not data fields, end current section's field collection
        if re.search(r'<h2\s+id="([^"]+)"', stripped):
            h2_id = re.search(r'<h2\s+id="([^"]+)"', stripped).group(1)
            if h2_id not in SECTION_TO_FILE:
                # Sub-heading within a section we don't map, skip
                in_data_fields = False
                current_section_id_check = None
            continue

        if not current_section_id:
            continue

        # Collect overview paragraphs (before Data Fields header)
        if not in_data_fields and stripped.startswith('<p'):
            text = strip_html_tags(stripped)
            if text:
                current_overview.append(text)
            continue

        # Parse field definitions from <p> tags
        if in_data_fields and stripped.startswith('<p'):
            field = parse_field_line(stripped)
            if field:
                sections[current_section_id]["fields"].append(field)

    return sections


def parse_field_line(line):
    """Parse a field definition line like:
    <p><b>fieldName</b> - <span...>[N]</span> - Description text</p>
    Returns a dict with name, type, description or None.
    """
    # Extract field name from first <b> tag
    name_match = re.search(r'<b>([^<]+)</b>', line)
    if not name_match:
        return None

    field_name = name_match.group(1).strip()

    # Extract type marker [N], [O], [B], [C], [X]
    type_match = re.search(r'\[([NOBCX])\]', line)
    if not type_match:
        return None

    type_marker = f"[{type_match.group(1)}]"
    field_type = TYPE_MARKERS.get(type_marker, "string")

    # Extract description: everything after the second " - "
    # Remove HTML tags first for cleaner extraction
    clean_line = strip_html_tags(line)

    # Pattern: "fieldName - [X] - description"
    desc_match = re.match(
        r'.*?\]\s*-\s*(.*)',
        clean_line
    )
    description = ""
    if desc_match:
        description = desc_match.group(1).strip()
    else:
        # Try simpler pattern
        parts = clean_line.split(' - ', 2)
        if len(parts) >= 3:
            description = parts[2].strip()

    return {
        "name": field_name,
        "type": field_type,
        "description": description,
    }


def build_js_file(key, title, overview_text, fields):
    """Build a JS file string in the data/files/*.js format."""
    file_data = {
        "title": title,
        "overview": overview_text,
        "fields": [],
    }

    for field in fields:
        field_entry = {
            "name": field["name"],
            "description": field["description"],
            "type": {
                "type": field["type"],
                "dataLength": 0,
                "memSize": 0,
            },
        }
        file_data["fields"].append(field_entry)

    # Build the JS string
    json_str = json.dumps(file_data, indent=4, ensure_ascii=False)
    js_content = (
        '// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".\n'
        '// Workaround is to place json into .js files and then load them via html script tags.\n'
        '// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp\n'
        f'files["{key}"] = {json_str}'
    )
    return js_content


def main():
    if len(sys.argv) < 2:
        print("Usage: python python/parse_reference.py <path-to-reference-html>")
        sys.exit(1)

    html_path = sys.argv[1]
    output_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "old", "2.4")
    os.makedirs(output_dir, exist_ok=True)

    print(f"Parsing {html_path}...")
    sections = parse_reference_html(html_path)

    print(f"Found {len(sections)} sections")

    files_written = 0
    for section_id, data in sections.items():
        if section_id not in SECTION_TO_FILE:
            continue

        mapping = SECTION_TO_FILE[section_id]
        key = mapping["key"]
        title = mapping["title"]

        overview_parts = data.get("overview", [])
        overview_text = "<br>".join(overview_parts) if overview_parts else ""

        fields = data.get("fields", [])

        if not fields and not overview_text:
            print(f"  Skipping {key}: no fields or overview found")
            continue

        js_content = build_js_file(key, title, overview_text, fields)

        output_path = os.path.join(output_dir, f"{key}.js")
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(js_content)

        print(f"  Wrote {key}.js ({len(fields)} fields)")
        files_written += 1

    print(f"\nDone. Wrote {files_written} files to {output_dir}")


if __name__ == "__main__":
    main()
