// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["experience"] = {
    "title": "experience.txt",
    "overview": "This file controls the Experience required for each level by each class",
    "fields": [
        {
            "name": "Level",
            "description": "This is a reference field to define the level",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Amazon",
            "description": "Controls the Experience required for each level with the Amazon class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Sorceress",
            "description": "Controls the Experience required for each level with the Sorceress class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Necromancer",
            "description": "Controls the Experience required for each level with the Necromancer class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Paladin",
            "description": "Controls the Experience required for each level with the Paladin class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Barbarian",
            "description": "Controls the Experience required for each level with the Barbarian class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Druid",
            "description": "Controls the Experience required for each level with the Druid class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Assassin",
            "description": "Controls the Experience required for each level with the Assassin class",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ExpRatio",
            "description": "This multiplier affects the percentage of Experienced earned, based on the level (Calculated in 1024ths by default, but this can be changed by updating the \"10\" value in the \"Maxlvl\" row)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}