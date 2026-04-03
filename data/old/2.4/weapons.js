// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["weapons"] = {
    "title": "weapons.txt",
    "referenceFiles": [
        "shareditems"
    ],
    "appendFiles": [
        "shareditems"
    ],
    "overview": "This file controls the functionalities for weapon type items. This file is loaded together with other similar files in the following order: weapons.txt, armor.txt, misc.txt. These combined files form the items structure. Columns that typically only exist in one of the files will be listed below all of the shared column entries.",
    "fields": [
        {
            "name": "1or2handed",
            "description": "If equals 1, then the item will be treated as a one-handed and two-handed weapon by the Barbarian class. If equals 0, then the Barbarian can only use this weapon as either one-handed or two-handed, but not both",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "2handed",
            "description": "If equals 1, then the item will be treated as two-handed weapon. If equals 0, then the item will be treated as one-handed weapon",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "2handedwclass",
            "description": "Defines the two-handed weapon class, which controls what character animations are used when the weapon is equipped. Referenced by the Code value of the Weapon Class Table",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "2handmindam",
            "description": "The minimum physical damage provided by the weapon if the item is two-handed. This relies on the 2handed field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "2handmaxdam",
            "description": "The maximum physical damage provided by the weapon if the item is two-handed. This relies on the 2handed field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "hit class",
            "description": "Defines the hit class of the weapon which is used to know what SFX to use when the weapon hits an enemy. Referenced from the Code column in HitClass.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "minmisdam",
            "description": "The minimum physical damage provided by the item if it is a throwing weapon",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "maxmisdam",
            "description": "The maximum physical damage provided by the item if it is a throwing weapon",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rangeadder",
            "description": "Adds extra range in grid spaces for melee attacks while the melee weapon is equipped. The baseline melee range is 1, and this field adds to that range",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "wclass",
            "description": "Defines the one-handed weapon class, which controls what character animations are used when the weapon is equipped. Referenced by the Code value of the Weapon Class Table",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}