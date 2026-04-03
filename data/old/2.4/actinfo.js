// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["actinfo"] = {
    "title": "actinfo.txt",
    "overview": "This file controls global Act functionalities including item levels, monster behaviors, and waypoints<br>This file uses the WanderingMon.txt file for a modular list of potential wandering units to spawn<br>This file defines where an act begins and ends. It is new to D2R and helps control traveling between acts.",
    "fields": [
        {
            "name": "act",
            "description": "Defines the ID for the Act",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "town",
            "description": "Uses an area level (Name field from Levels.txt) to define the Act's town area",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "start",
            "description": "Uses an area level (Name field from Levels.txt) to define where the player starts in the Act",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "maxnpcitemlevel",
            "description": "Controls the maximum item level for items sold by the NPC in the Act",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "classlevelrangestart",
            "description": "Uses an area level (Name field from Levels.txt) with its MonLvl values as a global Act minimum monster level. For example, this is used to determine chest levels in an Act.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "classlevelrangeend",
            "description": "Uses an area level (Name field from Levels.txt) with its MonLvl values as a global Act maximum monster level. For example, this is used to determine chest levels in an Act.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "wanderingnpcstart",
            "description": "Uses an index to determine which wandering monster class to use when populating areas (WanderingMon.txt for a list of possible monsters to spawn)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "wanderingnpcrange",
            "description": "This is a modifier that gets added to the wanderingnpcstart value to randomly select an index",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "commonactcof",
            "description": "Specifies which \".D2\" file to use as for the common Act COF file. This is used to establish the seed when initializing the Act.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "waypoint1",
            "description": "Uses an area level (Name field from Levels.txt) as the designated waypoint selection in the Waypoint UI",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "wanderingMonsterPopulateChance",
            "description": "The percent chance (from 0 to 100) to spawn a wandering monster (WanderingMon.txt for a list of possible monsters to spawn)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "wanderingMonsterRegionTotal",
            "description": "The maximum number of wandering monsters allowed at once",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "wanderingPopulateRandomChance",
            "description": "A secondary percent chance (from 0 to #) to determine whether to attempt populating with monsters. Only fails if random chance selects 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}