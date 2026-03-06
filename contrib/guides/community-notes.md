## Overview

Community notes are supplemental annotations that appear inline on field documentation pages. They are written and maintained by the modding community to capture caveats, undocumented behaviors, and practical tips that go beyond what Blizzard's original field descriptions cover.

On a field page, a community note renders below the field description in light blue italic text, prefixed with **"Community note:"**.

Notes are authored in `contrib/community-notes.json` and regenerated into `data/community-notes.js` by the Python tooling.

## File Format

`contrib/community-notes.json` is a JSON array. Each entry targets a specific data file and lists notes for individual fields within it.

```json
[
  {
    "file": "misc",
    "fields": [
      {
        "name": "maxstack",
        "note": "Increasing this above 512 may cause visual glitches in the item tooltip."
      }
    ]
  }
]
```

- `file` — the key of the data file (matches `files["keyname"]` in `data/files/*.js`, e.g. `"misc"` for `misc.txt`).
- `fields` — an array of field entries.
- `name` — the field name as it appears in the data file (case-insensitive match at runtime).
- `note` — the text of the note to display. Supports reference link syntax (see below).

Multiple files and multiple fields per file can appear in the same JSON array.

## Table Row Notes

In addition to field-level notes, you can attach notes to individual rows in a field's lookup table using `tableNotes`. This targets a specific row by the value in its first (Code) column.

```json
{
  "file": "skills",
  "fields": [
    {
      "name": "srvdofunc",
      "tableNotes": [
        {
          "code": "1",
          "note": "DoAttack — used by most basic melee attacks."
        }
      ]
    }
  ]
}
```

- `tableNotes` — an array of row-level note entries.
- `code` — the value in the first column of the row to annotate (matched as a string).
- `note` — the note text. Supports reference link syntax.

A field entry can have both a `note` and `tableNotes` at the same time.

## Reference Link Syntax

Note text (and all other description text in the guide) supports inline reference links using the `$!..!$` syntax. These render as clickable links to other pages or fields.

| Syntax | Links to |
|--------|----------|
| `$!pagename!$` | The page for that data file (e.g. `$!misc!$` links to `misc.txt`) |
| `$!pagename#fieldname!$` | A specific field on another page (e.g. `$!itemstatcost#Encode!$`) |
| `$!#fieldname!$` | A field on the current page |

Example:

```json
"note": "See also $!itemstatcost#Encode!$ for how this value is interpreted."
```

## Regenerating After Edits

After editing `contrib/community-notes.json`, regenerate `data/community-notes.js` by running:

```
python python/update_fileguide.py -a notes -data data
```

This overwrites `data/community-notes.js` with the updated notes. The change takes effect immediately when the page is reloaded in a browser.

To regenerate everything at once (files, search, notes, guides):

```
python python/update_fileguide.py -a all -data data -html files
```
