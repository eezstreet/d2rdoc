// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["lvltypes"] = {
    "title": "LvlTypes.txt",
    "overview": "This file controls which files containing tile graphics are used for creating maps. This looks at dt1 files, which contain tile images of the environments foundin the game. Each line in this file defines a Level Type and what files it uses.<br>The order of each Level Type defined in this file will convey what ID value it has, which is referenced by the following files: Levels.txt, LvlPrest.txt<br>The order of these Level Types should not be changed",
    "fields": [
        {
            "name": "Name",
            "description": "This is a reference field to define the name of each Level Type",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ID",
            "description": "This is a reference field to define the index of each Level Type",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "File 1",
            "description": "Specifies the name of which dt1 file to use. The dt1 files contain the images for each area tile found in each Act. If this value equals 0, then this field will be ignored",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Act",
            "description": "Defines which Act is related to the Level Type. When loading an Act, the game will only use the Level Types associated with that Act number. Uses a decimal number to convey each Act number (Ex: A value of 3 means Act 3)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}