// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monequip"] = {
    "title": "monequip.txt",
    "overview": "This file controls how a monster may be created with specific type of inventory equipment items<br>These equipment items are randomly generated on the monster, based on the specified parameters in this file<br>This data relies on the \"inventory\" field being enabled for the listed monster, found in the monstats.txt file",
    "fields": [
        {
            "name": "monster",
            "description": "Defines the monster that should be equipped. Points to the matching ID value in the MonStats.txt file. If the monster has multiple defined equipment possibilities, then they should always be grouped together. The game will go through the list in order to match what is best to use for the monster",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "oninit",
            "description": "Defines if the monster equipment is added on initialization during the monster's creation, depending how the monster is spawned. Monsters created by a skill have this value set to 0. Monsters created by a level have this value set to 1",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "level",
            "description": "Defines the level requirement for the monster in order to gain this equipment. The game will prefer the highest level allowed, so the order of these equipment should be from highest level to lowest level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "item1",
            "description": "Item code that can be equipped on the monster",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "loc1",
            "description": "Specifies the inventory slot where the item will be equipped. Once an item is equipped on that body location, then the game will skip any duplicate calls to equipping the same body location. This is another reason why the equipment should be ordered from highest level to lowest level. Referenced from the Code column in BodyLocs.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod1",
            "description": "Controls the quality level of the related item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}