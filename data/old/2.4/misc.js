// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["misc"] = {
    "title": "misc.txt",
    "referenceFiles": [
        "shareditems"
    ],
    "appendFiles": [
        "shareditems"
    ],
    "overview": "This file controls the functionalities for miscellaneous type items. This file is loaded together with other similar files in the following order: weapons.txt, armor.txt, misc.txt. These combined files form the items structure. Columns that typically only exist in one of the files will be listed below all of the shared column entries.",
    "fields": [
        {
            "name": "autobelt",
            "description": "If equals 1, then the item will automatically be placed is a free slot in the belt when picked up, if possible. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "bettergem",
            "description": "Links to another item's Code field. Also used by Function 18 from the Code field in Shrines.txt to specify which gem is the upgraded version",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "multibuy",
            "description": "If equals 1, then use the multi-buy transaction function when holding the shift key and buying this item from an NPC store. This multi-buy function will automatically purchase enough of the item to fill up to a full quantity stack or fill the available belt slots if the item has the autobelt field enabled. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spellicon",
            "description": "Determines the icon asset for displaying the item's spell. This uses an ID value based on the global skillicon file. If this value equals -1, then the item's spell will not display an icon. Used as a parameter for a PSpell function",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "pspell",
            "description": "Uses the Code value to select a spell from the Player Spell Table when the item is used. This depends on the item type.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "state",
            "description": "Links to a State field defined in the States.txt file. It signifies what state will be applied to the player when the item is used. Used as a parameter for a PSpell function",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cstate1",
            "description": "Links to a State field defined in the States.txt file. It signifies what state will be removed from the player when the item is used. Used as a parameter for a PSpell function",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "len",
            "description": "Calculates the frame length of a state. Used as a parameter for a PSpell function",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "stat1",
            "description": "Controls the stat modifier when the item is used (Uses the Code field from Properties.txt). Used as a parameter for a PSpell function",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "calc1",
            "description": "Calculates the value of the above stat1 field. Used as a parameter for a PSpell function",
            "type": {
                "type": "calc",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spelldesc",
            "description": "Uses a code value to format and display string for the item's tooltip. 0 = Do nothing, 1 = Add spelldescstr string, 2 = Evaluate spelldesccalc with stat adjustments, 3 = Evaluate spelldesccalc and append, 4 = Evaluate spelldesccalc and insert",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Parameters",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    "$!#spelldescstr!$<br>$!#spelldescstr2!$",
                    "1. Add the $!#spelldescstr!$ string to the item tooltip<br>2. If $!#spelldescstr2!$ is not null, then use this string instead of $!#spelldescstr!$ string when playing in controller mode"
                ],
                [
                    "2",
                    "$!#spelldescstr!$<br>$!#calc1!$<br>$!#stat1!$",
                    "1. Evaluate the $!#calc1!$ field<br>2. If the $!#stat1!$ value equals \"hitpoints\" or \"hpregen\" then adjust the calculated value based on the relative $!charstats#HealthPotionPercent!$ value.<br>3. If the $!#stat1!$ value equals \"mana\" or \"manarecovery\" then adjust the calculated value based on the relative $!charstats#ManaPotionPercent!$ value.<br>4. Insert the calculated value into the $!#spelldescstr!$ string and add the string to the item tooltip"
                ],
                [
                    "3",
                    "$!#spelldescstr!$<br>$!#calc1!$",
                    "1. Evaluate the $!#calc1!$ field<br>2. Add the $!#spelldescstr!$ string to the item tooltip<br>3. Append a space string and the calculated value after the $!#spelldescstr!$ string to the item tooltip"
                ],
                [
                    "4",
                    "$!#spelldescstr!$<br>$!#calc1!$",
                    "1. Evaluate the $!#calc1!$ field<br>2. Insert the calculated value into the $!#spelldescstr!$ string and add the string to the item tooltip"
                ]
            ]
        },
        {
            "name": "spelldescstr",
            "description": "Defines the primary string key used by the spelldesc table",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spelldescstr2",
            "description": "Defines the secondary string key used by the spelldesc table",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spelldesccalc",
            "description": "Value applied or used by the spelldesc table",
            "type": {
                "type": "calc",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spelldesccolor",
            "description": "Uses a code value for color in the spelldesc table. 0=White, 1=Red, 2=Green, 3=Blue, 4=Light Gold, 5=Grey, 6=Black, 7=Dark Gold, 8=Orange, 9=Yellow, 10=Dark Green, 11=Purple, 12=Medium Green",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}