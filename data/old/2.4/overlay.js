// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["overlay"] = {
    "title": "Overlay.txt",
    "overview": "This file controls the overlay graphics related to States, auras, cast animations, curses, and buffs",
    "fields": [
        {
            "name": "overlay",
            "description": "Defines the name of the overlay, used in other data files",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Filename",
            "description": "Defines which DCC file to use for the Overlay",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this Overlay (0 = Classic mode | 100 = Expansion mode)\"'>",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Character",
            "description": "Used for name categorizing Overlays for unit translation mapping",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PreDraw",
            "description": "If equals 1, then display the Overlay in front of Sprites. If equals 0, then display the Overlay behind Sprites",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "1ofN",
            "description": "Controls how to randomly display Overlays. This value will randomly add to the current index of the Overlay to possibly use another Overlay that is indexed after this current Overlay. The formula is as follows: Index = Index + RANDOM(0, [\"1ofN\"]-1)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Xoffset",
            "description": "Sets the horizontal offset of the overlay on the unit. Positive values move it toward the left and negative values move it towards the right",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Yoffset",
            "description": "Sets the vertical offset of the overlay on the unit. Positive values move it down and negative values move it up",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Height1",
            "description": "These are additional values added to Yoffset. Only 1 of these Height1 fields are added, and which field gets added depends on the OverlayHeight value from MonStats2.txt (Example: If the \"OverlayHeight\" value is 4, then use the \"Height4\" field). Furthermore, If the \"OverlayHeight\" value is 0, then ignore these \"Height\" fields and add a default value of 75 to \"Yoffset\". Player unit types will always use \"Height2\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AnimRate",
            "description": "Controls the animation frame rate of the Overlay. The value is the number of frames that will update per second",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LoopWaitTime",
            "description": "Controls the number of periodic frames to wait until redrawing the Overlay. This only works with Overlays that are a loop type",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Trans",
            "description": "Controls the alpha mode for how the Overlay is displayed, which can affect transparency and blending. Referenced by the Code value of the Transparency Table",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "InitRadius",
            "description": "Controls the starting Light Radius value for the Overlay (Max = 18)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Radius",
            "description": "Controls the maximum Light Radius value for the Overlay. This can only be greater than or equal to InitRadius. If greater than, the Light Radius will increase in size per frame, starting from InitRadius until it matches this \"Radius\" value (Max = 18)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Red",
            "description": "Controls the Red color gradient of the Light Radius",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Green",
            "description": "Controls the Green color gradient of the Light Radius",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Blue",
            "description": "Controls the Blue color gradient of the Light Radius",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NumDirections",
            "description": "The number of directions in the cell file",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LocalBlood",
            "description": "Controls how to display green blood or VFX on a unit.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Quest Progress"
                ],
                [
                    "0",
                    "null"
                ],
                [
                    "1",
                    "Transform the default red blood splatter to green blood"
                ],
                [
                    "2",
                    "Change the monster palette to green"
                ]
            ]
        }
    ]
}