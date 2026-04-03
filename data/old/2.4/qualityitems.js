// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["qualityitems"] = {
    "title": "qualityitems.txt",
    "overview": "This file controls the groups item modifiers for High Quality (Superior) item types.<br>The game will randomly choose between one of these High Quality groups, if it is allowed for the item type.",
    "fields": [
        {
            "name": "mod1code",
            "description": "Controls the item properties for the item affix (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod1param",
            "description": "The \"parameter\" value associated with the listed property (mod). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod1min",
            "description": "The \"min\" value to assign to the listed property (mod). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod1max",
            "description": "The \"max\" value to assign to the listed property (mod). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "armor",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on both torso armor and helmet item types. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "weapon",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on melee weapon item types (except scepters, wands, and staves). If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "shield",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on shield item types. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "scepter",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on scepter item types. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "wand",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on wand item types. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "staff",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on staff item types. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "bow",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on bow or crossbow item types. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "boots",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on boots item types. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gloves",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on gloves item types. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "belt",
            "description": "If equals 1, then allow this High Quality (Superior) modifier to be applied on belt item types. If equals 0, then ignore this.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}