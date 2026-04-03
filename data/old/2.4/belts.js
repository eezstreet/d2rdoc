// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["belts"] = {
    "title": "belts.txt",
    "overview": "This file controls the statistics for how belts and their various item slots work.<br>This file relies on the belt field from the Armor.txt file. Each belt entry in this file defines a belt type that controls how many slots the belt item provides.<br>The game uses the 3rd entry is defined as the \"default\" belt, meaning that the player has no belt equipped, and the game will use this entry's stats to determine how to handle the belt slots.",
    "fields": [
        {
            "name": "name",
            "description": "This is a reference field to define the belt type",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "numboxes",
            "description": "This integer field defines the number of item slots in the belt. This is used when inserting items into the belt and also for handling the removal of items when the belt item is unequipped.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "box1left",
            "description": "Specifies the belt slot left side coordinates. This is use for Server verification purposes and does not affect the local box UI in the client.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "box1right",
            "description": "Specifies the belt slot right side coordinates. This is use for Server verification purposes and does not affect the local box UI in the client.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "box1top",
            "description": "Specifies the belt slot left top coordinates. This is use for Server verification purposes and does not affect the local box UI in the client.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "box1bottom",
            "description": "Specifies the belt slot bottom side coordinates. This is use for Server verification purposes and does not affect the local box UI in the client.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "defaultItemTypeCol1",
            "description": "Specifies the default item type used for the populate belt and auto-use functionality on controller.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "defaultItemCodeCol1",
            "description": "Specifies the default item code used for the populate belt and auto-use functionality on controller. Leaving this blank uses no code and instead relies entirely on the item type.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}