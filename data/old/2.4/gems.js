// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["gems"] = {
    "title": "gems.txt",
    "overview": "This file controls the item modifiers of Gems and runes for each item type<br>This file is used by the following files: Weapons.txt, Armor.txt, Misc.txt",
    "fields": [
        {
            "name": "name",
            "description": "This is a reference field to define the gem/rune name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "letter",
            "description": "Defines the string that is concatenated together in the item tooltip when a rune is socketed into an item",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "transform",
            "description": "Controls the color change of the item after being socketed by the gem/rune. Referenced from the Index value in colors.txt",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "code",
            "description": "Defines the unique item code used to create the gem/rune",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "weaponMod1Code",
            "description": "Controls the item properties that the gem/rune provides when socketed into an item with a \"gemapplytype\" value that equals 0 (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "weaponMod1Param",
            "description": "The stat's \"parameter\" value associated with the listed property (weaponMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "weaponMod1Min",
            "description": "The stat's \"min\" value associated with the listed property (weaponMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "weaponMod1Max",
            "description": "The stat's \"max\" value to assign to the listed property (weaponMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "helmMod1Code",
            "description": "Controls the item properties that the gem/rune provides when socketed into an item with a \"gemapplytype\" value that equals 1 (Uses the Code field from Properties.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "helmMod1Param",
            "description": "The stat's \"parameter\" value associated with the listed property (helmMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "helmMod1Min",
            "description": "The stat's \"min\" value associated with the listed property (helmMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "helmMod1Max",
            "description": "The stat's \"max\" value to assign to the listed property (helmMod1Code). Usage depends on the (Function ID field from Properties.txt)shieldMod1Code - [O] - Controls the item properties that the gem/rune provides when socketed into an item with a \"gemapplytype\" value that equals 2 (Uses the Code field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "shieldMod1Param",
            "description": "The stat's \"parameter\" value associated with the listed property (shieldMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "shieldMod1Min",
            "description": "The stat's \"min\" value associated with the listed property (shieldMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "shieldMod1Max",
            "description": "The stat's \"max\" value to assign to the listed property (shieldMod1Code). Usage depends on the (Function ID field from Properties.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}