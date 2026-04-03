// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["magicprefix"] = {
    "title": "MagicPrefix.txt",
    "overview": "These files control the possible magic stat modifiers applied as either a prefix or suffix to the item.<br>These item affixes will appear at the start or end of an item's name respectively<br>This file is loaded together with other similar files in the following order: magicsuffix.txt, magicprefix.txt, AutoMagic.txt<br>These stat modifiers may only appear on magical or higher quality items, excluding sets and uniques.",
    "fields": [
        {
            "name": "Name",
            "description": "Defines the item affix name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this item affix (&lt;100 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spawnable",
            "description": "If equals 1, then this item affix is used as part of the game's randomizer for assigning item modifiers when an item spawns. If equals 0, then this item affix is never used",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rare",
            "description": "If equals 1, then this item affix can be used when randomly assigning item modifiers when a rare item spawns. If equals 0, then this item affix is not used for rare items",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "level",
            "description": "The minimum item level required for this item affix to spawn on the item. If the item level is below this value, then the item affix will not spawn on the item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "maxlevel",
            "description": "The maximum item level required for this item affix to spawn on the item. If the item level is above this value, then the item affix will not spawn on the item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "levelreq",
            "description": "The minimum character level required to equip an item that has this item affix",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "classspecific",
            "description": "Controls if this item affix should only be used for class specific items. This relies on the Class specified from ItemTypes.txt, for the specific item. Referenced from the Code column in PlayerClass.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "class",
            "description": "Controls which character class is required for the class specific level requirement (classlevelreq field). Referenced from the Code column in PlayerClass.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "classlevelreq",
            "description": "The minimum character level required for a specific class in order to equip an item that has this item affix. This relies on the class specified. If equals null, then the class will default to using the levelreq field",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "frequency",
            "description": "Controls the probability that the affix appears on the item (a higher value means that the item affix will appear on the item more often). This value gets summed together with other \"frequency\" values from all possible item affixes that can spawn on the item, and then is used as a denominator value for the randomizer. Whichever item affix is randomly selected will be the one to appear on the item. The formula is calculated as the following: [Item Affix Selected] = [\"frequency\"] / [Total Frequency]. If the item has a magic level (from the \"magic lvl\" field in Weapons.txt/Armor.txt/Misc.txt) then the magic level value is multiplied with this value. If equals 0, then this item affix will never appear on an item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "group",
            "description": "Assigns an item affix to a specific group number. Items cannot spawn with more than 1 item affix with the same group number. This is used to guarantee that certain item affixes do not overlap on the same item. If this field is null, then the group number will default to group 0",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod1code",
            "description": "Controls the item properties for the item affix (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod1param",
            "description": "The \"parameter\" value associated with the listed property (mod). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod1min",
            "description": "The \"min\" value to assign to the listed property (mod). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod1max",
            "description": "The \"max\" value to assign to the listed property (mod). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "transformcolor",
            "description": "Controls the color change of the item after spawning with this item affix. If empty, then the item affix will not change the item's color. Referenced from the Code column in Colors.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "itype1",
            "description": "Controls what Item Types are allowed to spawn with this item affix. Uses the Code field from ItemTypes.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "etype1",
            "description": "Controls what Item Types are excluded to spawn with this item affix. Uses the Code field from ItemTypes.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "multiply",
            "description": "Multiplicative modifier for the item's buy and sell costs, based on the item affix (Calculated in 1024ths for buy cost and 4096ths for sell cost)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "add",
            "description": "Flat integer modification to the item's buy and sell costs, based on the item affix",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}