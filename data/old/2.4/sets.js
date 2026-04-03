// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["sets"] = {
    "title": "Sets.txt",
    "overview": "This file controls the item modifiers for Set bonus statistics when the player has equipped enough Set Items",
    "fields": [
        {
            "name": "index",
            "description": "Defines the specific Set ID",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "name",
            "description": "Uses a string for displaying the Set name in the inventory tooltip",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this Set bonus (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PCode2a",
            "description": "Controls the each of the different pairs of Partial Set item properties. These are applied when the player has equipped the related # of Set items. This is the first part of the pair for each Partial Set bonus. (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PParam2a",
            "description": "The stat's \"parameter\" value associated with the relative property (PCode#a). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PMin2a",
            "description": "The stat's \"min\" value associated with the listed relative (PCode#a). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PMax2a",
            "description": "The stat's \"max\" value to assign to the listed relative (PCode#a). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PCode2b",
            "description": "Controls the each of the different pairs of Partial Set item properties. These are applied when the player has equipped the related # of Set items. This is the second part of the pair for each Partial Set bonus. (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PParam2b",
            "description": "The stat's \"parameter\" value associated with the relative property (PCode#b). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PMin2b",
            "description": "The stat's \"min\" value associated with the listed relative (PCode#b). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PMax2b",
            "description": "The stat's \"max\" value to assign to the listed relative (PCode#b). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FCode1",
            "description": "Controls the each of the different Full Set item properties. These are applied when the player has all Set item pieces equipped (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FParam1",
            "description": "The stat's \"parameter\" value associated with the relative property (FCode#b). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FMin1",
            "description": "The stat's \"min\" value associated with the listed relative (FCode#b). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FMax1",
            "description": "The stat's \"max\" value to assign to the listed relative (FCode#b). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}