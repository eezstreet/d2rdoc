// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["pettype"] = {
    "title": "pettype.txt",
    "overview": "This file controls the various statistics for each type of pet from all the classes summon Skills",
    "fields": [
        {
            "name": "PetType",
            "description": "Defines the name of the pet type, used in the PetType column in Skills.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "group",
            "description": "Used as an ID field, where if pet types share the same group value, then only 1 pet of that group is allowed to be alive at any time. If equals 0 (or null), then ignore this",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "basemax",
            "description": "This sets a baseline maximum number of pets allowed to be alive when skill levels are reset or changed",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "warp",
            "description": "If equals 1, then the Pet will teleport to the player when the player teleports or warps to another area. If equals 0, then the pet will die instead",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "range",
            "description": "If equals 1, then the Pet will die if the player teleports or warps to another area and is located more than 40 grid tiles in distances from the Pet. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "partysend",
            "description": "If equals 1, then tell the Pet to do the Party Location Update command (find the location of its Player) when its health changes. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "unsummon",
            "description": "If equals 1, then the Pet can be unsummoned by the Unsummon skill function. If equals 0, then the Pet cannot be unsummoned",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "automap",
            "description": "If equals 1, then display the Pet on the Automap. If equals 0, then hide the pet on the Automap",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "name",
            "description": "",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "drawhp",
            "description": "If equals 1, then display the Pet's Life bar under the party frame. If equals 0, then hide the Pet's Life bar under the party icon",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "icontype",
            "description": "Controls the functionality for how to display the Pet Icon and number of Pets counter",
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
                    "Do not display the Pet icon"
                ],
                [
                    "1",
                    "Display the Pet icon and do not show the Pet counter"
                ],
                [
                    "2",
                    "Display the Pet icon and show the Pet counter"
                ]
            ]
        },
        {
            "name": "baseicon",
            "description": "Define which DC6 file to use for the default Pet's icon in its party frame",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mclass1",
            "description": "Defines the alternative pet to use for the PetType by using that specific unit's hcIDx from Monstats.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "micon1",
            "description": "Defines which DC6 file to use for the related \"mclass\" Pet's icon in its party frame",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}