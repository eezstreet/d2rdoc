// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["objpreset"] = {
    "title": "objpreset.txt",
    "overview": "This file controls which Objects are preloaded in a preset, based on the Act number",
    "fields": [
        {
            "name": "Index",
            "description": "Assigns a unique numeric ID to the Object Preset so that it can be properly referenced",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Act",
            "description": "Defines the Act number used for each Object Preset. Uses values between 1 to 5",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ObjectClass",
            "description": "Uses the Class field from Objects.txt, which assigns an Object to this Object Preset",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}