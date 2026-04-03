// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["cubemain"] = {
    "title": "cubemain.txt",
    "overview": "This file controls the recipes for the Horadric Cube",
    "fields": [
        {
            "name": "description",
            "description": "This is a reference field to define the cube recipe",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "enabled",
            "description": "If equals 1, then the recipe can be used in-game. If equals 0, then the recipe cannot be used in-game",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ladder",
            "description": "If equals 1, then the recipe can only be used on Ladder realm games. If equals 0, then the recipe can be used in all game types",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "min diff",
            "description": "The minimum game difficulty to use the recipe (0 = All Game Difficulties | 1 = Nightmare and Hell Difficulty only | 2 = Hell Difficulty only)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this recipe (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "op",
            "description": "Uses a function as an additional input requirement for the recipe. (See param and value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Op ID",
                    "Parameters",
                    "Description"
                ],
                [
                    "(empty)",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    "$!#param!$<br>$!#value!$",
                    "Require that the current day of the month is less than $!#param!$ or greater than $!#value!$"
                ],
                [
                    "2",
                    "$!#value!$",
                    "Require that the current day of the week does not equal $!#value!$<br>(0=None, 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday)"
                ],
                [
                    "3",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "4",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "5",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "6",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "7",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "8",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "9",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "10",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "11",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "12",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "13",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "14",
                    "$!#param!$<br>$!#value!$",
                    "Require that the player's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "15",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "16",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "17",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "18",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's current stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "19",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "20",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "21",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "22",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "23",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is greater than $!#value!$"
                ],
                [
                    "24",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is less than $!#value!$"
                ],
                [
                    "25",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is not equal to $!#value!$"
                ],
                [
                    "26",
                    "$!#param!$<br>$!#value!$",
                    "Require that the input item's non-base stat (using $!#param!$ as the stat ID from ItemStatCost.txt) is equal to $!#value!$"
                ],
                [
                    "27",
                    "$!#value!$",
                    "Require that the item's Mod Class is not equal to $!#value!$. An item's Mod Class value can be the item's unique ID or quality type, depending on the case."
                ],
                [
                    "28",
                    "",
                    "Checks that the item has the $!armor#quest!$ and $!armor#questdiffcheck!$ flag (includes $!weapons!$ and $!misc!$), then ensures that the item's quest difficulty is greater than the game's difficulty level"
                ]
            ]
        },
        {
            "name": "param",
            "description": "Integer value used as a possible parameter for the op function. Normally uses the *ID field from ItemStatCost.txt for the param value",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "value",
            "description": "Integer value used as a possible parameter for the op function. Normally used to compare against the *ID linked in param",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "class",
            "description": "Defines the recipe to be only usable by a defined class. Referenced from the Code column in PlayerClass.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "numinputs",
            "description": "Controls the number of items that need to be inside the cube for the recipe",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "input 1",
            "description": "Controls what items are required for the recipe. Uses either the item's unique code or a combination of pre-defined codes from the table below, separated by commas if needed. (hiq,noe)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "output",
            "description": "Controls the first to third output items. Uses either the item's unique code or a combination of pre-defined codes from the table below, separated by commas if needed. (hiq,noe).",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "Cow Portal",
                    "Special code to create the Portal to the Moo Moo Farm"
                ],
                [
                    "Pandemonium Portal",
                    "Special code to randomly create 1 of the 3 Pandemonium Portals: (The Matron's Den / The Forgotten Sands / The Furnace of Pain) (Does not create duplicate portals in the same game)"
                ],
                [
                    "Pandemonium Finale Portal",
                    "Special code to create the Portal to Uber Tristram"
                ],
                [
                    "Red Portal",
                    "Special code to create a permanent Red Portal to a Level ID.<br>The Level ID is determined by the output \"lvl=#\" code.<br>A max amount of portals that can be created by this recipe is determined by the output \"qty=#\""
                ],
                [
                    "usetype",
                    "Use the same item type as $!#input 1!$ for the output item's type"
                ],
                [
                    "useitem",
                    "Use the item from $!#input 1!$ as the output item"
                ],
                [
                    "qty=#",
                    "The number (#) of this item type created"
                ],
                [
                    "pre=#",
                    "Force the output item to have an item prefix, where # equals the ID of the prefix (see the row count on $!magicprefix!$)"
                ],
                [
                    "suf=#",
                    "Force the output item to have an item suffix, where # equals the ID of the suffix (see the row count on $!magicsuffix!$)"
                ],
                [
                    "low",
                    "Low Quality Item"
                ],
                [
                    "nor",
                    "Normal Item"
                ],
                [
                    "hiq",
                    "High Quality Item (Superior)"
                ],
                [
                    "mag",
                    "Magic Item"
                ],
                [
                    "set",
                    "Set Item"
                ],
                [
                    "rar",
                    "Rare Item"
                ],
                [
                    "uni",
                    "Unique Item"
                ],
                [
                    "crf",
                    "Crafted Item"
                ],
                [
                    "tmp",
                    "Tempered Item"
                ],
                [
                    "eth",
                    "Ethereal Item"
                ],
                [
                    "sock",
                    "Item with sockets, where # defines the number of sockets"
                ],
                [
                    "mod",
                    "Use the item modifiers from $!#input 1!$ as the output item's modifiers"
                ],
                [
                    "uns",
                    "Destroy all gems/runes/jewels in the item's sockets"
                ],
                [
                    "rem",
                    "Remove all gems/runes/jewels in the item's sockets"
                ],
                [
                    "reg",
                    "If the function has \"usetype\" and if the item is a Unique, then regenerate/reroll the Unique"
                ],
                [
                    "exc",
                    "Exceptional Item"
                ],
                [
                    "eli",
                    "Elite Item"
                ],
                [
                    "rep",
                    "Repair the Item"
                ],
                [
                    "rch",
                    "Recharge all of the skill charges on the Item"
                ],
                [
                    "lvl=#",
                    "A parameter for other output modifiers."
                ]
            ]
        },
        {
            "name": "lvl",
            "description": "Forces the output item level to be a specific level. If this field is used, then ignore the below plvl and ilvl fields",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "plvl",
            "description": "This is a numeric ratio that gets multiplied with the current player's level, to add to the output item's level requirement",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ilvl",
            "description": "This is a numeric ratio that gets multiplied with input 1's item's level, to add to the output item's level requirement",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod 1",
            "description": "Controls the output item properties (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod 1 chance",
            "description": "The percent chance that the property will be assigned. If this equals 0, then the Property will always be assigned",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod 1 param",
            "description": "The \"parameter\" value associated with the listed property (mod). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod 1 min",
            "description": "The \"min\" value to assign to the listed property (mod). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mod 1 max",
            "description": "The \"max\" value to assign to the listed property (mod). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}