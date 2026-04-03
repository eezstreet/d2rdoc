// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monlvl"] = {
    "title": "MonLvl.txt",
    "overview": "This file controls how monster statistics increase per level based on the current game type and difficulty<br>The \"(N)\" text in field names signifies to use that specific value for games in Nightmare difficulty<br>The \"(H)\" text in field names signifies to use that specific value for games in Hell difficulty<br>This file is used by MonStats.txt for all of these values",
    "fields": [
        {
            "name": "Level",
            "description": "An integer value to determine how to scale the monster's statistics when at a specific level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AC & AC(N) & AC(H)",
            "description": "Percentage multiplier for increasing the Monster's Defense (multiplies with the AC field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TH & TH(N) & TH(H)",
            "description": "Percentage multiplier for increasing the Monster's Attack Rating (multiplies with the A1TH and A2TH fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HP & HP(N) & HP(H)",
            "description": "Percentage multiplier for increasing the Monster's Life (multiplies with the minHP and maxHP fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DM & DM(N) & DM(H)",
            "description": "Percentage multiplier for increasing the Monster's Damage (multiplies with the A1MinD, A1MaxD, A2MinD, A2MaxD, El1MinD and El1MaxD fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "XP & XP(N) & XP(H)",
            "description": "Percentage multiplier for increasing the Experience provided to the player when killing the Monster (multiplies with the Exp fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "L-AC & L-AC(N) & L-AC(H)",
            "description": "Percentage multiplier for increasing the Monster's Defense (multiplies with the AC field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "L-TH & L-TH(N) & L-TH(H)",
            "description": "Percentage multiplier for increasing the Monster's Attack Rating (multiplies with the A1TH and A2TH fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "L-HP & L-HP(N) & L-HP(H)",
            "description": "Percentage multiplier for increasing the Monster's Life (multiplies with the minHP and maxHP fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "L-DM & L-DM(N) & L-DM(H)",
            "description": "Percentage multiplier for increasing the Monster's Damage (multiplies with the A1MinD, A1MaxD, A2MinD, A2MaxD, El1MinD and El1MaxD fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "L-XP & L-XP(N) & L-XP(H)",
            "description": "Percentage multiplier for increasing the Experience provided to the player when killing the Monster (multiplies with the Exp fields)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}