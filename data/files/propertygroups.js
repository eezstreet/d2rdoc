// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["propertygroups"] = {
    "title": "PropertyGroups.txt",
    "overview": "",
    "fields": [
        {
            "name": "code",
            "description": "",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 32
            }
        },
        {
            "name": "pickmode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "prop#",
            "description": "",
            "altNames": [
                "prop1",
                "prop2",
                "prop3",
                "prop4",
                "prop5",
                "prop6",
                "prop7",
                "prop8"
            ],
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": ""
            }
        },
        {
            "name": "parMin#",
            "description": "",
            "altNames": [
                "parMin1",
                "parMin2",
                "parMin3",
                "parMin4",
                "parMin5",
                "parMin6",
                "parMin7",
                "parMin8"
            ],
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "parMax#",
            "description": "",
            "altNames": [
                "parMax1",
                "parMax2",
                "parMax3",
                "parMax4",
                "parMax5",
                "parMax6",
                "parMax7",
                "parMax8"
            ],
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "A number or references $!skills#skill!$, $!MonType#type!$, or $!states#state!$"
            }
        },
        {
            "name": "modMin#",
            "description": "",
            "altNames": [
                "modMin1",
                "modMin2",
                "modMin3",
                "modMin4",
                "modMin5",
                "modMin6",
                "modMin7",
                "modMin8"
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "modMax#",
            "description": "",
            "altNames": [
                "modMax1",
                "modMax2",
                "modMax3",
                "modMax4",
                "modMax5",
                "modMax6",
                "modMax7",
                "modMax8"
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "chance#",
            "description": "",
            "altNames": [
                "chance1",
                "chance2",
                "chance3",
                "chance4",
                "chance5",
                "chance6",
                "chance7",
                "chance8"
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}