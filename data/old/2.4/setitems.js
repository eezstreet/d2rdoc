// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["setitems"] = {
    "title": "SetItems.txt",
    "overview": "Thisfile controls the item modifiers for each Set item in a Set",
    "fields": [
        {
            "name": "index",
            "description": "Links to a string key for displaying the Set item name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "set",
            "description": "Defines the Set to link to this Set Item (must match the Index field from Sets.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "item",
            "description": "Defines the baseline item code to use for this Set item (must match the code value from AMW.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rarity",
            "description": "Modifies the chances that this Unique item will spawn compared to the other Set items. This value acts as a numerator and a denominator. Each \"rarity\" value gets summed together to give a total denominator, used for the random roll for the item. For example, if there are 3 possible Set items, and their \"rarity\" values are 3, 5, 7, then their chances to be chosen are 3/15, 5/15, and 7/15 respectively. (The minimum \"rarity\" value equals 1)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lvl",
            "description": "The item level for the item, which controls what object or monster needs to be in order to drop this item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lvl req",
            "description": "The minimum character level required to equip the item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "chrtransform",
            "description": "Controls the color change of the item when equipped on a character or dropped on the ground. If empty, then the item will have the default item color. Referenced from the Code column in Colors.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invtransform",
            "description": "Controls the color change of the item in the inventory UI. If empty, then the item will have the default item color. Referenced from the Code column in Colors.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invfile",
            "description": "An override for the invfile field from AMW.txt. Uses the item field by default",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "flippyfile",
            "description": "An override for the flippyfile field from AMW.txt. Uses the item field by default",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dropsound",
            "description": "An override for the dropsound field from AMW.txt. Uses the item field by default",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dropsfxframe",
            "description": "An override for the dropsfxframe field from AMW.txt. Uses the item field by default",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "usesound",
            "description": "An override for the usesound field from the AMW.txt. Uses the item field by default",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cost mult",
            "description": "Multiplicative modifier for the Set item's buy, sell, and repair costs",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cost add",
            "description": "Flat integer modification to the Set item's buy, sell, and repair costs. This is added after the \"cost mult\" has modified the costs",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "add func",
            "description": "Controls how the additional Set item properties (aprop#a & aprob#b) will function on the Set item based on other related set items are equipped",
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
                    "0 (or empty)",
                    "Additional Set item properties will function like normal item properties, ignoring the Set"
                ],
                [
                    "1",
                    "Additional Set item properties will be added depending on which specific Set item is equipped. Each Set item has their own index depending on their order in data and the $!#set!$ they belong to. For example, if a Set item is defined first in the list, that that it has the index equal to 1, which means this function will make $!#aprop1a!$ and $!#aprop1b!$ fields only be added to a Set Item when that specific Set item of index 1 is equipped."
                ],
                [
                    "2",
                    "Additional Set item properties will be added depending the number of related Set items equipped. For example, if 2 Set items are equipped, then the $!#aprop1a!$, $!#aprop1b!$, $!#aprop2a!$, and $!#aprop2b!$ fields will be added to the Set item."
                ]
            ]
        },
        {
            "name": "prop1",
            "description": "Controls the item properties that are add baseline to the Set Item (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "par1",
            "description": "The stat's \"parameter\" value associated with the related property (prop1). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "min1",
            "description": "The stat's \"min\" value to assign to the related property (prop1). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "max1",
            "description": "The stat's \"max\" value to assign to the related property (prop1). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "aprop1a",
            "description": "Controls the item properties that are added to the Set Item when other pieces of the Set are also equipped (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "apar1a",
            "description": "The stat's \"parameter\" value associated with the related property (aprop1a). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "amin1a",
            "description": "The stat's \"min\" value to assign to the related property (aprop1a). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "amax1a",
            "description": "The stat's \"max\" value to assign to the related property (aprop1a). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "aprop1b",
            "description": "Controls the item properties that are added to the Set Item when other pieces of the Set are also equipped. Each of these numbered fields are paired with the related \"aprop#a\" field as an additional item property. (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "apar1b",
            "description": "The stat's \"parameter\" value associated with the related property (aprop1b). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "amin1b",
            "description": "The stat's \"min\" value to assign to the related property (aprop1b). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "amax1b",
            "description": "The stat's \"max\" value to assign to the related property (aprop1b). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "diablocloneweight",
            "description": "The amount of weight added to the diablo clone progress when this item is sold. When offline, selling this item will instead immediately spawn diablo clone.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}