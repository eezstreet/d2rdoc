// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["itemratio"] = {
    "title": "itemratio.txt",
    "overview": "This file determines the quality of items when being spawned. After the game determines what Item Type should spawn, it then uses this file to calculate the quality of that item.<br>These Item Quality checks are used for most item drops in the game such as monster drops and chest drops.<br>The following files related to these calculations: ItemTypes.txt, Weapons.txt, Armor.txt, Misc.txt, Uniqueitems.txt, SetItems.txt, monstats.txt, TreasureClassEx.txt",
    "fields": [
        {
            "name": "Function",
            "description": "This is a reference field to define the item ratio name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Version",
            "description": "Defines which game version to use this item ratio (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Uber",
            "description": "If equals 1, then the item ratio will apply to items with Exceptional or Elite Quality. If equals 0, then the item ratio will apply to Normal Quality items (This is determined by the normcode, ubercode and ultracode fields in Armor/Weapons.txt)",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Class Specific",
            "description": "If equals 1, then the item ratio will apply to class-based items (This will compare to the Item Type's Class field from ItemTypes.txt to determine if the item is class specific)",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Unique",
            "description": "Base value for calculating the Unique Quality chance. Higher value means rarer chance. (Calculated first)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "UniqueDivisor",
            "description": "Modifier for changing the Unique Quality chance, based on the difference between the Monster Level and the Item's base level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "UniqueMin",
            "description": "The minimum value of the probability denominator for Unique Quality. This is compared to the calculated Unique Quality value after Magic Find calculations and is chosen if it is greater than that value. (Calculated in 128ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Set",
            "description": "Base value for calculating the Set Quality chance. Higher value means rarer chance. (Calculated after Unique)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SetDivisor",
            "description": "Modifier for changing the Set Quality chance, based on the difference between the Monster Level and the Item's base level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SetMin",
            "description": "The minimum value of the probability denominator for Set Quality. This is compared to the calculated Set Quality value after Magic Find calculations and is chosen if it is greater than that value. (Calculated in 128ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Rare",
            "description": "Base value for calculating the Rare Quality chance. Higher value means rarer chance. (Calculated after Set)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "RareDivisor",
            "description": "Modifier for changing the Rare Quality chance, based on the difference between the Monster Level and the Item's base level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "RareMin",
            "description": "The minimum value of the probability denominator for Rare Quality. This is compared to the calculated Rare Quality value after Magic Find calculations and is chosen if it is greater than that value. (Calculated in 128ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Magic",
            "description": "Base value for calculating the Magic Quality chance. Higher value means rarer chance. (Calculated after Rare)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MagicDivisor",
            "description": "Modifier for changing the Magic Quality chance, based on the difference between the Monster Level and the Item's base level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MagicMin",
            "description": "The minimum value of the probability denominator for Magic Quality. This is compared to the calculated Magic Quality value after Magic Find calculations and is chosen if it is greater than that value. (Calculated in 128ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HiQuality",
            "description": "Base value for calculating the High Quality (Superior) chance. Higher value means rarer chance. (Calculated after Magic)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HiQualityDivisor",
            "description": "Modifier for changing the High Quality (Superior) chance, based on the difference between the Monster Level and the Item's base level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Normal",
            "description": "Base value for calculating the Normal Quality chance. Higher value means rarer chance. (Calculated after Normal, and if this does not succeed in rolling, then the item is defaulted to Low Quality)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NormalDivisor",
            "description": "Modifier for changing the Normal Quality chance, based on the difference between the Monster Level and the Item's base level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}