// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["shareditems"] = {
    "title": "Shared Item Fields (armor.txt, misc.txt, weapons.txt)",
    "overview": "These files control the functionality for all base items in the game (armors, miscellaneous and weapons).<br>They are loaded/merged together on runtime with their counterpart files in the following order: Weapons.txt, Armor.txt, Misc.txt<br>Columns that typically only exist in one of the files will be listed below all of the shared column entries.<br>This also means columns can be copied between files (such as auto prefix or spelldesc, etc)",
    "fields": [
        {
            "name": "name",
            "description": "This is a reference field to define the item; it does not need to be uniquely named",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to create this item (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "compactsave",
            "description": "If equals 1, then only the item's base stats will be stored in the character save, but not any modifiers or additional stats. If equals 0, then all of the items stats will be saved.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rarity",
            "description": "Determines the chance that the item will randomly spawn (1 / N). The higher the value then the rarer the item will be. This field depends on the spawnable field being enabled, the quest field being disabled, and the item level being less than or equal to the area level. This value is also affected by the relative Act number that the item is dropping in, where the higher the Act number, then the more common the item will drop.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spawnable",
            "description": "If equals 1, then this item can be randomly spawned. If equals 0, then this item will never randomly spawn.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "speed",
            "description": "For Armors: Controls the Walk/Run Speed reduction when wearing the item. For Weapons: Controls the Attack Speed reduction when wearing the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "reqstr",
            "description": "Defines the amount of the Strength attribute needed to use the item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "reqdex",
            "description": "Defines the amount of the Dexterity attribute needed to use the item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "durability",
            "description": "Defines the base durability amount that the item will spawn with. An item must have durability to become ethereal",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "nodurability",
            "description": "If equals 1, then the item will not have durability. If equals 0, then the item will have durability.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "level",
            "description": "Controls the base item level. This is used for determining when the item is allowed to drop, such as making sure that the item level is not greater than the monster's level or the area level.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ShowLevel",
            "description": "If equals 1, then display the item level next to the item name. If equals 0, then ignore this.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "levelreq",
            "description": "Controls the player level requirement for being able to use the item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cost",
            "description": "Defines the base gold cost of the item when being sold by an NPC. This can be affected by item modifiers and the rarity of the item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gamble cost",
            "description": "Defines the gambling gold cost of the item on the Gambling UI. Only functions for rings and amulets.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "code",
            "description": "Defines a unique 3* letter/number identifier code for the item. This code is case sensitive, so a69 and A69 are considered different. *Can technically use 4 characters instead of 3, but Items.json will not process it (no visuals).",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "namestr",
            "description": "String Key that is used for the base item name. Reference string files found in local/lng/strings, such as item-names.json",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "magic lvl",
            "description": "Defines the magic level of the item, which can affect how magical item modifiers that can appear on the item (AutoMagic.txt)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "auto prefix",
            "description": "Automatically picks an item affix name from a designated group value from AutoMagic.txt. Applies to all item qualities, excluding sets and uniques.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "alternategfx",
            "description": "Uses a unique 3 letter/number code similar to the defined code fields to determine what in-game graphics to display on the player character when the item is equipped",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "normcode",
            "description": "Links to the Code field to determine the normal version of the item",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ubercode",
            "description": "Links to a Code field to determine the Exceptional version of the item",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ultracode",
            "description": "Links to a Code field to determine the Elite version of the item",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "component",
            "description": "Determines the layer of player animation when the item is equipped. This uses a Token entry from Composit.txt",
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
                    "Head"
                ],
                [
                    "1",
                    "Torso"
                ],
                [
                    "2",
                    "Legs"
                ],
                [
                    "3",
                    "Right Arm"
                ],
                [
                    "4",
                    "Left Arm"
                ],
                [
                    "5",
                    "Right Hand"
                ],
                [
                    "6",
                    "Left Hand"
                ],
                [
                    "7",
                    "Shield"
                ],
                [
                    "8",
                    "Special 1"
                ],
                [
                    "9",
                    "Special 2"
                ],
                [
                    "10",
                    "Special 3"
                ],
                [
                    "11",
                    "Special 4"
                ],
                [
                    "12",
                    "Special 5"
                ],
                [
                    "13",
                    "Special 6"
                ],
                [
                    "14",
                    "Special 7"
                ],
                [
                    "15",
                    "Special 8"
                ],
                [
                    "16",
                    "Do not display anything"
                ]
            ]
        },
        {
            "name": "invwidth & invheight",
            "description": "Defines the width and height of grid cells that the item occupies in the player inventory",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "hasinv",
            "description": "Determines if an item can be socketed with runes, jewels or Gems. (1 = Socketable | 0 = Not Socketable)",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Gemsockets",
            "description": "Controls the maximum number of sockets allowed on this item. This is limited by the item's size based on the invwidth and invheight fields. This also compares with the MaxSockets1 field(s) in the ItemTypes.txt file.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gemapplytype",
            "description": "Determines which affect from a gem or rune will be applied when it is socketed into this item (Gems.txt)",
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
                    "Weapon"
                ],
                [
                    "1",
                    "Armor or Helmet"
                ],
                [
                    "2",
                    "Shield"
                ]
            ]
        },
        {
            "name": "flippyfile",
            "description": "Controls which DC6 file to use for displaying the item in the game world when it is dropped on the ground (uses the file name as the input). *Legacy View Only",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invfile",
            "description": "Controls which DC6 file to use for displaying the item graphics in the inventory (uses the file name as the input). *Legacy View Only",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "uniqueinvfile",
            "description": "Controls which DC6 file to use for displaying the item graphics in the inventory when it is a Unique quality item (uses the file name as the input). *Legacy View Only (Any text required in field to use entry from uniques.JSON for D2R view)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "setinvfile",
            "description": "Controls which DC6 file to use for displaying the item graphics in the inventory when it is a Set quality item (uses the file name as the input). *Legacy View Only",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "useable",
            "description": "If equals 1, then the item can be used with the right-click mouse button command (this only works with specific belt items or quest items). If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "stackable",
            "description": "If equals 1, then the item will use a quantity field and handle stacking functionality. This can depend on if the item type is throwable, is a type of ammunition, or is some other kind of miscellaneous item. If equals 0, then the item cannot be stacked",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "minstack",
            "description": "Controls the minimum stack count or quantity that is allowed on the item. This field depends on the stackable field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "maxstack",
            "description": "Controls the maximum stack count or quantity that is allowed on the item. This field depends on the stackable field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spawnstack",
            "description": "Controls the stack count or quantity that the item can spawn with. This field depends on the stackable field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Transmogrify",
            "description": "If equals 1, then the item will use the transmogrify function. If equals 0, then ignore this. This field depends on the \"useable\" field being enabled. Does not function at all",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TMogType",
            "description": "Links to a \"code\" field to determine which item is chosen to transmogrify this item to. Does not function at all",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TMogMin",
            "description": "Controls the minimum quantity that the transmogrify item will have. This depends on what item was chosen in the \"TMogType\" field, and that the transmogrify item has quantity. Does not function at all",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TMogMax",
            "description": "Controls the minimum quantity that the transmogrify item will have. This depends on what item was chosen in the \"TMogType\" field, and that the transmogrify item has quantity. Does not function at all",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "type",
            "description": "Points to an Code defined in the ItemTypes.txt file, which controls how the item functions",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "type2",
            "description": "Points to a secondary Item Type defined in the ItemTypes.txt file, which controls how the item functions. This is optional but can add more functionalities and possibilities with the item",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dropsound",
            "description": "Points to a sound defined in the Sounds.txt file. Used when the item is dropped on the ground",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dropsfxframe",
            "description": "Defines which frame in the flippyfile animation to play the dropsound when the item is dropped on the ground",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "usesound",
            "description": "Points to sound defined in the Sounds.txt file. Used when the item is moved in the inventory or used",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "unique",
            "description": "If equals 1, then the item can only spawn as a Unique quality type. If equals 0, then the item can spawn as other quality types",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "transparent",
            "description": "If equals 1, then the item will be drawn transparent on the player model (similar to ethereal models). If equals 0, then the item will appear solid on the player model",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "transtbl",
            "description": "Controls what type of transparency to use (if the above transparent field is enabled). Referenced by the Code value of the Transparency Table",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lightradius",
            "description": "Controls the value of the light radius that this item can apply on the monster. This only affects monsters with this item equipped, not other types of units. This is ignored if the item's component on the monster is \"lit\", \"med\", or \"hvy\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "belt",
            "description": "Controls which belt type to use for belt items only. This field determines what index entry in the Belts.txt file to use",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "quest",
            "description": "Controls what quest class is tied to the item which can enable certain item functionalities for a specific quest. Any value greater than 0 will also mean the item is flagged as a quest item, which can affect how it is displayed in tooltips, how it is traded with other players, its item rarity, and how it cannot be sold to an NPC. If equals 0, then the item will not be flagged as a quest item. Referenced by the Code value of the Quests Table",
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
                    "Not a quest item"
                ],
                [
                    "1",
                    "Act 1 Prologue"
                ],
                [
                    "2",
                    "Den of Evil"
                ],
                [
                    "3",
                    "Sisters' Burial Grounds"
                ],
                [
                    "4",
                    "Tools of the Trade"
                ],
                [
                    "5",
                    "The Search for Cain"
                ],
                [
                    "6",
                    "The Forgotten Tower"
                ],
                [
                    "7",
                    "Sisters to the Slaughter"
                ],
                [
                    "8",
                    "Act 2 Prologue"
                ],
                [
                    "9",
                    "Radament's Lair"
                ],
                [
                    "10",
                    "The Horadric Staff"
                ],
                [
                    "11",
                    "The Tainted Sun"
                ],
                [
                    "12",
                    "The Arcane Sanctuary"
                ],
                [
                    "13",
                    "The Summoner"
                ],
                [
                    "14",
                    "The Seven Tombs"
                ],
                [
                    "15",
                    "Act 2 Traversed"
                ],
                [
                    "16",
                    "Lam Esen's Tome"
                ],
                [
                    "17",
                    "Khalim's Will"
                ],
                [
                    "18",
                    "Blade of the Old Religion"
                ],
                [
                    "19",
                    "The Golden Bird"
                ],
                [
                    "20",
                    "The Blackened Temple"
                ],
                [
                    "21",
                    "The Guardian"
                ],
                [
                    "22",
                    "Act 4 Prologue"
                ],
                [
                    "23",
                    "The Fallen Angel"
                ],
                [
                    "24",
                    "Terror's End"
                ],
                [
                    "25",
                    "The Hellforge"
                ],
                [
                    "26",
                    "Rogue Warning"
                ],
                [
                    "27",
                    "Guard in Town Warning"
                ],
                [
                    "28",
                    "Guard in Desert Warning"
                ],
                [
                    "29",
                    "Dark Wanderer Seen"
                ],
                [
                    "30",
                    "Angel Warning"
                ],
                [
                    "31",
                    "Respec from Akara Complete, Act 5 Prologue"
                ],
                [
                    "32",
                    "Siege on Harrogath"
                ],
                [
                    "33",
                    "Rescue on Mount Arreat"
                ],
                [
                    "34",
                    "Prison of Ice"
                ],
                [
                    "35",
                    "Betrayal of Harrogath"
                ],
                [
                    "36",
                    "Rite of Passage"
                ],
                [
                    "37",
                    "Eve of Destruction"
                ]
            ]
        },
        {
            "name": "questdiffcheck",
            "description": "If equals 1 and the quest field is enabled, then the game will check the current difficulty setting and will tie that difficulty setting to the quest item. This means that the player can have more than 1 of the same quest item as long each they are obtained per difficulty mode (Normal / Nightmare / Hell). If equals 0 and the \"quest\" field is enabled, then the player can only have 1 count of the quest item in the inventory, regardless of difficulty",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "missiletype",
            "description": "Points to the *ID field from the Missiles.txt file, which determines what type of missile is used when using the throwing weapons",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "durwarning",
            "description": "Controls the threshold value for durability to display the low durability warning UI. This is only used if the item has durability",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "qntwarning",
            "description": "Controls the threshold value for quantity to display the low quantity warning UI. This is only used if the item has stacks",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mindam",
            "description": "The minimum physical damage provided by the item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "maxdam",
            "description": "The maximum physical damage provided by the item",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "StrBonus",
            "description": "The percentage multiplier that gets multiplied the player's current Strength attribute value to modify the bonus damage percent from the equipped item. If this equals 1, then default the value to 100",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DexBonus",
            "description": "The percentage multiplier that gets multiplied the player's current Dexterity attribute value to modify the bonus damage percent from the equipped item. If this equals 1, then default the value to 100",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gemoffset",
            "description": "Determines the starting index of possible gem/rune options based on the gemapplytype field and the Gems.txt entries. For example, if this value equals 9, then the game will start with index 9 (\"Chipped Emerald\") and ignore lower-indexed entries, meaning the item cannot roll these options",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "bitfield1",
            "description": "Controls different flags that can affect the item. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 5 (binary = 101) then that returns true for both the 4 (binary = 100) and 1 (binary = 1) bit field values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "[NPC]Min",
            "description": "Minimum amount of this item type in Normal rarity that the NPC can sell at once",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "[NPC]Max",
            "description": "Maximum amount of this item type in Normal rarity that the NPC can sell at once. This must be equal to or greater than the minimum amount",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "[NPC]MagicMin",
            "description": "Minimum amount of this item type in Magical rarity that the NPC can sell at once",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "[NPC]MagicMax",
            "description": "Maximum amount of this item type in Magical rarity that the NPC can sell at once. This must be equal to or greater than the minimum amount",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "[NPC]MagicLvl",
            "description": "Maximum magic level allowed for this item type in Magical rarity; Where [NPC] is one of the following:",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Transform",
            "description": "Controls the color palette change of the item for the character model graphics. Referenced by the Code value of the Inventory Transform Table",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "InvTrans",
            "description": "Controls the color palette change of the item for the inventory graphics. Referenced by the Code value of the Inventory Transform Table",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SkipName",
            "description": "If equals 1 and the item is Unique rarity, then skip adding the item's base name in its title. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NightmareUpgrade",
            "description": "Links to another item's Code field. Used to determine which item will replace this item when being generated in the NPC's store while the game is playing in Nightmare difficulty. If this field's code equals \"xxx\", then this item will not change in this difficulty",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HellUpgrade",
            "description": "Links to another item's Code field. Used to determine which item will replace this item when being generated in the NPC's store while the game is playing in Hell difficulty. If this field's code equals \"xxx\", then this item will not change in this difficulty",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Nameable",
            "description": "If equals 1, then the item's name can be personalized by Anya for the Act 5 Betrayal of Harrogath quest reward. If equals 0, then the item cannot be used for the personalized name reward",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "PermStoreItem",
            "description": "If equals 1, then this item will always appear on the NPC's store. If equals 0, then the item will randomly appear on the NPC's store when appropriate",
            "type": {
                "type": "bool",
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