// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["armor"] = {
    "title": "armor.txt",
    "referenceFiles": [
        "shareditems"
    ],
    "appendFiles": [
        "shareditems"
    ],
    "overview": "This file controls the functionalities for armor type items. This file is loaded together with other similar files in the following order: weapons.txt, armor.txt, misc.txt. These combined files form the items structure. Columns that typically only exist in one of the files will be listed below all of the shared column entries.",
    "fields": [
        {
            "name": "minac",
            "description": "The minimum amount of Defense that an armor item type can have",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "maxac",
            "description": "The maximum amount of Defense that an armor item type can have",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "block",
            "description": "Controls the block percent chance that the item provides (out of 100, but caps at 75)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rArm",
            "description": "Controls the character's graphics and animations for the Right Arm component when wearing the armor, where the value 0 = Light or \"lit\", 1 = Medium or \"med\", and 2 = Heavy or \"hvy\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lArm",
            "description": "Controls the character's graphics and animations for the Left Arm component when wearing the armor, where the value 0 = Light or \"lit\", 1 = Medium or \"med\", and 2 = Heavy or \"hvy\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Torso",
            "description": "Controls the character's graphics and animations for the Torso component when wearing the armor, where the value 0 = Light or \"lit\", 1 = Medium or \"med\", and 2 = Heavy or \"hvy\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Legs",
            "description": "Controls the character's graphics and animations for the Legs component when wearing the armor, where the value 0 = Light or \"lit\", 1 = Medium or \"med\", and 2 = Heavy or \"hvy\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rSPad",
            "description": "Controls the character's graphics and animations for the Right Shoulder Pad component when wearing the armor, where the value 0 = Light or \"lit\", 1 = Medium or \"med\", and 2 = Heavy or \"hvy\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lSPad",
            "description": "Controls the character's graphics and animations for the Left Shoulder Pad component when wearing the armor, where the value 0 = Light or \"lit\", 1 = Medium or \"med\", and 2 = Heavy or \"hvy\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}