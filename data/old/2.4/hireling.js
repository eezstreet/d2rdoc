// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["hireling"] = {
    "title": "hireling.txt",
    "overview": "This file controls the unit statistics for player mercenaries and their related functions",
    "fields": [
        {
            "name": "Hireling",
            "description": "This is a reference field to define the Hireling name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Version",
            "description": "Defines which game version to use this hireling (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ID",
            "description": "The unique identification number to define each hireling type",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Class",
            "description": "This refers to the hcIDx field in MonStats.txt, which defines the base type of unit to use for the hireling",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Act",
            "description": "The Act that the hireling belongs to (values 1 to 5 equal Act 1 to Act 5, respectively)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Difficulty",
            "description": "The difficulty mode associated with the hireling (1 = Normal | 2 = Nightmare | 3 = Hell)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Level",
            "description": "The starting level of the unit",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Seller",
            "description": "This refers to the hcIDx field in MonStats.txt, which defines the unit NPC that sells this hireling",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NameFirst & NameLast",
            "description": "These fields define a string key which the game uses as a sequential range of string IDs from \"NameFirst\" to \"NameLast\" to randomly generate as hireling names. (Max name length is 48 characters)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Gold",
            "description": "The initial cost of the hireling. This is used in the following calculation to generate the full hire price: Cost = [\"Gold\"] * (100 + 15 * [Difference of Current Level and \"Level\"]) / 100",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Exp/Lvl",
            "description": "This modifier is used in the following calculation to determine the amount of Experience need for the hireling's next level: [Current Level] + [Current Level] * [Current Level + 1] * [\"Exp/Lvl\"]",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HP",
            "description": "The starting amount of Life at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HP/Lvl",
            "description": "The amount of Life gained per Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Defense",
            "description": "The starting amount of Defense at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Def/Lvl",
            "description": "The amount of Defense gained per Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Str",
            "description": "The starting amount of Strength at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Str/Lvl",
            "description": "The amount of Strength gained per Level (Calculated in 8ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Dex",
            "description": "The starting amount of Dexterity at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Dex/Lvl",
            "description": "The amount of Dexterity gained per Level (Calculated in 8ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AR",
            "description": "The starting amount of Attack Rating at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AR/Lvl",
            "description": "The amount of Attack Rating gained per Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Dmg-Min",
            "description": "The starting amount of minimum Physical Damage for attacks",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Dmg-Max",
            "description": "The starting amount of maximum Physical Damage for attacks",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Dmg/Lvl",
            "description": "The amount of Physical Damage gained per level, to be added to \"Dmg-Min\" and \"Dmg-Max\" (Calculated in 8ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResistFire",
            "description": "The starting amount of Fire Resistance at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResistFire/Lvl",
            "description": "The amount of Fire Resistance gained per Level (Calculated in 4ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResistCold",
            "description": "The starting amount of Fire Resistance at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResistCold/Lvl",
            "description": "The amount of Fire Resistance gained per Level (Calculated in 4ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResistLightning",
            "description": "The starting amount of Fire Resistance at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResistLightning/Lvl",
            "description": "The amount of Fire Resistance gained per Level (Calculated in 4ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResistPoison",
            "description": "The starting amount of Fire Resistance at base Level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResistPoison/Lvl",
            "description": "The amount of Fire Resistance gained per Level (Calculated in 4ths)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HireDesc",
            "description": "This accepts a string key, which is used to display as the special description of the hireling in the hire UI window (local/lng/strings/mercenaries.JSON)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DefaultChance",
            "description": "This is the chance for the hireling to attack with his/her weapon instead of using a Skill. All Chance values are summed together as a denominator value for a random roll to determine which skill to use",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Skill1",
            "description": "Points to a skill from the skill field in the Skills.txt file. This gives the hireling the Skill to use (requires \"Mode#\", \"Chance#\", \"ChancePerLvl#\")",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Mode1",
            "description": "Uses a monster mode to determine the hireling's behavior when using the related Skill. Referenced from the Index value in MonMode.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Chance1",
            "description": "This is the base chance for the hireling to use the related Skill. All Chance values are summed together as a denominator value for a random roll to determine which skill to use",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ChancePerLvl1",
            "description": "This is the chance for the hireling to use the related Skill, affected by the difference in the hireling's current Level and the hireling's Level field. All Chance values are summed together as a denominator value for a random roll to determine which skill to use. Each skill Chance is calculated with the following formula: [\"Chance#\"] + [\"ChancePerLvl#\"] * [Difference of Current Level and \"Level\"] / 4",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Level1",
            "description": "The starting Level for the related Skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LvlPerLvl1",
            "description": "A modifier to increase the related Skill level for every Level gained. This is used in the following calculated to determine the current skill level: [Current Skill Level] = FLOOR([\"Level\"] + (([\"LvlPerLvl\"] * [Difference of Current Level and \"Level\"]) / 32))",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HiringMaxLevelDifference",
            "description": "This is used to generate a range with this value plus and minus with the player's current Level. In the hiring UI window, hirelings start with a random Level that is between this range",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "resurrectcostmultiplier",
            "description": "A modifier used to calculate the hireling's current resurrect cost. Used in the following formula: [Resurrect Cost] = [Current Level] * [Current Level] / [\"resurrectcostdivisor\"] * [\"resurrectcostmultiplier\"]",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "resurrectcostdivisor",
            "description": "A modifier used to calculate the hireling's current resurrect cost. Used in the following formula: [Resurrect Cost] = [Current Level] * [Current Level] / [\"resurrectcostdivisor\"] * [\"resurrectcostmultiplier\"]",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "resurrectcostmax",
            "description": "This is the maximum Gold cost to resurrect this hireling",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "equivalentcharclass",
            "description": "Determines what class this hireling is treated like under the hood when calculating skill level bonuses and gear restrictions.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}