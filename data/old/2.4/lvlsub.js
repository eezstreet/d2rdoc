// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["lvlsub"] = {
    "title": "LvlSub.txt",
    "overview": "This file controls how tiles can be substituted in for other tiles. The game will divide the level into clusters and iterate through these clusters to randomly substitute tiles with different ones for more visual diversity.",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to describe the Level Substitution",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Type",
            "description": "This refers to the SubType field from the Levels.txt file. This defines a group that multiple substitutions can share",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "File",
            "description": "Specifies the name of which ds1 file to use. The ds1 files contain data for building Level Presets",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "CheckAll",
            "description": "If equals 1, then substitute each tile in the room. If equals 0, then substitute random tiles in the room.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "BordType",
            "description": "This controls how often substituting tiles can work for border tiles",
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
                    "Single One Only. This allows substituting for 1 border in total"
                ],
                [
                    "1",
                    "One Per Cluster. This allows substituting 1 border for each cluster in the level"
                ],
                [
                    "Other values",
                    "Allow substituting borders for all of the level"
                ]
            ]
        },
        {
            "name": "GridSize",
            "description": "Controls the tile size of a cluster for substituting tiles. This evenly affects both the X and Y size values of a room",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Dt1Mask",
            "description": "This functions as a bit field mask with a size of a 32 bit value. This explains to the ds1 file which of the 32 dt1 tile 1, File2=2, File3 = 4, File4=8, File5=16….File32 = 2147483648). To build the \"Dt1Mask\", you would add their associated bit values together for a total value. This total value is the bitmask value.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Prob0",
            "description": "This value affects the probability that the tile substitution is used. This is a random chance out of 100. Which \"Prob#\" field that is checked depends on the SubTheme value from the Levels.txt file",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Trials0",
            "description": "Controls the number of times to randomly substitute tiles in a cluster. If this value equals -1, then the game will try to do as many tile substitutions that can be allowed based on the cluster and tile size. This field depends on the CheckAll field being equal to 0",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Max0",
            "description": "The maximum number of clusters of tiles to substitute randomly. This field depends on the CheckAll field being equal to 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}