// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["levels"] = {
    "title": "Levels.txt",
    "overview": "This file controls how the game controls the area levels, including how the level is built, what rules are allowed on the level, and what monsters/objects can spawn on the level.<br>This file uses the following files: AutoMap.txt, LevelGroups.txt, LvlMaze.txt, LvlPrest.txt, LvlSub.txt, LvlTypes.txt, LvlWarp.txt, monstats.txt, Objgroup.txt",
    "fields": [
        {
            "name": "Name",
            "description": "Defines the unique name pointer for the area level, which is used in other files",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ID",
            "description": "Defines the unique numeric ID for the area level, which is used in other files",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Pal",
            "description": "Defines which palette file to use for the area level. This uses index values from 0 to 4 to convey Act 1 to Act 5",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Act",
            "description": "Defines the Act number that the area level is a part of. This uses index values from 0 to 4 to convey Act 1 to Act 5",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "QuestFlag",
            "description": "Controls what quest record that the player needs to have completed before being allowed to enter this area level, while playing in Classic Mode. Each quest can have multiple quest records, and this field is looking for a specific quest record from a quest. Referenced by the Code value of the Quest Flags Table",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "QuestFlagEx",
            "description": "Controls what quest record that the player needs to have completed before being allowed to enter this area level, while playing in Expansion Mode. Each quest can have multiple quest records, and this field is looking for a specific quest record from a quest. Referenced by the Code value of the Quest Flags Table",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Layer",
            "description": "Defines a unique numeric ID that is used to identify which Automap data belongs to which area level when saving and loading data from the character save",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SizeX",
            "description": "Specifies the Length tile size values of an entire area level, which are used for determining how to build the level, for Normal, Nightmare, and Hell Difficulty, respectively",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SizeY",
            "description": "Specifies the Width tile size values of an entire area level, which are used for determining how to build the level, for Normal, Nightmare, and Hell Difficulty, respectively",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "OffsetX & OffsetY",
            "description": "Specifies the location offset coordinates (measured in tile size) for the origin point of the area level in the world. Must not overlap with other level offsets",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Depend",
            "description": "Assigns another level to be this area level's depended level, which controls this area level's position and how it starts building its tiles. Uses the level ID field. If this equals 0, then ignore this",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Teleport",
            "description": "Controls the functionality of the Sorceress Teleport skill and the Assassin Dragon Flight skill on the area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Teleport is disabled on the area level"
                ],
                [
                    "1",
                    "Teleport is enabled on the area level"
                ],
                [
                    "2",
                    "Teleport is enabled on the area level but adheres to the collision of the rooms"
                ]
            ]
        },
        {
            "name": "Rain",
            "description": "If equals 1, then allow rain to play its effects on the area level. If the level is part of Act 5, then it will snow on the area level, instead of rain. If equals 0, then it will never rain on the area level",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Mud",
            "description": "If equals 1, then random bubbles will animate on the tiles that are flagged as water tiles. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NoPer",
            "description": "If equals 1, then allow the use of display option of Perspective Mode while the player is in the level. If equals 0, then disable the option of Perspective Mode and force the player to use Orthographic Mode while the player is in the level",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LOSDraw",
            "description": "If equals 1, then the level will check the player's line of sight before drawing monsters. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FloorFilter",
            "description": "If equals 1 and if the floor's layer in the area level equals 1, then draw the floor tiles with a linear texture sampler. If equals 0, then draw the floor tiles with a nearest texture sampler",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "BlankScreen",
            "description": "If equals 1, then draw the area level screen. If equals 0, then do not draw the area level screen, meaning that the level will be a blank screen",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DrawEdges",
            "description": "If equals 1, then draw the areas in levels that are not covered by floor tiles. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DrlgType",
            "description": "Determines the type of Dynamic Random Level Generation used for building and handling different elements of the area level. Uses the Code from the table below to handle which type of DRLG is used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "None"
                ],
                [
                    "1",
                    "Maze"
                ],
                [
                    "2",
                    "Preset"
                ],
                [
                    "3",
                    "Outdoor"
                ]
            ]
        },
        {
            "name": "LevelType",
            "description": "Defines the Level Type used for this area level. Uses the ID field from LvlTypes.txt",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SubType",
            "description": "Controls the group of tile substitutions for the area level (LvlSub.txt). There are defined sub-types to choose from, listed below.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "-1",
                    "None"
                ],
                [
                    "0",
                    "Border Cliffs"
                ],
                [
                    "1",
                    "Border Middle"
                ],
                [
                    "2",
                    "Border Corner"
                ],
                [
                    "3",
                    "Border General"
                ],
                [
                    "4",
                    "Border Wild Waypoint"
                ],
                [
                    "5",
                    "Border Wild Shrine"
                ],
                [
                    "6",
                    "Border Wild Themes"
                ],
                [
                    "7",
                    "Border Desert Waypoint"
                ],
                [
                    "8",
                    "Border Desert Shrine"
                ],
                [
                    "9",
                    "Border Desert Themes"
                ],
                [
                    "10",
                    "Siege Dirt"
                ],
                [
                    "11",
                    "Siege Snow"
                ],
                [
                    "12",
                    "Barricade"
                ],
                [
                    "13",
                    "Broken Barricade"
                ]
            ]
        },
        {
            "name": "SubTheme",
            "description": "Controls which theme number to use in a Level Substitution. The allowed values are 0 to 4, which convey which Prob0, Trials0, and Max0 field to use from the LvlSub.txt file. If this equals -1, then there is no sub theme for the area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SubWaypoint",
            "description": "Controls the level substitutions for adding waypoints in the area level (LvlSub.txt). This uses a defined sub type to choose from and also depends on the room having a waypoint tile",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SubShrine",
            "description": "Controls the level substitutions for adding Shrines in the area level (LvlSub.txt). This uses a defined sub type to choose from and also depends on the room allowing for a shrine to spawn",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Vis0",
            "description": "Defines the visibility of other area levels involved with this area level, allowing for travel functionalities between levels. This uses the ID field of another defined area level to link with this area level. If this equals 0, then no area level is specified",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Warp0",
            "description": "Uses the ID field from LvlWarp.txt, which defines which Level Warp to use when exiting the area level. This is connected with the definition of the related Vis0 field. If this equals -1, then no Level Warp is specified which should also mean that the related Vis0 field is not defined",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Intensity",
            "description": "Controls the intensity value of the area level's ambient colors. This affects brightness of the room's RGB colors. Uses a value between 0 and 255. If all these related fields equal 0, then the game ignores setting the area level's ambient colors",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Red",
            "description": "Controls the red value of the area level's ambient colors. Uses a value between 0 and 255",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Green",
            "description": "Controls the green value of the area level's ambient colors. Uses a value between 0 and 255",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Blue",
            "description": "Controls the blue value of the area level's ambient colors. Uses a value between 0 and 255",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Portal",
            "description": "If equals 1, then this area level will be flagged as a portal level, which is saved in the player's information and can be used for keeping track of the player's portal functionalities. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Position",
            "description": "If equals 1, then enable special casing for positioning the player on the area level. This can mean that the player could spawn on a different location on the area level, depending on the level room's position type. An example can be when the player spawns in a town when loading the game, or using a waypoint, or using a town portal. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SaveMonsters",
            "description": "If equals 1, then the game will save the monsters in the area level, such as when all players leave the area level. If equals 0, then monsters will not be saved and will be removed. This is usually disabled for areas where monsters do not spawn",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Quest",
            "description": "Controls what quest record is attached to monsters that spawn in this area level. This is used for specific quests handling lists of monsters in the area level. Referenced by the Code value of the Quest Flags Table",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "WarpDist",
            "description": "Defines the minimum pixel distance from a Level Warp that a monster is allowed to spawn near. Tile distance values are converted to game pixel distance values by multiplying the tile distance value by 160 / 32, where 160 is the width of pixels of a tile",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonLvl",
            "description": "Controls the overall monster level for the area level for Normal, Nightmare, and Hell Difficulty, respectively. This is for Classic mode only. This can affect the highest item level allowed to drop in this area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonLvlEx",
            "description": "Controls the overall monster level for the area level for Normal, Nightmare, and Hell Difficulty, respectively. This is for Expansion mode only. This can affect the highest item level allowed to drop in this area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonDen",
            "description": "Controls the monster density on the area level for Normal, Nightmare, and Hell Difficulty, respectively. This is a random value out of 100000, which will determine whether to spawn or not spawn a monster pack in the room of the area level. If this value equals 0, then no random monsters will populate on the area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonUMin",
            "description": "Defines the minimum number of Unique Monsters that can spawn in the area level for Normal, Nightmare, and Hell Difficulty, respectively. This field depends on the related MonDen fields being defined",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonUMax",
            "description": "Defines the maximum number of Unique Monsters that can spawn in the area level for Normal, Nightmare, and Hell Difficulty, respectively. This field depends on the related MonDen field being defined. Each room in the area level will attempt to spawn a Unique Monster with a 5/100 random chance, and this field's value will cap the number of successful attempts for the entire area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonWndr",
            "description": "If equals 1, then allow Wandering Monsters to spawn on this area level (WanderingMon.txt). This field depends on the related MonDen field being defined. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonSpcWalk",
            "description": "Defines a distance value, used to handle monster pathing AI when the level has certain pathing blockers, such as jail bars or rivers. In these cases, monsters will walk randomly until a player is located within this distance value or when the monsters find a possible path to target the player. If this equals 0, then ignore this field",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NumMon",
            "description": "Controls the number of different monsters randomly spawn in the area level. The maximum value is 13. This controls the number of random selections from the 25 related mon1 and nmon1 fields or umon1 fields, depending on the game difficulty and monster type",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mon1",
            "description": "Defines which monsters can spawn on the area level for Normal Difficulty. Uses the monster ID field from MonStats.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rangedspawn",
            "description": "If equals 1, then for the first monster, try to pick a ranged type. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "nmon1",
            "description": "Defines which monsters can spawn on the area level for Nightmare Difficulty and Hell Difficulty. Uses the monster ID field from MonStats.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "umon1",
            "description": "Defines which monsters can spawn as Unique monsters on this area level for Normal Difficulty. Uses the monster ID field from MonStats.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cmon1",
            "description": "Defines which Critter monsters can spawn on the area level. Uses the monster ID field from MonStats.txtCritter monsters are determined by the critter field from MonStats2.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cpct1",
            "description": "Controls the percent chance (out of 100) to spawn a Critter monster on the area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "camt1",
            "description": "Controls the amount of Critter monsters to spawn on the area level after they succeeded their random spawn chance from the above cpct1 field",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Themes",
            "description": "Controls the type of theme when building a level room. This value is a summation of possible values to build a bit mask for determining which themes to use when building a level room. For example, a value of 60 means that the area level can have the following themes: 32, 16, 8, 4.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SoundEnv",
            "description": "Uses the Index field from SoundEnviron.txt, which controls what music is played while the player is in the area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Waypoint",
            "description": "Defines the unique numeric ID for the Waypoint in the area level. If this value is greater than or equal to 255, then ignore this field",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LevelName",
            "description": "Used for displaying the name of the area level, such as when in the UI when the Automap is being viewed",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LevelWarp",
            "description": "Used for displaying the entrance name of the area level on Level Warp tiles that link to this area level. For example, when the player mouse hovers over a tile to warp to the area level, then this string is displayed",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LevelEntry",
            "description": "Used for displaying the UI popup title string when the player enters the area level",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ObjGrp0",
            "description": "Uses a numeric *ID Index to define which possible Object Groups to spawn in this area level (ObjGroup.txt). The game will go through each of these fields, so there can be more than 1 Object Group used in an area level. If this value equals 0, then ignore this",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ObjPrb0",
            "description": "Determines the random chance (out of 100) for each Object Group to spawn in the area level. This field depends on the related \"ObjGrp#\" field being defined",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LevelGroup",
            "description": "Defines what group this level belongs to. Used for condensing level names in desecrated (terror) zones messaging. See LevelGroups.txt.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}