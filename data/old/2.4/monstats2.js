// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monstats2"] = {
    "title": "monstats2.txt",
    "overview": "This file controls additional functionalities and statistics for every monster in the game.",
    "fields": [
        {
            "name": "ID",
            "description": "Controls the unique name ID to define the monster. This must match the same value in the monstats.txt file",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Height",
            "description": "Determines the height of the monster. This has 2 purposes. The first purpose is to act as an index value for selecting which icebreak missile to use when the monster dies while frozen. The second purpose is to select a code which affects what attack animation the player characters will use when attacking the monster (Attack1 and or Attack2). See each code description types below.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Description",
                    "Code",
                    "Description"
                ],
                [
                    "1",
                    "icebreaksmall",
                    "1",
                    "Low Height"
                ],
                [
                    "2",
                    "icebreakmedium",
                    "2",
                    "High Height"
                ],
                [
                    "3",
                    "icebreaklarge",
                    "3",
                    "Both types of Heights"
                ],
                [
                    "4",
                    "icebreaksmoke",
                    "",
                    ""
                ]
            ]
        },
        {
            "name": "OverlayHeight",
            "description": "Determines the height value of overlays (Overlay.txt) for the monster",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "pixHeight",
            "description": "Determines the pixel height value for the damage bar when the monster is selected",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SizeX & SizeY",
            "description": "Determines the tile grid size of the monster which is use for handling placement when the monster spawns or uses movement skills",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "spawnCol",
            "description": "Controls the method for spawning the monster based on the collisions in the environment",
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
                    "Normal - Basic Monster Pathing"
                ],
                [
                    "1",
                    "Water - Handle water terrain where units cannot normally walk, but can fly over"
                ],
                [
                    "2",
                    "Preset - Placement handler which considers walls, no pathable areas, objects, doors, items, and other monsters"
                ],
                [
                    "3",
                    "Force - Override any collision"
                ]
            ]
        },
        {
            "name": "MeleeRng",
            "description": "Controls the range of the monster's melee attack, which can affect also affect certain AI pathing. If this value equals 255, then refer to the monster's weapon class (\"BaseW\")",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "BaseW",
            "description": "Defines the monster's base weapon class, which can affect how the monster attacks. Referenced by the Code value of the Weapon Class Table",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HitClass",
            "description": "Defines the specific class of an attack when the monster successfully hits with an attack. This can affect the sound and overlay display of the attack hit. Referenced from the Index value in HitClass.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HDv",
            "description": "Head visual",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TRv",
            "description": "Torso visual",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LGv",
            "description": "Legs visual",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "RAv",
            "description": "Right Arm visual",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LAv",
            "description": "Left Arm visual",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "RHv",
            "description": "Right Hand visual",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LHv",
            "description": "Left Hand visual",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SHv",
            "description": "Shield visual",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "S1v (to S8v)",
            "description": "Special 1 to Special 8 visual",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HD",
            "description": "Head",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TR",
            "description": "Torso",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LG",
            "description": "Legs",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "RA",
            "description": "Right Arm",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LA",
            "description": "Left Arm",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "RH",
            "description": "Right Hand",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LH",
            "description": "Left Hand",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SH",
            "description": "Shield",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "S1",
            "description": "Special 1 to Special 8",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TotalPieces",
            "description": "Defines the total amount of component pieces that the monster uses. This value should match the number of enabled Boolean fields listed above",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mDT",
            "description": "If equals 1, then enable the Death Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mNU",
            "description": "If equals 1, then enable the Neutral Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mWL",
            "description": "If equals 1, then enable the Walk Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mGH",
            "description": "If equals 1, then enable the Get Hit Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mA1",
            "description": "If equals 1, then enable the Attack 1 (and Attack 2) Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mBL",
            "description": "If equals 1, then enable the Block Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mSC",
            "description": "If equals 1, then enable the Cast Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mS1",
            "description": "If equals 1, then enable the Skill 1 (to Skill4) Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mDD",
            "description": "If equals 1, then enable the Dead Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mKB",
            "description": "If equals 1, then enable the Knockback Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mSQ",
            "description": "If equals 1, then enable the Sequence Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "mRN",
            "description": "If equals 1, then enable the Run Mode for the monster. If equals 0, then this mode is disabled",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dDT",
            "description": "Defines the number of directions that the monster can face during Death Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dNU",
            "description": "Defines the number of directions that the monster can face during Neutral Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dWL",
            "description": "Defines the number of directions that the monster can face during Walk Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dGH",
            "description": "Defines the number of directions that the monster can face during Get Hit Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dA1",
            "description": "Defines the number of directions that the monster can face during Attack 1 (and Attack 2) Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dBL",
            "description": "Defines the number of directions that the monster can face during Block Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dSC",
            "description": "Defines the number of directions that the monster can face during Cast Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dS1",
            "description": "Defines the number of directions that the monster can face during Skill 1 (to Skill 4) Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dDD",
            "description": "Defines the number of directions that the monster can face during Dead Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dKB",
            "description": "Defines the number of directions that the monster can face during Knockback Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dSQ",
            "description": "Defines the number of directions that the monster can face during Sequence Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dRN",
            "description": "Defines the number of directions that the monster can face during Run Mode",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "A1mv",
            "description": "If equals 1, then enable the Attack 1 (and Attack 2) Mode while the monster is moving with the Walk mode or Run mode. If equals 0, then this mode is disabled while the monster is moving",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SCmv",
            "description": "If equals 1, then enable the Cast Mode while the monster is moving with the Walk mode or Run mode. If equals 0, then this mode is disabled while the monster is moving",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "S1mv",
            "description": "If equals 1, then enable the Skill 1 (to Skill 4) Mode while the monster is moving with the Walk mode or Run mode. If equals 0, then this mode is disabled while the monster is moving",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noGfxHitTest",
            "description": "If equals 1, then enable the mouse selection bounding box functionality around the monster. If equals 0, then the monster cannot be selected by the mouse",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "htTop",
            "description": "Define the pixel top offset around the monster for the mouse selection bounding box functionality. This field relies on the noGfxHitTest field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "htLeft",
            "description": "Define the pixel left offset around the monster for the mouse selection bounding box functionality. This field relies on the noGfxHitTest field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "htWidth",
            "description": "Define the pixel right offset around the monster for the mouse selection bounding box functionality. This field relies on the noGfxHitTest field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "htHeight",
            "description": "Define the pixel bottom offset around the monster for the mouse selection bounding box functionality. This field relies on the noGfxHitTest field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "restore",
            "description": "Determines if the monster should be placed on the inactive list, to be saved when the level unloads. If equals 0, then do not save the monster. If equals 1, then rely on other checks to determine to save the monster. If equals 2, then force save the monster",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "automapCel",
            "description": "Controls what index of the Automap tiles to use to display this monster on the Automap. This field relies on the noMap field being disabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noMap",
            "description": "If equals 1, then the monster will not appear on the Automap. If equals 0, then the monster will normally appear on the Automap",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noOvly",
            "description": "If equals 1, then no looping overlays will be drawn on the monster. If equals 0, then overlays will be drawn on the monster. (Overlay.txt)",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "isSel",
            "description": "If equals 1, then the monster is selectable and can be targeted. If equals 0, then the monster cannot be selected",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "alSel",
            "description": "If equals 1, then the player can always select the monster, regardless of being an ally or enemy. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noSel",
            "description": "If equals 1, then the player can never select the monster. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "shiftSel",
            "description": "If equals 1, then the player can target this monster when holding the Shift key and clicking to use a skill. If equals 0, then the monster cannot be targeted while the player is holding the Shift key",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "corpseSel",
            "description": "If equals 1, then the monster's corpse can be with the mouse cursor. If equals 0, then the monster's corpse cannot be selected with the mouse cursor",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "isAtt",
            "description": "If equals 1, then the monster can be attacked. If equals 0, then the monster cannot be attacked",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "revive",
            "description": "If equals 1, then the monster is allowed to be revived by the Necromancer Revive skill. If equals 0, then the monster cannot be revived by the Necromancer Revive skill",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "limitCorpses",
            "description": "If equals 1, then the monster's corpse will be placed into a pool with all other corpses with this field checked. Once that pool reaches the max (50), the corpses at the beginning of the pool start getting removed",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "critter",
            "description": "If equals 1, then the monster will be flagged as a critter, which gives some special case handling such as not creating impact sounds and differently handling its spawn placement in presets. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "small",
            "description": "If equals 1, then the monster will be classified as a small type, which can affect what types of missiles can be used on the monster (Example: Barbarian Grim Ward size) or how the monster is knocked back. If equals 0, then ignore this. If this field is enabled, then the large field should be disabled, to avoid confusion",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "large",
            "description": "If equals 1, then the monster will be classified as a large type, which can affect what types of missiles can be used on the monster (Example: Barbarian Grim Ward size) or how the monster is knocked back. If equals 0, then ignore this. If this field is enabled, then the small field should be disabled, to avoid confusion",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "soft",
            "description": "If equals 1, then the monster's corpse is classified as soft bodied, meaning that its corpse can be used by certain corpse skills such as Barbarian Find Potion, Find Item, or Grim Ward. If equals 0, then the monster's corpse cannot be used for these skills",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "inert",
            "description": "If equals 1, then the monster will never attack its enemies. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "objCol",
            "description": "If equals 1 and the monster class is \"barricadedoor\", \"barricadedoor2\", or \"evilhut\", then the monster will place an invisible object with collision. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "deadCol",
            "description": "If equals 1, then the monster's corpse will have collision with other units. If equals 0, then the monster's corpse will not have collision",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "unflatDead",
            "description": "If equals 1, then ignore the corpse draw order for rendering the Sprite on top of others, while the monster is dead. If equals 0, then the monster's corpse will have a normal corpse draw order",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Shadow",
            "description": "If equals 1, then the monster will project a shadow on the ground. If equals 0, then the monster will not project a shadow",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noUniqueShift",
            "description": "If equals 1 and the monster is a Unique monster, then the monster will not have random color palette transform shifts. If equals 0, then the non-Unique monster will have random color palette transform shifts",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "compositeDeath",
            "description": "If equals 1, then the monster's Death Mode and Dead mode will make use of its component system. If equals 0, then the monster will default to using the Hand-To-Hand weapon class and no component system",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "localBlood",
            "description": "Controls the color of the monster's blood based on the region locale. If equals 0, then do not change the blood to green and keep it red. If equals 1, then change the monster's special components to use the green blood locale. If equals 2, then change the blood to green",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Bleed",
            "description": "Controls if the monster will create blood missiles. If equals 0, then the monster will never bleed. If equals 1, then the monster will randomly create the \"blood1\" or \"blood2\" missiles when hit. If equals 2, then the monster will randomly create the \"blood1\", \"blood2\", \"bigblood1\", or \"bigblood2\" missiles when hit",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Light",
            "description": "Controls the monster's minimum Light Radius size (measured in grid sub-tiles)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "light-r",
            "description": "Controls the red color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "light-g",
            "description": "Controls the green color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "light-b",
            "description": "Controls the blue color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Utrans & Utrans(N) & Utrans(H)",
            "description": "Modifies the color palette transform for the monster respectively in Normal, Nightmare, and Hell difficulty.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "InfernoLen",
            "description": "The frame length to hold the channel cast time of the inferno skill. This is used for when the monster has the \"inferno\" state, or for Diablo when he is using the \"DiabLight\" skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "InfernoAnim",
            "description": "The exact frame in the channel animation to loop back and start at again",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "InfernoRollback",
            "description": "The exact frame in the channel animation to determine when to roll back to the InfernoAnim frame",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResurrectMode",
            "description": "Controls which monster mode to set on the monster when it is resurrected. Referenced from the Code column in MonMode.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ResurrectSkill",
            "description": "Controls what skill should the monster use when it is resurrected (Skills.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SpawnUniqueMod",
            "description": "Controls what unique modifier the monster should always spawn with (MonUMod.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}