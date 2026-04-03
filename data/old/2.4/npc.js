// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["npc"] = {
    "title": "npc.txt",
    "overview": "This file controls how each town NPC manipulates their store prices",
    "fields": [
        {
            "name": "NPC",
            "description": "Points to the matching \"ID\" value in the monstats.txt file. This should not be changed",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "buy mult",
            "description": "Used to calculate the item's price when it is bought by the NPC from the player. This number is a fraction of 1024 in the following formula: [cost] * [buy mult] / 1024",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "sell mult",
            "description": "Used to calculate the item's price when it is sold by the NPC to the player. This number is a fraction of 1024 in the following formula: [cost] * [sell mult] / 1024",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rep mult",
            "description": "Used to calculate the cost to repair an item. This number is a fraction of 1024 in the following formula: [cost] * [rep mult] / 1024. This is then used to influence the repair cost based on the item durability and charges",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "questflag A",
            "description": "If the player has this quest flag progress, then apply the relative additional price calculations. Referenced by the Code value of the Quest Flags Table",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "questbuymult A",
            "description": "Same functionality as the buy mult field, except it applies after it and relies on the questflag A field",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "questsellmult A",
            "description": "Same functionality as the sell mult field, except it applies after it and relies on the questflag A field",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "questrepmult A",
            "description": "Same functionality as the rep mult field, except it applies after it and relies on the questflag A field",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "max buy & max buy (N) & max buy (H)",
            "description": "Sets the maximum price that the NPC will pay, when the player sells an item in Normal Difficulty, Nightmare Difficulty, and Hell Difficulty, respectively",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}