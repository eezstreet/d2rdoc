// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monstats"] = {
    "title": "monstats.txt",
    "overview": "This file controls the main functionalities and statistics for every monster in the game. This includes enemy monsters, pets, and NPC units.<br>This file is connected to the MonStats2.txt file, so additional functionalities can be found in that file. This means that this file's number and order of entries should be identical with the MonStats2.txt file.<br>The \"(N)\" text in field names signifies to use that specific value for games in Nightmare difficulty<br>The \"(H)\" text in field names signifies to use that specific value for games in Hell difficulty",
    "fields": [
        {
            "name": "ID",
            "description": "Controls the unique name ID to define the monster",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "BaseID",
            "description": "Points to the ID of another monster to define the monster's base type. This is to create groups of monsters which are considered the same type",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NextInClass",
            "description": "Points to the ID of another monster to signify the next monster in the group of this monster's type. This is to continue the groups of monsters which are considered the same type. The order should be contiguous",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TransLvl",
            "description": "Defines the color transform level to use for this monster, which affects what color palette that the monster will use",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NameStr",
            "description": "",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonStatsEx",
            "description": "Controls a pointer to the ID from MonStats2.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonProp",
            "description": "Points to the ID field from MonProp.txt. Used to add special modifiers to the monster",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonType",
            "description": "Points to the type field from MonType.txt. Used to handle the monster's classification",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AI",
            "description": "Points to a type of AI script to use for the monster (MonAI.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DescStr",
            "description": "",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Code",
            "description": "Controls the token used for choosing the proper cells to display the monster's graphics",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "enabled",
            "description": "If equals 1, then this monster is allowed to spawn in the game. If equals 0, then this monster will never spawn in the game",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rangedtype",
            "description": "If equals 1, then the monster will be classified as a ranged type. If equals 0, then the monster will be classified as a melee type",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "placespawn",
            "description": "If equals 1, then this monster will be treated as a spawner, so monsters that spawn can be initially placed within this monster. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spawn",
            "description": "Points to the ID of another monster to control what kind of monster is spawned from this monster. This is only used if the placespawn field is enabled",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spawnx & spawny",
            "description": "Controls the X & Y offsets for where another monster is displaced when being spawned by this monster",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spawnmode",
            "description": "Defines the animation mode that the spawned monsters will be initiated with. Referenced from the Token column in MonMode.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "minion1",
            "description": "Points to the ID of another monster to control what kind of monster is spawned with this monster when it is spawned, like a monster pack. The minion1 field is also used for spawning a monster when this monster is killed while it has the SplEndDeath field enabled",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SetBoss",
            "description": "If equals 1, then set the monster AI to use the Boss AI type, which can affect the monster's behaviors. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "BossXfer",
            "description": "If equals 1, then the monster's AI will transfer its boss recognition to another monster, which can affect the minion monster behaviors after this boss is killed. If equals 0, then ignore no boss AI will transfer and minion monsters will behave differently after the boss is killed. This field relies on the SetBoss field being enabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PartyMin",
            "description": "The minimum number of minions that can spawn with this monster. Uses the minion1 fields. The actual number is a random value chosen between the \"PartyMin\" and \"PartyMax\" field values",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PartyMax",
            "description": "The maximum number of minions that can spawn with this monster. Uses the minion1 fields. The actual number is a random value chosen between the \"PartyMin\" and \"PartyMax\" field values",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MinGrp",
            "description": "The minimum number of duplicates of this monster that can spawn together. The actual number is a random value chosen between the \"MinGrp\" and \"MaxGrp\" field values",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MaxGrp",
            "description": "The maximum number of duplicates of this monster that can spawn together. The actual number is a random value chosen between the \"MinGrp\" and \"MaxGrp\" field values",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "sparsePopulate",
            "description": "If this value is greater than 0, then it controls the percent chance that this monster does not spawn, and another monster will spawn in its place. (Out of 100)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Velocity",
            "description": "Determines the movement velocity of the monster, which can be the monster's baseline walk speed",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Run",
            "description": "Determines the run speed of the monster as opposed to walk speed. This is only used if the monster has a Run mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Rarity",
            "description": "Modifies the chance that this monster will be chosen to spawn in the area level. The higher the value is, then the more likely this monster will be chosen. This value acts as a numerator and a denominator. All \"Rarity\" values of possible monsters get summed together to give a total denominator, used for the random roll. For example, if there are 3 possible monsters that can spawn, and their \"Rarity\" values are 1, 2, 2, then their chances to be chosen are 1/5, 2/5, and 2/5 respectively. If this value equals 0, then this monster is never randomly selected to spawn in an area level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Level",
            "description": "Determines the monster's level. This value for Nightmare and Hell difficulty can be overridden by the area level's MonLvl or MonLvlEx values from Levels.txt, unless the monster's boss and noRatio fields are enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MonSound",
            "description": "Points to the ID field of a monster sound from MonSounds.txt. This is used to control the monsters assigned sounds, when the monster is spawned as a Normal monster",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "UMonSound",
            "description": "Points to the ID field of a monster sound from MonSounds.txt. This is used to control the monsters assigned sounds, when the monster is spawned as a Unique or Champion monster",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "threat",
            "description": "Controls the AI threat value of the monster which can affect the targeting priorities of enemy Ais for this monster. The higher this value is, then the more likely that enemy AI will target this monster",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "aidel",
            "description": "Controls the delay in frame length for how often the monster's AI will update its commands. A lower delay means that the monster will perform commands more often without as long of a pause in between",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "aidist",
            "description": "Controls the maximum distance (measured in tiles) between the monster and an enemy until the monster's AI becomes aggressive. If equals 0, then default to 35",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "aip1",
            "description": "Defines numeric parameters used to control various functions of the monster's AI. These fields depend on which AI script is being used (MonAI.txt, and the AI field in MonStats.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MissA1",
            "description": "Points to the Missile field from Missiles.txt to determine which missile to use when the monster is in Attack 1 & Attack 2 mode",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MissS1",
            "description": "Points to the Missile field from Missiles.txt to determine which missile to use when the monster is in Skill 1 (to Skill 4) mode",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MissC",
            "description": "Points to the Missile field from Missiles.txt to determine which missile to use when the monster is in Cast mode",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MissSQ",
            "description": "Points to the Missile field from Missiles.txt to determine which missile to use when the monster is in Sequence mode",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Align",
            "description": "Controls the monster's alignment, which determines if the monster will be an enemy, ally, or neutral party to the player.",
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
                    "0",
                    "Evil Alignment - The monster will attack the player"
                ],
                [
                    "1",
                    "Good Alignment - The monster will fight with the player and will be in the player's party"
                ],
                [
                    "2",
                    "Neutral Alignment - The monster will not attack the player and will not be in the player's party"
                ]
            ]
        },
        {
            "name": "isSpawn",
            "description": "If equals 1, then the monster is allowed to spawn in an area level. If equals 0, then the monster will not be spawned automatically in an area level",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "isMelee",
            "description": "If equals 1, then the monster is classified as a melee only type, which can affect its AI behaviors and what monster modifiers are allowed on the monster. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "npc",
            "description": "If equals 1, then the monster is classified as an NPC (Non-Playable Character), which can affect its AI behaviors and how the player treats this monster. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "interact",
            "description": "If equals 1, then the monster is interactable, meaning that the player can click on the monster to perform an interact command instead of attacking. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "inventory",
            "description": "If equals 1, then monster will have an inventory with randomly generated items, such as an NPC with shop items (if the interact field is enabled) or a summoned unit with random equipped items (MonEquip.txt). If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "inTown",
            "description": "If equals 1, then the monster is allowed to be in town. If equals 0, then the monster is not allowed to be in town, which can affect or disable their AI or collision from entering towns",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lUndead",
            "description": "If equals 1, then the monster is treated as a Low Undead, meaning that the monster is classified as an Undead type and can be resurrected by certain AI. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "hUndead",
            "description": "If equals 1, then the monster is treated as a High Undead, meaning that the monster is classified as an Undead type but cannot be resurrected by certain AI. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "demon",
            "description": "If equals 1, then the monster is classified as a Demon type. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "flying",
            "description": "If equals 1, then the monster is flagged as a flying type, which can affect its collision with the area level and how it is spawned. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "opendoors",
            "description": "If equals 1, then the monster will use its AI to open doors if necessary. If equals 0, then the monster cannot open doors and will treat doors as another type of collision",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "boss",
            "description": "If equals 1, then the monster is classified as a Boss type, which can affect boss related AI and functions. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "primeevil",
            "description": "If equals 1, then the monster is classified as a Prime Evil type, or an Act End boss, which can affect various skills, AI, and damage related functions. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "killable",
            "description": "If equals 1, then the monster can be killed, damage, and be put in a Death or Dead mode. If equals 0, then the monster cannot be damaged or killed",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "switchai",
            "description": "If equals 1, then monster's AI can switched, such as by the Assassin's Mind Blast ability. If equals 0, then the monster AI cannot be switched",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noAura",
            "description": "If equals 1, then the monster cannot be affected by friendly auras. If equals 0, then the monster can be affected by friendly auras",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "nomultishot",
            "description": "If equals 1, then the monster is not allowed to spawn with the Multi-Shot unique monster modifier (MonUMod.txt). If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "neverCount",
            "description": "If equals 1, then the monster is not counted on the list of the active monsters in the area, which affects spawning and saving functions. If equals 0, then the monster will be accounted for, and can be part of the active or inactive list functions",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "petIgnore",
            "description": "If equals 1, then pet AI scripts will ignore this monster (MonAI.txt). If equals 0, then pet AI will attack this monster",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "deathDmg",
            "description": "If equals 1, then the monster will explode on death. This has special cases for the \"bonefetish1\" and \"siegebeast1\" monster classes, otherwise the monster will use a general death damage function to damage nearby units based on the monster's health percentage. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "genericSpawn",
            "description": "If equals 1, the monster is flagged as a possible selection for the AI generic spawner function. There are defaults for using the If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "zoo",
            "description": "If equals 1, then the monster will be flagged as a zoo type monster, which will give it the AI zoo behavior. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "CannotDesecrate",
            "description": "If equals 1, then the monster will not be able to be desecrated when inside a desecrated level. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rightArmItemType",
            "description": "Determines what type of items the monster is allowed to hold in its right arm (ItemTypes.txt). A blank value means it can hold any item",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "leftArmItemType",
            "description": "Determines what type of items the monster is allowed to hold in its left arm (ItemTypes.txt). A blank value means it can hold any item",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "canNotUseTwoHandedItems",
            "description": "If equals 1, then the monster can not items marked as two handed (Weapons.txt)",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SendSkills",
            "description": "Determines which of the monster's skill's level should be sent to the client. Uses a byte value, where the code tests each bit to determine which of the monster's skills to check",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Skill1",
            "description": "Points to the Skill field from Skills.txt file. This gives the monster the skill to use for Sk1Mode",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Sk1mode",
            "description": "Determines the monster's animation mode when using the related skill. Outside of the standard animation mode inputs, the field can also point to a sequence from MonSeq.txt, which handles a specific set of frames to place a sequence animation. Referenced from the Code column in MonMode.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Sk1lvl",
            "description": "Controls the base skill level of the related skill on the monster",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Drain",
            "description": "Controls the monster's overall Life and Mana steal percentage. This can also be affected by the LifeStealDivisor and ManaStealDivisor fields from DifficultyLevels.txt. If equals 0, then the monster will not have Life or Mana steal",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "coldeffect",
            "description": "Sets the percentage change in movement speed and attack rate when the monster if chilled by a cold effect. If this equals 0, then the monster will be immune to the cold effect",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResDm",
            "description": "Sets the monster's Physical Damage Resistance stat",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResMa",
            "description": "Sets the monster's Magic Resistance stat",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResFi",
            "description": "Sets the monster's Fire Resistance stat",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResLi",
            "description": "Sets the monster's Lightning Resistance stat",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResCo",
            "description": "Sets the monster's Cold Resistance stat",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResPo",
            "description": "Sets the monster's Poison Resistance stat",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DamageRegen",
            "description": "Controls the monster's Life regeneration per frame. This is calculated based on the monster's maximum life: Regeneration Rate = (Life * \"DamageRegen\") / 16",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SkillDamage",
            "description": "Points to a skill from the \"skill\" field in the Skills.txt file. This changes the monster's min physical damage, max physical damage, and Attack Rating to be based off the values from the linked skill and its current level from the monster's owner (usually the player who summoned the monster)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noRatio",
            "description": "If equals 1, then use this file's fields to determine the monster's baseline stats (minHP, maxHP, AC, Exp, A1MinD, A1MaxD, A1TH, A2MinD, A2MinD, A2TH, S1MinD, S1MaxD, S1TH). If equals 0, then use MonLvl.txt to determine the monster's baseline stats",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ShieldBlockOverride",
            "description": "If equals 1, then the monster can block without a shield (the block chance stat will take effect even without a shield equipped). If equals 2, then the monster cannot block at all, even with a shield equipped. If equals 0, then ignore this",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ToBlock",
            "description": "The monster's percent chance to block an attack",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Crit",
            "description": "The percent chance for the monster to score a critical hit when attacking an enemy, which causes the attack to deal double damage",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "minHP",
            "description": "The monster's minimum amount of Life when spawned",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "maxHP",
            "description": "The monster's maximum amount of Life when spawned",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AC",
            "description": "The monster's Defense value",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Exp",
            "description": "The amount of Experience that is rewarded to the player when the monster is killed",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "A1MinD",
            "description": "The minimum damage dealt by the monster when it is using the Attack 1 (A1) animation mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "A1MaxD",
            "description": "The maximum damage dealt by the monster when it is using the Attack 1 (A1) animation mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "A1TH",
            "description": "The monster's Attack Rating when it is using the Attack 1 (A1) animation mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "A2MinD",
            "description": "The minimum damage dealt by the monster when it is using the Attack 2 (A2) animation mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "A2MaxD",
            "description": "The maximum damage dealt by the monster when it is using the Attack 2 (A2) animation mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "A2TH",
            "description": "The monster's Attack Rating when it is using the Attack 2 (A2) animation mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "S1MinD",
            "description": "The minimum damage dealt by the monster when it is using the Skill 1 (S1) animation mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "S1MaxD",
            "description": "The maximum damage dealt by the monster when it is using the Skill 1 (S1) animation mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "S1TH",
            "description": "The monster's Attack Rating when it is using the Skill 1 (S1) animation mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "El1Mode",
            "description": "Determines which animation mode will trigger an additional elemental damage type when used. Referenced from the Code column in MonMode.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "El1Type",
            "description": "Defines the type of elemental damage. This field is used when El#Mode is not null. Referenced by the Code value of the Elemental Types Table",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "El1Pct",
            "description": "Controls the random percent chance (out of 100) that the monster will append the element damage to the attack. This field is used when El#Mode is not null",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "El1MinD",
            "description": "The minimum element damage applied to the attack. This field is used when El#Mode is not null",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "El1MaxD",
            "description": "The maximum element damage applied to the attack. This field is used when El#Mode is not null",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "El1Dur",
            "description": "Controls the duration of the related element mode in frame lengths (25 Frames = 1 Second). This is only applicable for the Cold, Poison, Stun, Burning, Freeze elements. There are special cases when evaluating the elements, where Poison min and max damage are multiplied by 10, and Poison duration is multiplied by 2. This field is used when El#Mode is not null",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TreasureClass",
            "description": "Defines which Treasure Class is used by the monster when a Normal monster type is killed; for each difficulty respectively",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TreasureClassChamp",
            "description": "Defines which Treasure Class is used by the monster when a Champion monster type is killed; for each difficulty respectively",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TreasureClassUnique",
            "description": "Defines which Treasure Class is used by the monster when a Unique monster type is killed; for each difficulty respectively",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TreasureClassQuest",
            "description": "Defines which Treasure Class is used by the monster when a Quest-Enabled monster type is killed; for each difficulty respectively. Based on the TCQuestID and TCQuestCP fields",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TCQuestID",
            "description": "Checks to see if the player has does not have a quest flag progress. If not, then use the TreasureClassQuest field, based on the game's current difficulty. Referenced by the Code value of the Quest Flags Table",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TCQuestCP",
            "description": "Controls which Quest Checkpoint, or current progress within a quest (based on the TCQuestID value), is needed to use the TreasureClassQuest field, based on the game's current difficulty",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SplEndDeath",
            "description": "Controls a special case death handler for the monster that is ran on the server side",
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
                    "null",
                    "Do nothing"
                ],
                [
                    "1",
                    "Spawn the monster type from the $!#minion1!$ field after this monster dies"
                ],
                [
                    "2",
                    "Kill the source unit that is related to this monster. Typically this is a mount type unit that the monster is riding when it dies"
                ]
            ]
        },
        {
            "name": "SplGetModeChart",
            "description": "If equals 1, then check special case handlers of certain monsters with specific BaseID fields while they are using certain a mode and perform a function. If equals 0, then ignore this.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Index",
                    "$!#BaseId!$",
                    "Description"
                ],
                [
                    "243<br>333<br>705",
                    "diablo<br>diablo clone<br>uberdiablo",
                    "If current mode equals Skill 3 (S3) or Skill 4 (S4), then do a generic attack function"
                ],
                [
                    "403",
                    "trappedsoul1",
                    "If current mode equals Attack 1 (A1), Attack 2 (A2), Skill 1 (S1), or Skill 2 (S2), then do a generic attack function and end it with setting the monster to start the Skill 1 mode and skip the AI pause"
                ],
                [
                    "543",
                    "baalthrone",
                    "If the current mode equals Skill 3 (S3), then tell the monster to do its Cast mode (SC)"
                ],
                [
                    "544<br>570<br>709",
                    "baalcrab<br>baalclone<br>uberbaal",
                    "If the current mode equals Skill 3 (S3), then tell the monster to do its Cast mode (SC)"
                ],
                [
                    "417<br>418",
                    "shadowwarrior<br>shadowmaster",
                    "If the current mode equals Skill 4 (S4), then tell the monster to do a generic attack function"
                ]
            ]
        },
        {
            "name": "SplEndGeneric",
            "description": "If equals 1, then check special case handlers of monsters with specific BaseID fields while they are ending certain modes and perform a function. If equals 0, then ignore this.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Index",
                    "$!#BaseId!$",
                    "Mode that is ending",
                    "Description"
                ],
                [
                    "110",
                    "vulture1",
                    "Skill 1 (S1)",
                    "Process the event Run AI"
                ],
                [
                    "118",
                    "willowwisp1",
                    "Walk (WL)",
                    "Process the event Run AI"
                ],
                [
                    "136",
                    "batdemon1",
                    "Skill 3 (S3) or Skill 4 (S4)",
                    "Process the event Run AI"
                ],
                [
                    "230<br>231",
                    "firebeast<br>iceglobe",
                    "Any mode",
                    "Process the event Run AI"
                ],
                [
                    "247",
                    "frogdemon1",
                    "Sequence (xx)",
                    "Process the event Run AI"
                ],
                [
                    "403",
                    "trappedsoul1",
                    "Any mode",
                    "Process the event Run AI"
                ]
            ]
        },
        {
            "name": "SplClientEnd",
            "description": "If equals 1, then on the client side, check special case handlers of monsters with specific BaseID fields while they are ending certain modes and perform a function. If equals 0, then ignore this.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Index",
                    "$!#BaseId!$",
                    "Mode that is ending",
                    "Description"
                ],
                [
                    "110",
                    "vulture1",
                    "Skill 1 (S1)",
                    "Ignore setting the monster back to Neutral (NU)"
                ],
                [
                    "403<br>404",
                    "trappedsoul1<br>trappedsoul2",
                    "Skill 1 (S1)<br>or Skill 2 (S2)<br>or Attack 1 (A1)<br>or Attack 2 (A2)",
                    "Set the mode to Skill 1 (S1)"
                ],
                [
                    "136",
                    "batdemon1",
                    "Skill 3 (S3)",
                    "Set the mode to Skill 4 (S4)"
                ],
                [
                    "136",
                    "batdemon1",
                    "Skill 4 (S4)",
                    "Ignore setting the monster back to Neutral (NU)"
                ],
                [
                    "118<br>231",
                    "willowwisp1<br>iceglobe",
                    "Walk (WL)",
                    "Ignore setting the monster back to Neutral (NU)"
                ],
                [
                    "497",
                    "catapult1",
                    "Attack 1 (A1)",
                    "Remove the siege missile and add a new one"
                ],
                [
                    "247",
                    "frogdemon1",
                    "Sequence (xx)",
                    "Ignore setting the monster back to Neutral (NU)"
                ],
                [
                    "284",
                    "maggotqueen1",
                    "Dead (DD)",
                    "Ignore setting the monster back to Neutral (NU)"
                ]
            ]
        }
    ]
}