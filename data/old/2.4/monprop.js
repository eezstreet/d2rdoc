// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monprop"] = {
    "title": "MonProp.txt",
    "overview": "This file controls special properties that can be added to a monster, based on the game difficulty<br>The \"(N)\" text in field names signifies to use that specific value for games in Nightmare difficulty<br>The \"(H)\" text in field names signifies to use that specific value for games in Hell difficulty<br>This file is used by the monstats.txt file",
    "fields": [
        {
            "name": "ID",
            "description": "Defines the monster that should gain the Property. Points to the matching \"ID\" value in the monstats.txt file",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "prop1",
            "description": "Defines with Property to apply to the monster (Uses the \"code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "chance1",
            "description": "The percent chance that the related property (prop#) will be assigned. If this value equals 0, then the Property will always be applied",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "par1",
            "description": "The \"parameter\" value associated with the related property (prop#). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "min1",
            "description": "The \"min\" value to assign to the related property (prop#). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "max1",
            "description": "The \"max\" value to assign to the related property (prop#). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}