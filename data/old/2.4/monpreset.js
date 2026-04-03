// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monpreset"] = {
    "title": "MonPreset.txt",
    "overview": "This file controls which monsters are preloaded in a preset, based on the Act number",
    "fields": [
        {
            "name": "Act",
            "description": "Defines the Act number used for each Monster Preset. Uses values between 1 to 5",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Place",
            "description": "Defines a Super Unique monster from SuperUniques.txt, a monster from MonStats.txt or a place from MonPlace.txt. This defines the Monster Preset which is used for preloading, such as during level transitions",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}