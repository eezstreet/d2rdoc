// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["hirelingdesc"] = {
    "title": "hirelingdesc.txt",
    "overview": "This file controls attributes about player mercenaries that relate to the monster class but not the specific statblocks.",
    "fields": [
        {
            "name": "id",
            "description": "The id of the hireling monster class as defined in monstats.txt",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "alternateVoice",
            "description": "If equals 1, then the hireling will use the alternate (feminine) voice type for voice lines. If equals 0, then it will use the masculine voice type.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}