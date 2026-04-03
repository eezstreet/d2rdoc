// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["automap"] = {
    "title": "AutoMap.txt",
    "overview": "This file controls how the Automap in game will display the discovered parts of the area level and store this progress in character save files.<br>The Automap is composed of many different image files depicted as small icons to convey what part of the area level is being displayed. This file will assign these image files to their related map cells, which will properly build the Automap as the player explores the area.<br>Not all tiles will have image files assigned to them, and in these cases, those parts of the Automap will remain blank.",
    "fields": [
        {
            "name": "LevelName",
            "description": "Uses a string format system to define the Act number and name of the level type. Level types are static defined values that cannot be added. The number at the start of the string defines the Act number, and the word that follows this number defines the level type. This data should stay grouped by level.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "String Code",
                    "Description"
                ],
                [
                    "",
                    "Level Type None"
                ],
                [
                    "1 Town",
                    "Level Type 1 Town"
                ],
                [
                    "1 Wilderness",
                    "Level Type 1 Wilderness"
                ],
                [
                    "1 Cave",
                    "Level Type 1 Cave"
                ],
                [
                    "1 Crypt",
                    "Level Type 1 Crypt"
                ],
                [
                    "1 Monestary",
                    "Level Type 1 Monestary"
                ],
                [
                    "1 Courtyard",
                    "Level Type 1 Courtyard"
                ],
                [
                    "1 Barracks",
                    "Level Type 1 Barracks"
                ],
                [
                    "1 Jail",
                    "Level Type 1 Jail"
                ],
                [
                    "1 Cathedral",
                    "Level Type 1 Cathedral"
                ],
                [
                    "1 Catacombs",
                    "Level Type 1 Catacombs"
                ],
                [
                    "1 Tristram",
                    "Level Type 1 Tristram"
                ],
                [
                    "2 Town",
                    "Level Type 2 Town"
                ],
                [
                    "2 Sewer",
                    "Level Type 2 Sewer"
                ],
                [
                    "2 Harem",
                    "Level Type 2 Desert"
                ],
                [
                    "2 Basement",
                    "Level Type 2 Sewer"
                ],
                [
                    "2 Desert",
                    "Level Type 2 Desert"
                ],
                [
                    "2 Tomb",
                    "Level Type 2 Tomb"
                ],
                [
                    "2 Lair",
                    "Level Type 2 Lair"
                ],
                [
                    "2 Arcane",
                    "Level Type 2 Arcane"
                ],
                [
                    "3 Town",
                    "Level Type 3 Town"
                ],
                [
                    "3 Jungle",
                    "Level Type 3 Jungle"
                ],
                [
                    "3 Kurast",
                    "Level Type 3 Kurast"
                ],
                [
                    "3 Spider",
                    "Level Type 3 Spider"
                ],
                [
                    "3 Dungeon",
                    "Level Type 3 Dungeon"
                ],
                [
                    "3 Sewer",
                    "Level Type 3 Sewer"
                ],
                [
                    "4 Town",
                    "Level Type 4 Town"
                ],
                [
                    "4 Mesa",
                    "Level Type 4 Mesa"
                ],
                [
                    "4 Lava",
                    "Level Type 4 Hell"
                ],
                [
                    "5 Town",
                    "Level Type 6 Town"
                ],
                [
                    "5 Siege",
                    "Level Type 6 Siege"
                ],
                [
                    "5 Barricade",
                    "Level Type 6 Barricade"
                ],
                [
                    "5 Temple",
                    "Level Type 6 Temple"
                ],
                [
                    "5 Ice",
                    "Level Type 5 Ice Caves"
                ],
                [
                    "5 Baal",
                    "Level Type 5 Baal"
                ],
                [
                    "5 Lava",
                    "Level Type 5 Lava"
                ]
            ]
        },
        {
            "name": "TileName",
            "description": "Uses defined string codes to control the tile orientations on the Automap",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "String Code",
                    "Description"
                ],
                [
                    "fl",
                    "Base Floor"
                ],
                [
                    "wl",
                    "Base Left Wall"
                ],
                [
                    "wr",
                    "Base Right Wall"
                ],
                [
                    "wtlr",
                    "Base Upper Top Corner Right"
                ],
                [
                    "wtll",
                    "Base Upper Top Corner Left"
                ],
                [
                    "wtr",
                    "Base Upper Top Corner"
                ],
                [
                    "wbl",
                    "Base Lower Bottom Corner Left"
                ],
                [
                    "wbr",
                    "Base Lower Bottom Corner Right"
                ],
                [
                    "wld",
                    "Base Left Door"
                ],
                [
                    "wrd",
                    "Base Right Door"
                ],
                [
                    "wle",
                    "Base Left Exit"
                ],
                [
                    "wre",
                    "Base Right Exit"
                ],
                [
                    "co",
                    "Base Column"
                ],
                [
                    "sh",
                    "Base Shadow"
                ],
                [
                    "tr",
                    "Base Tree"
                ],
                [
                    "rf",
                    "Base Roof"
                ],
                [
                    "ld",
                    "Base Left Wall Down"
                ],
                [
                    "rd",
                    "Base Right Wall Down"
                ],
                [
                    "fd",
                    "Base Full Wall Down"
                ],
                [
                    "fi",
                    "Base Front Wall Down"
                ]
            ]
        },
        {
            "name": "Style",
            "description": "Defines a group numeric ID for the range of cells, meaning that the game will try to use cells that matc the same style value, after determining the Level Type and Tile Type. If this value is equal to 255, then the style is ignored in the \"Cel#\" field selection",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "StartSequence",
            "description": "The start index value for valid Cel1 field(s) to choose for displaying on the Automap. If this value is equal to 255, then both the \"StartSequence\" and \"EndSequence\" are ignored in the Cel1 field(s) field selection. If this value is equal to -1, then this field is ignored in the Cel1 field(s) field selection",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "EndSequence",
            "description": "The end index value for a valid Cel1 field(s) to choose for displaying on the Automap. If this value is equal to -1, then this field is ignored in the Cel1 field(s) selection",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Cel1",
            "description": "Determines the unique image frame to use from the MaxiMap.dc6 file that will be used to display on the Automap for that position of the level tile. There are multiple of these fields because they can be randomly chosen to give image variety in the Automap display. If the value equals -1, then this cell is not valid and will be ignored. If no cell is chosen overall, then nothing will be drawn in this area on the Automap.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}