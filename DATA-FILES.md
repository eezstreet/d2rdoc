# Authoring

Data files live in `data/files/*.js`. Each file is a JavaScript module that wraps a JSON object in a `files["key"] = {...}` assignment. This avoids CORS issues when the site is opened directly from the filesystem.

## File-Level Properties

| Property | Type | Description |
|----------|------|-------------|
| `title` | string | Display name for the page (e.g. `"armor.txt"`). **Required and must not be empty.** |
| `overview` | string | Description of the file's purpose. Supports reference links. **Required and must not be empty.** |
| `fields` | array | List of field definitions (see below). **Required.** |
| `referenceFiles` | string[] | Other `.js` data files loaded as `<script>` tags in the generated HTML. Needed for reference links and appendField targets to resolve at runtime. |
| `appendFiles` | string[] | Files whose fields are merged/appended into this file's page. Must also be listed in `referenceFiles`. |
| `ignoreFields` | string[] | Field names from the code export to skip during validation (useful for deprecated or internal fields). |
| `guideOnly` | boolean | If `true`, this file does not correspond to an actual game data file — it exists only as a guide reference (e.g. `enums`). |
| `codeDependency` | string | For `guideOnly` files that represent a portion of a real file, names the real file key to use for field type validation (e.g. `"armor"`). |
| `noHtml` | boolean | If `true`, no `.html` page is generated for this file. Used for files that are only referenced via `appendFiles`. |
| `notSearchable` | boolean | If `true`, this file is excluded from the search index. |

## Field-Level Properties

Each entry in the `fields` array describes one column in the game's data file.

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The column name as it appears in the data file. **Required and must not be empty.** |
| `description` | string | Human-readable explanation. Supports reference links. **Required and must not be empty.** |
| `altNames` | string[] | Alternative column names that map to the same field (e.g. numbered variants like `rArm`, `lArm`). |
| `type` | object | Type descriptor (see Field Types below). **Required.** |
| `table` | array | A 2D table of additional reference data to display alongside the field (see Table). |
| `bittable` | array | A list of bit-flag descriptions to display alongside the field (see Bit Table). |
| `appendField` | object | Inlines the content of another field (`{file, field}`) as a collapsible section. The `file` must be in `referenceFiles`. |

## Field Types

The `type` object always contains `type` (string), `dataLength` (int), and `memSize` (int). These are populated automatically by `generate_js_files.py` from the code export and should not be changed manually.

| `type` value | Additional properties | Description |
|---|---|---|
| `int` | — | Integer value |
| `int or` | — | Integer or special string value |
| `text` | — | Short text/string |
| `string` | — | String key (typically a localization reference) |
| `boolean` | — | 0 or 1 |
| `inverse boolean` | — | 0 or 1, with inverted meaning |
| `reference` | `file`, `field` | Links to a specific field in another file. `file` and `field` must be non-empty and must resolve to an existing field. |
| `parse` | `description` | A complex expression (e.g. BBE/Calc). `description` explains the parse format and supports HTML. |
| `comment` | — | Not a real code field; used for guide-only annotation rows. |

## Reference Links

In any string that supports reference links (`overview`, field `description`, `type.description` for `parse` fields, and table/bittable cell text), use the following shorthand to create HTML links. All links open in a new tab.

| Syntax | Result |
|--------|--------|
| `$!page!$` | Links to another page (by its file key, e.g. `$!armor!$`) |
| `$!page#element!$` | Links to a specific field on another page (e.g. `$!skills#srvmissilea!$`) |
| `$!#element!$` | Links to a specific field on the current page (e.g. `$!#spawnable!$`) |

The `validate` action checks all reference links and will report errors for broken targets.

## File References

`referenceFiles` lists the keys of other `.js` data files that should be loaded as `<script>` tags in the generated HTML page. This is needed in two situations:

1. When a field's `description` contains a reference link (`$!otherfile#field!$`) to another file — the target file must be loaded so the link can resolve at runtime.
2. When `appendFiles` is used — all appended files must also appear in `referenceFiles`.

Example:
```json
"referenceFiles": ["SharedItems", "enums"]
```

## Append File

`appendFiles` merges the fields from another file into this file's page display and search index. The appended file's fields appear after this file's own fields. This is used to avoid duplicating documentation for shared fields.

- All entries in `appendFiles` must also be listed in `referenceFiles`.
- Appended files should have `noHtml: true` and typically `notSearchable: true` as well, since their content surfaces through the parent file.
- The `validate` action checks cross-file field uniqueness across the combined set.

Example (in `armor.js`):
```json
"appendFiles": ["SharedItems"]
```

## Append Field

`appendField` inlines a collapsible copy of another field's `table` or `bittable` content directly into a field's display. Use this when a field's value is an index into an enum or table defined elsewhere.

The value is an object with two required properties:
- `file` — the key of the file containing the referenced field. Must be in `referenceFiles` (or be the current file's own key).
- `field` — the `name` of the field to append.

Example:
```json
"appendField": {
    "file": "enums",
    "field": "EARMORTYPE"
}
```

## Table

The `table` property on a field provides a reference table of valid values or enum definitions. It is a 2D array: the first row is the header, and subsequent rows are data rows. Each cell is either a plain string or a `{id, text}` object.

#### Id row

When a cell in a table row is an object with `id` and `text`, the `id` is used as a named anchor for reference links, and `text` is the display value. This allows other fields to link directly to that specific row using `$!file#id!$`.

Example of a table with id anchors:
```json
"table": [
    ["Code", "Description"],
    ["0", {"id": "myRowId", "text": "Some value"}],
    ["1", "Another value"]
]
```

A plain string cell also supports reference link syntax (`$!page#field!$`).

## Bit Table

The `bittable` property on a field describes individual bit flags for an integer field. It is an array where each entry corresponds to a bit position (index 0 = bit 0 = value 1, index 1 = bit 1 = value 2, etc.).

Each entry is either a plain string (the description) or a `{text}` object. Plain string entries support reference link syntax.

Example:
```json
"bittable": [
    "Object Empty Theme (no objects spawn)",
    "Barrel Theme (create random barrel objects)",
    "Shrine Theme",
    "Treasure Theme (create random items)"
]
```

# Search

The search index is stored in `data/search.js` and is generated by `python/update_fileguide.py -a search`. It indexes every searchable file's title and all field names (including `altNames` and table `id` anchors). Files with `notSearchable: true` are excluded.

Regenerate the search index after adding or renaming any fields or files.