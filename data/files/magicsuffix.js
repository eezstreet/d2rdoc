// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["magicsuffix"] = {
    "title": "MagicSuffix.txt",
    "referenceFiles": [
        "SharedItemMods",
        "PlayerClass",
        "colors"
    ],
    "appendFiles": [
        "SharedItemMods"
    ],
    "overview": "This file controls what item affixes (groups of item modifiers) are applied as the suffix for an item. These item affixes will appear at the end of the item\u00e2\u20ac\u2122s name<br>This file is loaded together with other similar files in the following order: $!MagicSuffix!$, $!MagicPrefix!$, $!automagic!$. These combined files form the Item Mods structure.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": []
}