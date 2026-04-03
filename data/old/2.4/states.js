// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["states"] = {
    "title": "states.txt",
    "overview": "This file defines the different States used by the game and controls how they function. States are basically passive behaviors applied to units that can apply various effects.<br>This file is used by the following data files: CubeMain.txt, MonProp.txt, Overlay.txt, Runes.txt, Sets.txt, SetItems.txt, Skills.txt, UniqueItems.txt",
    "fields": [
        {
            "name": "state",
            "description": "Defines the unique name ID for the state",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "group",
            "description": "Assigns the state to a group ID value. This means that only 1 state with that group ID can be active at any time on a unit. If this value is empty, then ignore this",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "remhit",
            "description": "If equals 1, then this state will be removed when the unit is hit. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "nosend",
            "description": "If equals 1, then this state change will not be sent to the client. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "transform",
            "description": "If equals 1, then this state will be flagged to change the unit's appearance and reset its animations when it is applied. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "aura",
            "description": "If equals 1, then this state will be treated as an aura. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "curable",
            "description": "If equals 1, then this state can be cured (This can be checked by NPC healing or the Paladin Cleansing skill). If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "curse",
            "description": "If equals 1, then this state will be flagged as a curse. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "active",
            "description": "If equals 1, then the state will be classified as an active state which enables the cltactivefunc and srvactivefunc fields. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "restrict",
            "description": "If equals 1, then this state will restrict the usage of certain skills (This connects with the restrict field from the Skills.txt file). If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "disguise",
            "description": "If equals 1, then this state will be flagged as a disguise, meaning that the unit's appearance is changed, which can affect how the animations are treated when being used. If equals 0, then ignored this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "attblue",
            "description": "If equals 1, then the state will make the related Attack Rating value in the character screen be colored blue. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "damblue",
            "description": "If equals 1, then the state will make related Damage value in the character screen be colored blue. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "armblue",
            "description": "If equals 1, then the state will make Defense value (Armor) in the character screen be colored blue. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rfblue",
            "description": "If equals 1, then the state will make Fire Resistance value in the character screen be colored blue. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rlblue",
            "description": "If equals 1, then the state will make Lightning Resistance value in the character screen be colored blue. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rcblue",
            "description": "If equals 1, then the state will make Cold Resistance value in the character screen be colored blue. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "stambarblue",
            "description": "If equals 1, then the state will make the Stamina Bar UI in the HUD be colored blue. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rpblue",
            "description": "If equals 1, then the state will make Poison Resistance value in the character screen be colored blue. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "attred",
            "description": "If equals 1, then the state will make the related Attack Rating value in the character screen be colored red. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "damred",
            "description": "If equals 1, then the state will make related Damage value in the character screen be colored red. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "armred",
            "description": "If equals 1, then the state will make Defense value (Armor) in the character screen be colored red. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rfred",
            "description": "If equals 1, then the state will make Fire Resistance value in the character screen be colored red. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rlred",
            "description": "If equals 1, then the state will make Lightning Resistance value in the character screen be colored red. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rcred",
            "description": "If equals 1, then the state will make Cold Resistance value in the character screen be colored red. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rpred",
            "description": "If equals 1, then the state will make Poison Resistance value in the character screen be colored red. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "exp",
            "description": "If equals 1, then a unit with this state will give exp when killed or will gain exp when killing another unit. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "plrstaydeath",
            "description": "If equals 1, then the state will persist on the player after that player is killed. If equals 0, then ignore this. state stays after death",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "monstaydeath",
            "description": "If equals 1, then the state will persist on the monster (non-boss) after that monster is killed. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "bossstaydeath",
            "description": "If equals 1, then the state will persist on the boss after that boss is killed. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "hide",
            "description": "If equals 1, then the state will hide the unit when dead (corpse and death animations will not be drawn). If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "hidedead",
            "description": "If equals 1, then the state will be used to destroy units with invisible corpses. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "shatter",
            "description": "If equals 1, then the state causes ice shatter missiles to create when the unit dies. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "udead",
            "description": "If equals 1, then the state flags the unit as a used dead corpse and the unit cannot be targeted for corpse skills. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "life",
            "description": "If equals 1, then this state will cancel out the monster's normal life regeneration. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "green",
            "description": "If equals 1, then the state overrides the color changes the unit and the unit will be colored green. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "pgsv",
            "description": "If equals 1, then the state is flagged as part of a progressive skill which relates to charge-up skill functionalities. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "nooverlays",
            "description": "If equals 1, then the standard way for States to add overlays will be disabled. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "noclear",
            "description": "If equals 1, then when this state is applied on the unit, it will not clear stats that have this state from the state's previous application. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "bossinv",
            "description": "If equals 1, then the unit with this state will use the state's source unit's (in this case, the unit's boss) inventory for generating the unit's equipped item graphics. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "meleeonly",
            "description": "If equals 1, then the state will make the all the unit's attack become melee attacks. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "notondead",
            "description": "If equals 1, then the state will not play its On function (function that happens when the state is applied) if the unit is dead. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "overlay1",
            "description": "Controls which overlay to use for normally displaying the state (Uses the overlay field from Overlay.txt). The usage depends on the specific state defined and/or the function using the state. Typically, States use \"overlay1\" for the Front overlay and \"overlay2\" for the Back overlay. Other cases can have States use each overlay field as the Front Start, Front End, Back Start, and Back End, respectively",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "pgsvoverlay",
            "description": "Controls which overlay to use when the state has progressive charges on the unit, such as for the charge-up stat when using Assassin Martial Arts charge-up skills (Uses the overlay field from Overlay.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "castoverlay",
            "description": "Controls which overlay to use when the state is initially applied on the unit (Uses the overlay field from Overlay.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "removerlay",
            "description": "Controls which overlay to use when the state is removed from the unit (Uses the overlay field from Overlay.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "stat",
            "description": "Controls the stat associated with the stat. This is also used when determining how to add the progressive overlay (Uses the Stat field from ItemStatCost.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "setfunc",
            "description": "Controls the client side set functions for when the state is initially applied on the unit",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Parameters",
                    "Description"
                ],
                [
                    "0",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    "SetProgressive",
                    "$!#stat!$",
                    "Creates the overlay used for a progressive state. Can only be used if the $!#pgsv!$ flag is enabled and the $!#pgsvoverlay!$ field has a value."
                ],
                [
                    "2",
                    "SetCloakOfShadows",
                    "",
                    "Changes the area level's room lighting based on a skill's $!skills#auralencalc!$ field. Gets the skill by looking at the \"modifierlist_skill\" stat defined in the $!itemstatcost!$ file"
                ],
                [
                    "3",
                    "SetStateUpdateSkill",
                    "",
                    "Updates a skill's level. Gets the skill by looking at the \"modifierlist_skill\" stat defined in the $!itemstatcost!$ file."
                ],
                [
                    "4",
                    "SetSourceUnit",
                    "",
                    "Sets the source unit for the state. Gets the \"source_unit_type\" and \"source_unit_id\" stats defined in the $!itemstatcost!$ file."
                ],
                [
                    "5",
                    "SetChangeClass",
                    "",
                    "Changes the monster's class type to another monster's class type. Gets the \"shortparam1\" stat defined in the $!itemstatcost!$ file and uses stat's parameter to get the class type that the unit should change to. Only works for monster units. Has a special case where if the class the monster changed from was the \"baalthrone\" monster (defined in $!monstats!$), then also set the path of the monster to move a direction."
                ],
                [
                    "6",
                    "SetBoneArmor",
                    "",
                    "Gets the skill by looking at the \"modifierlist_skill\" stat defined in the $!itemstatcost!$ file and then creates the overlays defined in the $!#castoverlay!$ and $!#overlay#!$ fields"
                ],
                [
                    "7",
                    "SetHurricane",
                    "",
                    "Plays a sound from the $!skills#prgsound!$ field of a skill from the $!skills!$ file. Gets the skill by looking at the \"modifierlist_skill\" stat defined in the $!itemstatcost!$ file."
                ],
                [
                    "8",
                    "SetCycloneArmor",
                    "",
                    "Gets the skill by looking at the \"modifierlist_skill\" stat defined in the $!itemstatcost!$ file and then creates the overlays defined in the $!#overlay1!$, $!#overlay2!$ and $!#overlay3!$ fields"
                ],
                [
                    "9",
                    "SetSkillBonus",
                    "",
                    "Calls the updates passive skills function which updates the values of any skill with a $!skills#passivestate!$ field"
                ],
                [
                    "10",
                    "SetRedeemed",
                    "$!#skill!$",
                    "Creates the missile defined in the $!#skill!$ parameter's $!skills#cltmissile!$ field and hides the targeted unit"
                ],
                [
                    "11",
                    "SetVineBeast",
                    "",
                    "Hides the unit, by disabling the drawing of its visuals"
                ],
                [
                    "12",
                    "SetInvis",
                    "",
                    "Hides the unit, by disabling the drawing of its visuals and shadows"
                ],
                [
                    "13",
                    "SetAttached",
                    "",
                    "Initializes the particle for attaching to the unit by getting the offset of the source unit's Special component"
                ],
                [
                    "14",
                    "DruidChangeForms",
                    "",
                    "Tells the unit to use the \"SKILL1\" command and resets its direction"
                ],
                [
                    "15",
                    "SetRevived",
                    "",
                    "Sets the monster mode to neutral and sets its flag to a pet"
                ],
                [
                    "16",
                    "SetDruChargeUp",
                    "",
                    "Sets up the overlays for a charge up skill. Gets the skill by looking at the \"modifierlist_skill\" stat defined in the $!itemstatcost!$ file. Applies all the overlays defined the $!#overlay#!$ fields, based on the number of skill charges on the unit."
                ],
                [
                    "17",
                    "SetRestInPeace",
                    "$!#missile!$",
                    "Creates the missile defined in the $!#missile!$ parameter"
                ],
                [
                    "18",
                    "SetCorpseExp",
                    "$!#missile!$",
                    "Creates blood on the targeted unit and creates the missile defined in the $!#missile!$ parameter"
                ],
                [
                    "19",
                    "SetBindDemon",
                    "",
                    "Runs function 15 (\"SetRevived\") and then removes the quest mod from the unit."
                ]
            ]
        },
        {
            "name": "remfunc",
            "description": "Controls the client side remove functions for when the state is removed from the unit",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Description"
                ],
                [
                    "0",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    "RemoveProgressive",
                    "Removes the $!#pgsvoverlay!$ overlay. This function relies on the $!#pgsv!$ being enabled."
                ],
                [
                    "2",
                    "RemoveSourceUnit",
                    "Removes the state's source unit"
                ],
                [
                    "3",
                    "RemoveBoneArmor",
                    "Removes the overlays defined in the $!#castoverlay!$ and all of the $!#overlay#!$ fields"
                ],
                [
                    "4",
                    "RemoveHurricane",
                    "Removes the $!skills#prgsound!$ from the related skill. To get the skill, this looks at the \"modifierlist_skill\" stat defined in the $!itemstatcost!$ file."
                ],
                [
                    "5",
                    "RemoveCycloneArmor",
                    "Removes the overlays defined in the $!#castoverlay!$, $!#overlay1!$, $!#overlay2!$, and $!#overlay3!$ fields"
                ],
                [
                    "6",
                    "RemoveSkillBonus",
                    "Calls the updates passive skills function which updates the values of any skill with a $!skills#passivestate!$ field"
                ],
                [
                    "7",
                    "RemoveUninterruptable",
                    "Checks that the related unit is a monster and that the skill used is the \"Nest\" skill defined in the $!skills!$ file. If true, then it removes the related unit's collision pattern."
                ],
                [
                    "8",
                    "RemoveInvis",
                    "Hides the unit, by disabling the drawing of its visuals and shadows"
                ],
                [
                    "9",
                    "RemoveAttached",
                    "Removes particles attached to the unit or the position of the unit"
                ],
                [
                    "10",
                    "RemovePregnant",
                    "Gets the related unit's position and creates a \"monstercorpseexplode\" and \"pain worm appear\" missile defined from the $!missiles!$ file"
                ],
                [
                    "11",
                    "RemoveDruChargeUp",
                    "Removes the overlays defined in all of the $!#overlay#!$ fields"
                ],
                [
                    "12",
                    "RemoveGlobalCooldown",
                    "Sets the global skill cooldown to 0"
                ]
            ]
        },
        {
            "name": "missile",
            "description": "Used as a possible parameter for the setfunc field (Uses the Missile field from Missiles.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "skill",
            "description": "Used as a possible parameter for the setfunc field (Uses the Skill field from Skills.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "itemtype",
            "description": "Defines a potential ItemType that can be affected by the state's color change",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "itemtrans",
            "description": "Controls the color change of the item when the unit has this state. Referenced from the Code column in Colors.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "colorpri",
            "description": "Defines the priority of the state's color change, when compared to other current sates on the unit. The current state that has the highest color priority on the unit will be used and other state colors will be ignored. If multiple current States share the same color priority value, then the game will choose the state with the lower ID value (based on where in the list of States in the data file that the state is defined)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "colorshift",
            "description": "Controls which index of the color shift palette to use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "ID",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "Do nothing"
                ],
                [
                    "1",
                    "First Hue Rotation"
                ],
                [
                    "25",
                    "First Hue Rotation and Darken"
                ],
                [
                    "49",
                    "First Hue Rotation and Lighten"
                ],
                [
                    "73",
                    "Color to Grey"
                ],
                [
                    "74",
                    "Color to Black"
                ],
                [
                    "75",
                    "First No Red Rotation"
                ],
                [
                    "100",
                    "Color to Red"
                ],
                [
                    "101",
                    "Color to Orange"
                ],
                [
                    "102",
                    "Color to Yellow"
                ],
                [
                    "103",
                    "Color to Grass"
                ],
                [
                    "104",
                    "Color to Green<br>(There is a special case to not turn the player unit green)"
                ],
                [
                    "105",
                    "Color to Teal"
                ],
                [
                    "106",
                    "Color to Aqua"
                ],
                [
                    "107",
                    "Color to Light Blue"
                ],
                [
                    "108",
                    "Color to Blue"
                ],
                [
                    "109",
                    "Color to Purple"
                ],
                [
                    "110",
                    "Color to Magenta"
                ],
                [
                    "111",
                    "Color to Some Funky Red"
                ],
                [
                    "112",
                    "Color to RGB Red"
                ],
                [
                    "113",
                    "Color to RGB Green"
                ],
                [
                    "114",
                    "Color to RGB Blue"
                ]
            ]
        },
        {
            "name": "light-r",
            "description": "Controls the state's change of the red color value of the Light radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "light-g",
            "description": "Controls the state's change of the green color value of the Light radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "light-b",
            "description": "Controls the state's change of the blue color value of the Light radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "onsound",
            "description": "Plays a sound when the state is initially applied to the unit. Links to a Sound from Sounds.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "offsound",
            "description": "Plays a sound when the state is removed from the unit. Links to a Sound from Sounds.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gfxtype",
            "description": "Controls the how to handle the unit graphics transformation based on the unit type (This relies on the disguise field being enabled). If equals 1, then use this on a monster type unit. If equals 2, then use this on a player type unit. Otherwise, ignore this",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gfxclass",
            "description": "Control's the unit class used for handling the unit graphics transformation. This field relies on what unit type was used in the gfxtype field. If gfxtype equals 1 for monster type units, then this field will rely on the hcIDx field from MonStats.txt. If \"gfxtype\" equals 2, then this field will use the character class numeric ID.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cltevent",
            "description": "Controls the event to check on the client side to determine when to use the function defined in the clteventfunc field (Uses an event defined in the Events.txt file)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "clteventfunc",
            "description": "Controls the client Unit event function that is called when the event is determined in the cltevent field (Uses the functions defined in the Events.txt file)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "cltactivefunc",
            "description": "Controls the Client Do function that is called every frame while the state is active (the cltdofunc field in Skills.txt). This relies on the \"active\" field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "srvactivefunc",
            "description": "Controls the Server Do function that is called every frame while the state is active (the srvdofunc field in Skills.txt). This relies on the \"active\" field being enabled",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "canstack",
            "description": "If equals 1, then this state can stack with duplicate forms of itself (This is only usable with the \"poison\" state). If equals 0, then ignore this.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "sunderfull",
            "description": "If equals 1, then this state will reapply any negative resistance stats at full potential when calculating pierce immunity if the immunity was broken. If equals 0, then reapply at the normal reduced efficiency (currently 1/5).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "sunder-res-reduce",
            "description": "If equals 1, then this state will apply pierce resistance at reduced effectiveness (currently 1/5) when calculating pierce resistance if an immunity was broken. If equals 0, then apply pierce resistance at normal effectiveness.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}