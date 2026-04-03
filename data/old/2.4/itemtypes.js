// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["itemtypes"] = {
    "title": "ItemTypes.txt",
    "overview": "This file controls the general statistics for each type of item, which is then used for the item type fields in other files",
    "fields": [
        {
            "name": "ItemType",
            "description": "This is a reference field to define the Item Type name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "Defines the unique pointer for this Item Type, which is used by various data files",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Equiv1",
            "description": "Points to the index of another Item Type to reference as a parent. This is used to create a hierarchy for Item Types where the parents will have more universal settings shared across the related children",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Repair",
            "description": "If equals 1, then the item can be repaired by an NPC in the shop UI. If equals 0, then the item cannot be repaired",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Body",
            "description": "If equals 1, then the item can be equipped by a character (Also uses the BodyLoc1 field(s) as parameters). If equals 0, then the item can only be carried in the inventory, stash, or Horadric Cube",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "BodyLoc1",
            "description": "These are required parameters if the Body field is enabled. These fields specify the inventory slots where the item can be equipped. Referenced from the Code column in BodyLocs.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Shoots",
            "description": "Points to the index of another Item Type as the required equipped Item Type to be used as ammo",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Quiver",
            "description": "Points to the index of another Item Type as the required equipped Item Type to be used as this ammo's weapon",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Throwable",
            "description": "If equals 1, then it determines that this item is a throwing weapon. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Reload",
            "description": "If equals 1, then the item (considered ammo in this case) will be automatically transferred from the inventory to the required BodyLoc1 when another item runs out of that specific ammo. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ReEquip",
            "description": "If equals 1, then the item in the inventory will replace a matching equipped item if that equipped item was destroyed. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AutoStack",
            "description": "If equals 1, then if the player picks up a matching Item Type, then they will try to automatically stack together. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Magic",
            "description": "If equals 1, then this item will always have the Magic quality (unless it is a Quest item). If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Rare",
            "description": "If equals 1, then this item can spawn as a Rare quality. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Normal",
            "description": "If equals 1, then this item will always have the Normal quality. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Beltable",
            "description": "If equals 1, then this item can be placed in the character's belt slots. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MaxSockets1",
            "description": "Determines the maximum possible number of sockets that can be spawned on the item when the item level is greater than or equal to 1 and less than or equal to the matching MaxSocketsLevelThreshold1 value(s). The number of sockets is also determined by the Gemsockets value from AMW.txt",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MaxSocketsLevelThreshold1",
            "description": "Defines the item level thresholds using the above MaxSockets1 field(s)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TreasureClass",
            "description": "If equals 1, then allow this Item Type to be used in default treasure classes. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Rarity",
            "description": "Determines the chance for the item to spawn with stats, when created as a random Weapon/Armor/Misc item. Used in the following formula: IF RANDOM(0, ([\"Rarity\"] - [Current Act Level]))&gt; 0, THEN spawn stats",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "StaffMods",
            "description": "Determines if the Item Type should have class specific item skill modifiers. Grants skills to the class listed using the Code column in PlayerClass.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Class",
            "description": "Determines if this item should be useable only by a specific class. Referenced from the Code column in PlayerClass.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VarInvGfx",
            "description": "Tracks the number of inventory graphics used for this item type. This number much match the number of InvGfx1 field(s) used",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "InvGfx1",
            "description": "Defines a DC6 file to use for the item's inventory graphics. The entry amount should equal the value used in above VarInvGfx",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "StorePage",
            "description": "Uses a code to determine which UI tab page on the NPC shop UI to display this Item Type, such as after it is sold to the NPC. Referenced from the Code column in StorePage.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}