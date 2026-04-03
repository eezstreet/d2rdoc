// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["runes"] = {
    "title": "Runes.txt",
    "overview": "This file controls the creation of Rune Words and their various modifiers.",
    "fields": [
        {
            "name": "Name",
            "description": "Controls the string key that is used to the display the name of the item when the Rune Word is complete",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "complete",
            "description": "If equals 1, then the Rune Word can be crafted in-game. If equals 0, then the Rune Word cannot be crafted in-game",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "server",
            "description": "If equals 1, then the Rune Word can only be crafted on Ladder realm games. If equals 0, then the Rune Word can be crafted in all game types",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "itype1",
            "description": "Controls what item types are allowed for this Rune Word (Uses the Code field from ItemTypes.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "etype1",
            "description": "Controls what item types are excluded for this Rune Word (Uses the Code field from ItemTypes.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Rune1",
            "description": "Controls what runes are required to make the Rune Word. The order of each of these fields matters. (Uses the Code field from Misc.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "T1Code1",
            "description": "Controls the item properties that the Rune Word provides (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "T1Param1",
            "description": "The stat's \"parameter\" value associated with the related property (T1Code1). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "T1Min1",
            "description": "The stat's \"min\" value to assign to the related property (T1Code1). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "T1Max1",
            "description": "The stat's \"max\" value to assign to the related property (T1Code1). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}