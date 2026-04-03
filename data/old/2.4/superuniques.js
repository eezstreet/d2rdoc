// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["superuniques"] = {
    "title": "SuperUniques.txt",
    "overview": "This file defines the Super Unique monsters and their properties. Super Unique monsters are considered the special boss monsters that have static encounters in the game.<br>This file uses the following data files: MonSounds.txt, monstats.txt, MonUMod.txt, TreasureClassEx.txt",
    "fields": [
        {
            "name": "Superunique",
            "description": "Defines the unique name ID for the Super Unique monster",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Name",
            "description": "Uses a string for the Super Unique monster's name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Class",
            "description": "Defines the baseline monster type for the Super Unique monster, which this monster will use for default values. This uses the ID field from MonStats.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "hcIDx",
            "description": "Defines the unique numeric ID for the Super Unique monster. The existing IDs are hardcoded for specific scripts with the specified Super Unique monsters",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonSound",
            "description": "Defines what set of sounds to use for the Super Unique monster. Uses the ID field from MonSounds.txt. If this field is empty, then the Super Unique monster will default to using the monster class sounds",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Mod1 (to Mod3)",
            "description": "Controls which monster modifier to assign to the Super Unique monster. Uses the id field from MonUMod.txt",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MinGrp",
            "description": "Controls the min amount of Minion monsters that will spawn with the Super Unique monster",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MaxGrp",
            "description": "Controls the max amount of Minion monsters that will spawn with the Super Unique monster. This value must be equal to or higher than MinGrp. If this value is greater than it, then a random number will be chosen between the MinGrp and MaxGrp values",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AutoPos",
            "description": "If equals 1, then the Super Unique monster will randomly spawn within a radius of its designated position. If equals 0, then the Super Unique monster will spawn at exact coordinates of its designated position",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Stacks",
            "description": "If equals 1, then this Super Unique monster can spawn more than once in the same game. If equals 0, then this Super Unique monster can only spawn once in the same game",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Replaceable",
            "description": "If equals 1, then the room where the Super Unique monster spawns in can be replaced during the creation of a level preset. If equals 0, then the room cannot be replaced and will remain static",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Utrans & Utrans(N) & UTrans(H)",
            "description": "Modifies the color transform for the unique monster respectively in Normal, Nightmare, or Hell difficulty. If this value is greater than or equal to 30, then the value will default to 2, which is the monster's default color palette shift. If the value is 0 or is empty, then a random value will be chosen",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TC & TC(N) & TC(H)",
            "description": "Controls the Treasure Class to use when the Super Unique monster is killed respectively in Normal, Nightmare, or Hell difficulty. This is linked to the corresponding Treasure Class",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}