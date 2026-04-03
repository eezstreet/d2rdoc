// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["lvlprest"] = {
    "title": "LvlPrest.txt",
    "overview": "This file controls the values for each Level Preset. A Level Preset is a static area composed of tiles that is used to construct entire area levels found in the game.",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to define the Level Preset",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Def",
            "description": "Defines the unique numeric ID for the Level Preset. This is referenced in other files",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LevelID",
            "description": "This refers to the ID field from the Levels.txt file. If this value is not equal to 0, then this Level Preset is used to build that entire area level. If this value is equal to 0, then the Level Preset does not define the entire area level and is used as a part of constructing area levels",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Populate",
            "description": "If equals 1, then units are allowed to spawn in the Level Preset. If equals 0, then units will never spawn in the Level Preset",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Logicals",
            "description": "If equals 1, then the Level Preset allow for wall transparency to function. If equals 0, then walls will always appear solid",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Outdoors",
            "description": "If equals 1, then the Level Preset will be classified as an outdoor area, which can mean that lighting will function differently. If equals 0, then the Level Preset will be classified as an indoor area",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Animate",
            "description": "If equals 1, then the game will animate the tiles in the Level Preset. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "KillEdge",
            "description": "If equals 1, then the game will remove tiles that border the size of the Level Preset. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FillBlanks",
            "description": "If equals 1, then all blank tiles in the Level Preset will be filled with unwalkable tiles. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SizeX & SizeY",
            "description": "Specifies the Length and Width tile size values of the Level Preset, which are used for determining how big to build area levels. These values are equal to 0 for Level Presets that are static",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AutoMap",
            "description": "If equals 1, then this Level Preset will be automatically completely revealed on the Automap. If equals 0, then this Level Preset will be hidden on the Automap and will need to be explored",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Scan",
            "description": "If equals 1, then this Level Preset will allow the usage of warping with waypoints (This requires that the Level Preset has a waypoint object). If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Pops",
            "description": "Defines how many Pop tiles are defined in the Level Preset file. These Pop tiles are mainly used for controlling the roof and wall popping when a player enters a building in an area",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PopPad",
            "description": "Determines the size of the Pop tile area, by using an offset value. This offset value can increase or decrease the size of the Pop tile size if it has a positive or negative value",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Files",
            "description": "Determines the number of different versions to use for the Level Preset. This value acts as a range, which the game will use for randomly choosing one of the File1 fields to build the Level Preset. This is how the Level Presets have variety when the area level is being built",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "File1",
            "description": "Specifies the name of which ds1 file to use. The ds1 files contain data for building Level Presets. If this value equals 0, then this field will be ignored. The number of these defined fields should match the value used in the \"Files\" field",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Dt1Mask",
            "description": "This functions as a bit field mask with a size of a 32 bit value. This explains to the ds1 file which of the 32 dt1 tile files to use from a Level Type when assembling the Level Preset. Each File 1 field value from LevelTypes.txt is assigned a bit value, up to the 32 possible bit values. (For example: File1 = 1, File2=2, File3 = 4, File4=8, File5=16….File32 = 2147483648). To build the \"Dt1Mask\", you would add their associated bit values together for a total value. This total value is the bitmask value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}