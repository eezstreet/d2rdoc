// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["treasureclassex"] = {
    "title": "TreasureClassEx.txt",
    "overview": "This file controls the Treasure Class linked to a monster drop. Treasure Classes are groups of item types and their chances of dropping from a monster.<br>This is used by the following data files: monstats.txt, SuperUniques.txt<br>Other Treasure Classes referenced in this file, must be placed above the TC referencing it (upstream)",
    "fields": [
        {
            "name": "Treasure Class",
            "description": "Defines the unique Treasure Class ID, that is referenced in other files",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "group",
            "description": "Assigns the Treasure Class to a group ID value, which will connect this Treasure Class with other Treasure Classes, as a potential Treasure Class to use for an itemdrop. When determining which Treasure Class to use for an item drop, the game will iterate through all Treasure Classes that share the same group. This field works with the level field to determine an ideal Treasure Class to use for the monster drop. Treasure Classes that share the same group should be in contiguous order",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "level",
            "description": "Defines the level of a Treasure Class. Monsters who have a Treasure Class will pick the Treasure Class that a level value that is less than or equal to the monster's level. This is ignored for Boss monsters",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Picks",
            "description": "Controls how to handle the calculations for item drops. If this value is positive, then this value will control how many item drop chances will be rolled for the Treasure Class using the \"Prob#\" fields as probability values. If this value is negative, then this value functions as the total guaranteed quantity of item drops from the Treasure Class, and each \"Prob#\" field now defines the quantity of items generated from its related \"Item#\" field. If this field is empty, then default to a value of 1",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Unique",
            "description": "Modifies the item ratio drop for a Unique Quality item. A higher value means a better chance of being chosen. (ItemRatio.txt for an explanation for how the Item Quality is chosen)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Set",
            "description": "Modifies the item ratio drop for a Set Quality item. A higher value means a better chance of being chosen. (ItemRatio.txt for an explanation for how the Item Quality is chosen)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Rare",
            "description": "Modifies the item ratio drop for a Rare Quality item. A higher value means a better chance of being chosen. (ItemRatio.txt for an explanation for how the Item Quality is chosen)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Magic",
            "description": "Modifies the item ratio drop for a Magic Quality item. A higher value means a better chance of being chosen. (ItemRatio.txt for an explanation for how the Item Quality is chosen)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NoDrop",
            "description": "Controls the probability of no item dropping by the Treasure Class. The higher this value, then the more likely no item will drop from the monster. This can be automatically be affected by the number of players currently in the game",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Item1",
            "description": "Defines a potential ItemType or other Treasure Class that can drop from this Treasure Class. Linking another Treasure Class in this field means that there is a chance to use that Treasure Class group of items which the game will then calculate a selection from that Treasure Class, and so on",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Prob1",
            "description": "The individual probability for each related Item1 drop. The higher this value, then the more likely the Item1 field will be chosen. The chance a drop is picked is calculated by summing all Prob1 field values and the NoDrop value for a total denominator value, and then having each Prob1 value and the NoDrop value rolling their chance out of the total denominator value for a drop.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}