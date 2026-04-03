// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["wanderingmon"] = {
    "title": "wanderingmon.txt",
    "overview": "This file controls the list of monsters that can be used as good NPC units to randomly place in certain area levels. The \"ActInfo.txt\" file controls the statistics on when to spawn wandering monsters, and this file simply controls the list of possible monsters to choose from.",
    "fields": [
        {
            "name": "class",
            "description": "Uses a monster \"ID\" defined from the monstats.txt file. Monsters defined here are added to a list which is used to randomly pick a monster to spawn in an area level.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}