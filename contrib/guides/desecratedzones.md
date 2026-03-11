## Introduction

desecratedzones.json allows you to change configurations about how Terror Zones work. This file has changed significantly in 3.0, since terror zones have changed significantly.

Below you can find a full working example (as of 3.1.91923 on 11/03/2026) with comments on different parts explaining the functionality that is understood and tested.

All of the interesting things happen inside `desecrated_zones`. There is only one element in here, and I am not sure what happens if there were more than one.

Within this, apart from some general parameters, there are 4 main blocks:

- `game_difficulties` defines general parameters of how terror zones work on expansion/RoTW and on different difficulties, including number of herald tokens and tiers, default parameters that apply to all zones/levels in that difficulty, etc.
- `warnings` seems to define warning messages. I have not experimented much with it.
- `manual_zones` seems to define “manual zones” produced by using Western/Eastern/Southern/Deep/Northern shards. They are defined in the same way as `zones` below.
- `zones` defines the regular time rotating zones. Each element in this array is a zone containing multiple levels that get terrorized at one time. Some configuration parameters can be overridden at the zone level (affecting all levels), and they can also be overridden at the individual level.

For further details on what fields exist, what do they do, and how do they work, see the example below. Note this example includes fields that **are not present in the original desecratedzones.json**, but that the game correctly reads and processes. These were found through reverse engineering, and it’s possible there are more.

```json
{
    "dependencies": {
        "particles": [],
        "models": [],
        "skeletons": [],
        "animations": [],
        "textures": [],
        "physics": [],
        "json": [],
        "variantdata": [],
        "objecteffects": [],
        "other": []
    },
    "type": "DesecratedZonesConfigs",
    "name": "desecratedzones",
    "desecrated_zones": [
        {
            /* As far as I've been able to test, "name" fields have no effect or significance. You may skip them or change their value, it does not matter.
             * "type" fields can also be skipped, but they may help understand the structure of the JSON file */
            "type": "DesecratedConfigData",            
            "name": "desecratedzones_desecrated_zones_0",

            /* UNTESTED, seem self-explanatory though. 
             * My guesses are...
             * "start_time_utc" sets the start time for the rotation.
             * "end_time_utc" bit confusing but may make terror zones not work after then.
             * "seed" initializes the randomization of zones.
             * "zone_duration_minutes" indicates how many minutes each zone lasts
             * "break_duration_minutes" allows for breaks inbetween zones with no terror zone active.
             */
            "start_time_utc": "2025-12-05 00:00:00",
            "end_time_utc": "",
            "seed": 16665365343970128666,
            "zone_duration_minutes": 30,
            "break_duration_minutes": 0,

            /* UNTESTED, function not known. */
            "manual_deprioritize_threshold": 0,
            "manual_removal_threshold": 0,

            /* Configuration of most of the parameters is on a per-difficulty nature.
             * Here some general parameters and default values that can be overridden later for
             * specific zones or levels are set.
             */
            "game_difficulties": {
                "type": "DesecratedGameDifficultyPerGameVersion",
                "name": "desecratedzones_desecrated_zones_0_game_difficulties",

                /* "expansion" means non-RoTW games/characters. */
                "expansion": {
                    "type": "DesecratedGameDifficultyPerDifficulty",
                    "name": "desecratedzones_desecrated_zones_0_game_difficulties_expansion",

                    /* "normal", "nightmare", and "hell" difficulties, of course.
                     * Details of these fields are explained below in the "rotw" -> "hell" entry.
                     */
                    "normal": {
                        "type": "DesecratedGameDifficultyConfig",
                        "name": "desecratedzones_desecrated_zones_0_game_difficulties_expansion_normal",
                        "ladder_enabled": true,
                        "non_ladder_enabled": true,
                        "max_herald_tokens": 0,
                        "max_herald_tiers": 0,
                        "defaults": {
                            "type": "DesecratedDifficultyConfig",
                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_expansion_normal_defaults",
                            "bound_incl_min": 3,
                            "bound_incl_max": 45,
                            "boost_level": 2,
                            "boost_experience_percent": 25
                        }
                    },
                    "nightmare": {
                        "type": "DesecratedGameDifficultyConfig",
                        "name": "desecratedzones_desecrated_zones_0_game_difficulties_expansion_nightmare",
                        "ladder_enabled": true,
                        "non_ladder_enabled": true,
                        "max_herald_tokens": 0,
                        "max_herald_tiers": 0,
                        "defaults": {
                            "type": "DesecratedDifficultyConfig",
                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_expansion_nightmare_defaults",
                            "bound_incl_min": 40,
                            "bound_incl_max": 71,
                            "boost_level": 2,
                            "boost_experience_percent": 25
                        }
                    },
                    "hell": {
                        "type": "DesecratedGameDifficultyConfig",
                        "name": "desecratedzones_desecrated_zones_0_game_difficulties_expansion_hell",
                        "ladder_enabled": true,
                        "non_ladder_enabled": true,
                        "max_herald_tokens": 0,
                        "max_herald_tiers": 0,
                        "defaults": {
                            "type": "DesecratedDifficultyConfig",
                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_expansion_hell_defaults",
                            "bound_incl_min": 70,
                            "bound_incl_max": 96,
                            "boost_level": 2,
                            "boost_experience_percent": 25
                        }
                    }
                },

                /* Reign of the Warlock games/characters */
                "rotw": {
                    "type": "DesecratedGameDifficultyPerDifficulty",
                    "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw",
                    "normal": {
                        "type": "DesecratedGameDifficultyConfig",
                        "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_normal",
                        "ladder_enabled": true,
                        "non_ladder_enabled": true,
                        "max_herald_tokens": 0,
                        "max_herald_tiers": 0,
                        "defaults": {
                            "type": "DesecratedDifficultyConfig",
                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_normal_defaults",
                            "bound_incl_min": 3,
                            "bound_incl_max": 45,
                            "boost_level": 2,
                            "boost_experience_percent": 25
                        }
                    },
                    "nightmare": {
                        "type": "DesecratedGameDifficultyConfig",
                        "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_nightmare",
                        "ladder_enabled": true,
                        "non_ladder_enabled": true,
                        "max_herald_tokens": 0,
                        "max_herald_tiers": 0,
                        "defaults": {
                            "type": "DesecratedDifficultyConfig",
                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_nightmare_defaults",
                            "bound_incl_min": 40,
                            "bound_incl_max": 71,
                            "boost_level": 2,
                            "boost_experience_percent": 25
                        }
                    },
                    "hell": {
                        "type": "DesecratedGameDifficultyConfig",
                        "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell",

                        /* UNTESTED, seem self-explanatory though. 
                        * My guesses are...
                        * "ladder_enabled" does this work in ladder
                        * "non_ladder_enabled" does this work in non-ladder
                        */
                        "ladder_enabled": true,
                        "non_ladder_enabled": true,

                        /* Overarching herald configuration for games in this difficulty.
                         * As far as I am aware, this cannot be overriden per zone or per level :(
                         * "max_herald_tokens" indicates how many tokens can be accumulated at a single time. These are "You draw the ire of a herald" messages that haven't spawned a herald yet.
                         * "max_herald_tiers" indicates how many different herald tiers may appear before all subsequent heralds are of the maximum tier.
                         *      First 5 tiers will have vanilla names "Herald of Fright", "Herald of Dread", "Herald of Fear", "Herald of Horror", and "Herald of Terror".
                         *      Subsequent tiers will have name "Herald of Fright" but have their own tier and stats, including affecting drops that look at herald tiers in treasure classes.
                         *      Presumably this text can be changed somewhere, but I have not figured out where or how.
                         *      Unsure if this has a maximum, but I have tried up to 27 with success.
                         *      While this number does not HAVE to match the number of herald tiers defined below, when they don't match behaviour is unpredictable and odd. Including crashes in some of my tests.
                         *      I do not recommend non-matching number here with number of tiers defined below. Keep them the same.
                         */
                        "max_herald_tokens": 5,
                        "max_herald_tiers": 5,

                        /* UNTESTED, seems to deal with unique mods that all enemies and heralds get in terrorized games. */
                        "always_unique_mod_pool": [
                            {
                                "type": "AlwaysUniqueMod",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_always_unique_mod_pool_0",
                                "unique_mod": 5,
                                "chance": 15
                            },
                            {
                                "type": "AlwaysUniqueMod",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_always_unique_mod_pool_1",
                                "unique_mod": 6,
                                "chance": 15
                            },
                            {
                                "type": "AlwaysUniqueMod",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_always_unique_mod_pool_2",
                                "unique_mod": 7,
                                "chance": 5
                            },
                            {
                                "type": "AlwaysUniqueMod",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_always_unique_mod_pool_3",
                                "unique_mod": 9,
                                "chance": 15
                            },
                            {
                                "type": "AlwaysUniqueMod",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_always_unique_mod_pool_4",
                                "unique_mod": 17,
                                "chance": 10
                            },
                            {
                                "type": "AlwaysUniqueMod",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_always_unique_mod_pool_5",
                                "unique_mod": 18,
                                "chance": 15
                            },
                            {
                                "type": "AlwaysUniqueMod",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_always_unique_mod_pool_6",
                                "unique_mod": 25,
                                "chance": 5
                            },
                            {
                                "type": "AlwaysUniqueMod",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_always_unique_mod_pool_7",
                                "unique_mod": 27,
                                "chance": 5
                            },
                            {
                                "type": "AlwaysUniqueMod",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_always_unique_mod_pool_8",
                                "unique_mod": 28,
                                "chance": 5
                            }
                        ],

                        /* These defaults indicate further parameters of terror zones that CAN be overridden per zone and per level. */
                        "defaults": {
                            "type": "DesecratedDifficultyConfig",
                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults",

                            /* "bound_incl_min" minimum monster level that all enemies in the terror zone will have (regardless of character level).
                             * "bound_incl_max" maximum monster level that all enemies in the terror zone will have (regardless of character level).
                             *      This can be over 100. With appropriate monlvl.txt definitions, I have used up to 123 without issue.
                             * "boost_level" number that will be added to character level to determine the intended monster level in the zone.
                             *      If the result is below "bound_incl_min", then "bound_incl_min" is used instead.
                             *      If the result is above "bound_incl_max", then "bound_incl_max" is used instead.
                             */
                            "bound_incl_min": 70,
                            "bound_incl_max": 96,
                            "boost_level": 2,

                            /* "boost_experience_percent" Percentage extra experience that monsters in the terror zone give. */                             
                            "boost_experience_percent": 25,

                            /* "chance_to_gain_herald_token" Percentage (out of 100) chance that a herald token ("You draw the ire of a herald") will be generated
                             *      after each elite monster kill in the terror zone.
                             * "chance_for_token_to_convert_to_herald" Percentage (out of 100) chance that an existing herald token will manifest into a herald
                             *      every time a new portion of the map is generated (when you get close to it).
                             *      This number is weird because it depends on map chunk size. I recommend keeping it to about 1/2 of "chance_to_gain_herald_token" or higher,
                             *      unless you want herald tokens to accumulate.
                             *      Multiple heralds can spawn together.
                             *      Map zones are often generated before you enter a level just by approaching the connection. For example, you can spawn heralds
                             *      inside Den of Evil while being on Bloodmoor if you approach the entrance.
                             *      This is only calculated the first time you approach a map chunk. Once it's been generated, heralds will not spawn there anymore.
                             *      Herald tokens are completely transferable between zones and levels. These two numbers act independently based on where the elite monster was killed and which map zone you generated. They are not linked.
                             */                             
                            "chance_to_gain_herald_token": 2.0,
                            "chance_for_token_to_convert_to_herald": 1.0,

                            /* UNTESTED, seems to deal with additional elite mods that heralds get. */
                            "unique_mod_chance_boosts": [
                                {
                                    "type": "UniqueModChanceBoost",
                                    "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_unique_mod_chance_boosts_0",
                                    "unique_mod": 30,
                                    "boost": 6,
                                    "behavior": 0
                                }
                            ],

                            /* Definition of herald tiers. The first entry defines tier 1 (0) heralds (Heralds of Fright), and then Heralds of Dread, etc.
                             * This should match "max_herald_tiers" above unless you want glitchy behaviour, including occasional crashes.
                             * I experimented with defining different number of herald tiers on different zones/levels, but I wasn't successful. It is very glitchy and I do not recommend it.
                             * But feel free to experiment and let me know if you find something cool (:
                             * I also experimented with having subsequent tiers have lower health/damage boosts to prior ones, and it was also quite glitchy. Do not recommend.
                             */
                            "herald_tiers": [
                                {
                                    "type": "DesecratedHeraldTier",
                                    "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_0",

                                    /* Health and damage modifications to heralds and their minions.
                                     * "herald_health_boost_percent" Extra health (percent) for the herald of this tier
                                     * "herald_damage_boost_percent" Extra damage (percent) for the herald of this tier. I believe some missiles and spells are affected and others aren't. Haven't fully tested this.
                                     * "minion_health_boost_percent" Extra health (percent) for the minions that spawn with the herald.
                                     * "minion_damage_boost_percent" Extra damage (percent) for the minions that spawn with the herald.
                                     */
                                    "herald_health_boost_percent": 1000,
                                    "herald_damage_boost_percent": 50,
                                    "minion_health_boost_percent": 250,
                                    "minion_damage_boost_percent": 10,

                                    /* UNTESTED, function not known. */
                                    "minion_behavior": 1,

                                    /* Presumably, these two values determine the minimum and maximum number of minions that spawn with the heralds.
                                     *      However, in tests, this was unreliable. For example, I was incapable of spawning a herald with less than 6 minions no matter how I defined this.
                                     *      It's possible my tests were a bit bogus, more experimentation may be necessary here.
                                     */
                                    "min_minions": 6,
                                    "max_minions": 6,

                                    /* UNTESTED, seems to deal with what kind of minions are generated, but not sure how it works.
                                     * The relation of "min" and "max" with "min_minions" and "max_minions" above is also unclear.
                                     * Keeping a structure similar to the defaults definitely makes higher tier heralds have more minions, but overall it feels slightly unpredictable.
                                     */
                                    "minions": [
                                        {
                                            "type": "DesecratedHeraldMinion",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_0_minions_0",
                                            "minion_type": 1,
                                            "chance": 1,
                                            "min": 6,
                                            "max": 6
                                        }
                                    ],

                                    /* UNTESTED, presumably the number of elite mods that the herald spawns with. This seems to match what you see in practice. */
                                    "min_unique_mods": 3,
                                    "max_unique_mods": 3,

                                    /* UNTESTED, similar to the above but with specific modifications for each herald tier. Not sure of the details. */
                                    "unique_mod_chance_boosts": [
                                        {
                                            "type": "UniqueModChanceBoost",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_0_unique_mod_chance_boosts_0",
                                            "unique_mod": 30,
                                            "boost": 1,
                                            "behavior": 1
                                        }
                                    ]
                                },
                                {
                                    "type": "DesecratedHeraldTier",
                                    "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_1",
                                    "herald_health_boost_percent": 1500,
                                    "herald_damage_boost_percent": 100,
                                    "herald_treasure_class_level_boost": 3,
                                    "minion_health_boost_percent": 375,
                                    "minion_damage_boost_percent": 20,
                                    "minion_behavior": 1,
                                    "min_minions": 8,
                                    "max_minions": 8,
                                    "minions": [
                                        {
                                            "type": "DesecratedHeraldMinion",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_1_minions_0",
                                            "minion_type": 1,
                                            "chance": 2,
                                            "min": 8,
                                            "max": 8
                                        }
                                    ],
                                    "min_unique_mods": 3,
                                    "max_unique_mods": 3,
                                    "unique_mod_chance_boosts": [
                                        {
                                            "type": "UniqueModChanceBoost",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_1_unique_mod_chance_boosts_0",
                                            "unique_mod": 30,
                                            "boost": 1,
                                            "behavior": 1
                                        }
                                    ]
                                },
                                {
                                    "type": "DesecratedHeraldTier",
                                    "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_2",
                                    "herald_health_boost_percent": 2000,
                                    "herald_damage_boost_percent": 150,
                                    "herald_treasure_class_level_boost": 6,
                                    "minion_health_boost_percent": 500,
                                    "minion_damage_boost_percent": 30,
                                    "minion_behavior": 1,
                                    "min_minions": 10,
                                    "max_minions": 10,
                                    "minions": [
                                        {
                                            "type": "DesecratedHeraldMinion",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_2_minions_0",
                                            "minion_type": 1,
                                            "chance": 3,
                                            "min": 10,
                                            "max": 10
                                        }
                                    ],
                                    "min_unique_mods": 4,
                                    "max_unique_mods": 4,
                                    "unique_mod_chance_boosts": [
                                        {
                                            "type": "UniqueModChanceBoost",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_2_unique_mod_chance_boosts_0",
                                            "unique_mod": 30,
                                            "boost": 1,
                                            "behavior": 1
                                        }
                                    ]
                                },
                                {
                                    "type": "DesecratedHeraldTier",
                                    "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_3",
                                    "herald_health_boost_percent": 2500,
                                    "herald_damage_boost_percent": 200,
                                    "herald_treasure_class_level_boost": 9,
                                    "minion_health_boost_percent": 625,
                                    "minion_damage_boost_percent": 40,
                                    "minion_behavior": 1,
                                    "min_minions": 12,
                                    "max_minions": 12,
                                    "minions": [
                                        {
                                            "type": "DesecratedHeraldMinion",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_3_minions_0",
                                            "minion_type": 1,
                                            "chance": 5,
                                            "min": 12,
                                            "max": 12
                                        }
                                    ],
                                    "min_unique_mods": 4,
                                    "max_unique_mods": 4,
                                    "unique_mod_chance_boosts": [
                                        {
                                            "type": "UniqueModChanceBoost",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_3_unique_mod_chance_boosts_0",
                                            "unique_mod": 30,
                                            "boost": 1,
                                            "behavior": 1
                                        }
                                    ]
                                },
                                {
                                    "type": "DesecratedHeraldTier",
                                    "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_4",
                                    "herald_health_boost_percent": 3000,
                                    "herald_damage_boost_percent": 250,
                                    "herald_treasure_class_level_boost": 12,
                                    "minion_health_boost_percent": 750,
                                    "minion_damage_boost_percent": 50,
                                    "minion_behavior": 1,
                                    "min_minions": 14,
                                    "max_minions": 14,
                                    "minions": [
                                        {
                                            "type": "DesecratedHeraldMinion",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_4_minions_0",
                                            "minion_type": 1,
                                            "chance": 6,
                                            "min": 14,
                                            "max": 14
                                        }
                                    ],
                                    "min_unique_mods": 4,
                                    "max_unique_mods": 4,
                                    "unique_mod_chance_boosts": [
                                        {
                                            "type": "UniqueModChanceBoost",
                                            "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_defaults_herald_tiers_4_unique_mod_chance_boosts_0",
                                            "unique_mod": 30,
                                            "boost": 1,
                                            "behavior": 1
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            },
            /* UNTESTED, presumably deal with the warning messages when a terror zone is going to finish. Not sure where the texts are defined. */
            "warnings": [
                {
                    "type": "DesecratedWarning",
                    "name": "desecratedzones_desecrated_zones_0_warnings_0",
                    "announce_time_minutes": 3,
                    "tier": 1
                },
                {
                    "type": "DesecratedWarning",
                    "name": "desecratedzones_desecrated_zones_0_warnings_1",
                    "announce_time_minutes": 2,
                    "tier": 2
                },
                {
                    "type": "DesecratedWarning",
                    "name": "desecratedzones_desecrated_zones_0_warnings_2",
                    "announce_time_minutes": 1,
                    "tier": 3
                },
                {
                    "type": "DesecratedWarning",
                    "name": "desecratedzones_desecrated_zones_0_warnings_3",
                    "announce_time_minutes": 0,
                    "tier": 0
                }
            ],

            /* Only partly tested - These seem to deal with the manual zones caused by using Western/Eastern/Southern/Deep/Northern shards to terrorize full acts.
             * Definitions are equivalent to the ones below in "zones", so read there for details on how to configure specific zones/levels.
             */
            "manual_zones": [
                {
                    "type": "DesecratedZoneGroup",
                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0",
                    "group_id": 1,
                    "zones": [
                        {
                            "type": "DesecratedZone",
                            "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0",
                            "id": "Act1-Manual",
                            "levels": [
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_0",
                                    "level_id": 33,
                                    "waypoint_level_id": 32
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_1",
                                    "level_id": 17,
                                    "waypoint_level_id": 3
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_2",
                                    "level_id": 18
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_3",
                                    "level_id": 19
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_4",
                                    "level_id": 34
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_5",
                                    "level_id": 35,
                                    "waypoint_level_id": 35
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_6",
                                    "level_id": 36
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_7",
                                    "level_id": 37
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_8",
                                    "level_id": 32
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_9",
                                    "level_id": 3,
                                    "waypoint_level_id": 3
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_10",
                                    "level_id": 9
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_11",
                                    "level_id": 13
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_12",
                                    "level_id": 5,
                                    "waypoint_level_id": 5
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_13",
                                    "level_id": 10
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_14",
                                    "level_id": 14
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_15",
                                    "level_id": 2,
                                    "waypoint_level_id": 1
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_16",
                                    "level_id": 8
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_17",
                                    "level_id": 28,
                                    "waypoint_level_id": 0
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_18",
                                    "level_id": 29,
                                    "waypoint_level_id": 29
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_19",
                                    "level_id": 30
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_20",
                                    "level_id": 31
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_22",
                                    "level_id": 4,
                                    "waypoint_level_id": 4
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_23",
                                    "level_id": 38
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_24",
                                    "level_id": 6,
                                    "waypoint_level_id": 6
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_25",
                                    "level_id": 11
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_26",
                                    "level_id": 15
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_27",
                                    "level_id": 20
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_28",
                                    "level_id": 21
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_29",
                                    "level_id": 22
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_30",
                                    "level_id": 23
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_31",
                                    "level_id": 24
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_32",
                                    "level_id": 25
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_33",
                                    "level_id": 7,
                                    "waypoint_level_id": 27
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_34",
                                    "level_id": 12
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_35",
                                    "level_id": 16
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_36",
                                    "level_id": 26
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_0_zones_0_levels_37",
                                    "level_id": 27
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "DesecratedZoneGroup",
                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1",
                    "group_id": 2,
                    "zones": [
                        {
                            "type": "DesecratedZone",
                            "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0",
                            "id": "Act2-Manual",
                            "levels": [
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_0",
                                    "level_id": 47,
                                    "waypoint_level_id": 40
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_1",
                                    "level_id": 48,
                                    "waypoint_level_id": 48
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_2",
                                    "level_id": 49
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_3",
                                    "level_id": 41,
                                    "waypoint_level_id": 40
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_4",
                                    "level_id": 55
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_5",
                                    "level_id": 59
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_6",
                                    "level_id": 42,
                                    "waypoint_level_id": 42
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_7",
                                    "level_id": 56
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_8",
                                    "level_id": 57,
                                    "waypoint_level_id": 57
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_9",
                                    "level_id": 60
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_10",
                                    "level_id": 43,
                                    "waypoint_level_id": 43
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_11",
                                    "level_id": 62
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_12",
                                    "level_id": 63
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_13",
                                    "level_id": 64
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_14",
                                    "level_id": 44,
                                    "waypoint_level_id": 44
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_15",
                                    "level_id": 45
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_16",
                                    "level_id": 58
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_17",
                                    "level_id": 61
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_18",
                                    "level_id": 65
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_19",
                                    "level_id": 66,
                                    "waypoint_level_id": 46
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_20",
                                    "level_id": 67
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_21",
                                    "level_id": 68
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_22",
                                    "level_id": 69
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_23",
                                    "level_id": 70
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_24",
                                    "level_id": 71
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_25",
                                    "level_id": 72
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_26",
                                    "level_id": 73
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_27",
                                    "level_id": 46
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_28",
                                    "level_id": 74,
                                    "waypoint_level_id": 74
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_29",
                                    "level_id": 50
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_30",
                                    "level_id": 51
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_31",
                                    "level_id": 52,
                                    "waypoint_level_id": 52
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_32",
                                    "level_id": 53
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_1_zones_0_levels_33",
                                    "level_id": 54
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "DesecratedZoneGroup",
                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2",
                    "group_id": 3,
                    "zones": [
                        {
                            "type": "DesecratedZone",
                            "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0",
                            "id": "Act3-Manual",
                            "levels": [
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_0",
                                    "level_id": 76,
                                    "waypoint_level_id": 76
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_1",
                                    "level_id": 85,
                                    "waypoint_level_id": 75
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_26",
                                    "level_id": 84
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_2",
                                    "level_id": 77,
                                    "waypoint_level_id": 77
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_3",
                                    "level_id": 78,
                                    "waypoint_level_id": 78
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_4",
                                    "level_id": 88
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_5",
                                    "level_id": 89
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_6",
                                    "level_id": 91
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_7",
                                    "level_id": 86
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_8",
                                    "level_id": 87
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_9",
                                    "level_id": 90
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_10",
                                    "level_id": 80,
                                    "waypoint_level_id": 80
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_11",
                                    "level_id": 79,
                                    "waypoint_level_id": 79
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_12",
                                    "level_id": 81,
                                    "waypoint_level_id": 81
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_13",
                                    "level_id": 82
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_14",
                                    "level_id": 92
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_15",
                                    "level_id": 93
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_16",
                                    "level_id": 94
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_17",
                                    "level_id": 95
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_18",
                                    "level_id": 96
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_19",
                                    "level_id": 97
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_20",
                                    "level_id": 98
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_21",
                                    "level_id": 99
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_22",
                                    "level_id": 83,
                                    "waypoint_level_id": 83
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_23",
                                    "level_id": 100
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_24",
                                    "level_id": 101,
                                    "waypoint_level_id": 101
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_2_zones_0_levels_25",
                                    "level_id": 102
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "DesecratedZoneGroup",
                    "name": "desecratedzones_desecrated_zones_0_manual_zones_3",
                    "group_id": 4,
                    "zones": [
                        {
                            "type": "DesecratedZone",
                            "name": "desecratedzones_desecrated_zones_0_manual_zones_3_zones_0",
                            "id": "Act4-Manual",
                            "levels": [
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_3_zones_0_levels_0",
                                    "level_id": 104,
                                    "waypoint_level_id": 103
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_3_zones_0_levels_1",
                                    "level_id": 105
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_3_zones_0_levels_2",
                                    "level_id": 106,
                                    "waypoint_level_id": 106
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_3_zones_0_levels_3",
                                    "level_id": 107,
                                    "waypoint_level_id": 107
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_3_zones_0_levels_4",
                                    "level_id": 108,
                                    "waypoint_level_id": 107
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "DesecratedZoneGroup",
                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4",
                    "group_id": 5,
                    "zones": [
                        {
                            "type": "DesecratedZone",
                            "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0",
                            "id": "Act5-Manual",
                            "levels": [
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_0",
                                    "level_id": 111,
                                    "waypoint_level_id": 111
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_1",
                                    "level_id": 110
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_2",
                                    "level_id": 125
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_3",
                                    "level_id": 112,
                                    "waypoint_level_id": 112
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_4",
                                    "level_id": 126
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_5",
                                    "level_id": 113,
                                    "waypoint_level_id": 113
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_6",
                                    "level_id": 114
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_7",
                                    "level_id": 121,
                                    "waypoint_level_id": 109
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_8",
                                    "level_id": 122
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_9",
                                    "level_id": 123,
                                    "waypoint_level_id": 123
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_10",
                                    "level_id": 124
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_11",
                                    "level_id": 115,
                                    "waypoint_level_id": 115
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_12",
                                    "level_id": 116
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_13",
                                    "level_id": 118,
                                    "waypoint_level_id": 118
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_14",
                                    "level_id": 119
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_15",
                                    "level_id": 117,
                                    "waypoint_level_id": 117
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_16",
                                    "level_id": 127
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_17",
                                    "level_id": 128
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_18",
                                    "level_id": 129,
                                    "waypoint_level_id": 129
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_19",
                                    "level_id": 130
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_20",
                                    "level_id": 131
                                },
                                {
                                    "type": "DesecratedLevel",
                                    "name": "desecratedzones_desecrated_zones_0_manual_zones_4_zones_0_levels_21",
                                    "level_id": 132
                                }
                            ]
                        }
                    ]
                }
            ],
            /* Terrorized zones that the games rotates through.
             * One zone is a group of levels that get terrorized at the same time.
             * Configurations can be overridden for full zones and for individual levels.
             * Inheritance is how you'd expect, defaults -> zone -> level.
             * overrides can specify as many or as few fields as they want, inheriting all other fields from defaults/zone above them.
             */
            "zones": [
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_0",

                    /* UNTESTED - I have not experimented with what happens when you change this. */
                    "id": "Act1-BurialGrounds",

                    /* IMPORTANT: The "difficulties" key is used to provide overrides on zones or levels (in this case, the entire zone). */
                    "difficulties": {
                        /* SEE "defaults" ABOVE.
                         * From here on, the structure is equivalent to what is within "defaults" above. For example, here we override for RoTW Hell only.
                         */
                        "rotw": {                             
                            "hell": {                                
                                "type": "DesecratedDifficultyConfig",
                                "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_zone_override",
                                "bound_incl_min": 85,
                                "bound_incl_max": 98,
                                "boost_level": 5,
                                "boost_experience_percent": 125,
                                "chance_to_gain_herald_token": 75.0,
                                "chance_for_token_to_convert_to_herald": 35.0,

                                /* You can omit fields you don't want to override. */

                                /* And you can even override the herald tiers, but the number should match. */
                                // "herald_tiers": [ ... ]
                            }
                        }
                    },
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_0_levels_0",

                            /* "level_id" is a reference to the Id in levels.txt
                             * "waypoint_level_id" also is, and indicates the level that contains the waypoint that should be lit up in the waypoint list as terrorized in association with this zone.
                             * For example, 17 is Burial grounds while 3 is Cold Plains (because Cold Plains is the waypoint that this zone indicates as being closest to Burial Grounds).
                             */
                            "level_id": 17,                            
                            "waypoint_level_id": 3,

                            /* IMPORTANT: The "difficulties" key is used to provide overrides on zones or levels (in this case, specifically Burial Grounds). */
                            "difficulties": {
                                /* SEE "defaults" ABOVE.
                                * From here on, the structure is equivalent to what is within "defaults" above. For example, here we override for RoTW Hell only.
                                */
                                "rotw": {                             
                                    "hell": {                                
                                        "type": "DesecratedDifficultyConfig",
                                        "name": "desecratedzones_desecrated_zones_0_game_difficulties_rotw_hell_zone_override",
                                        "bound_incl_min": 99,
                                        "bound_incl_max": 99,
                                        "boost_level": 20,
                                        "boost_experience_percent": 0,
                                        "chance_to_gain_herald_token": 100.0,
                                        "chance_for_token_to_convert_to_herald": 0.0,

                                        /* You can omit fields you don't want to override. */

                                        /* And you can even override the herald tiers, but the number should match. */
                                        // "herald_tiers": [ ... ]
                                    }
                                }
                            }
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_0_levels_1",
                            "level_id": 18
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_0_levels_2",
                            "level_id": 19
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_1",
                    "id": "Act1-Catacombs",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_1_levels_0",
                            "level_id": 33,
                            "waypoint_level_id": 32
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_1_levels_1",
                            "level_id": 34
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_1_levels_2",
                            "level_id": 35,
                            "waypoint_level_id": 35
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_1_levels_3",
                            "level_id": 36
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_1_levels_4",
                            "level_id": 37
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_1_levels_5",
                            "level_id": 32
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_2",
                    "id": "Act1-ColdPlains",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_2_levels_0",
                            "level_id": 3,
                            "waypoint_level_id": 3
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_2_levels_1",
                            "level_id": 9
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_2_levels_2",
                            "level_id": 13
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_3",
                    "id": "Act1-DarkWood",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_3_levels_0",
                            "level_id": 5,
                            "waypoint_level_id": 5
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_3_levels_1",
                            "level_id": 10
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_3_levels_2",
                            "level_id": 14
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_4",
                    "id": "Act1-BloodMoor",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_4_levels_0",
                            "level_id": 2,
                            "waypoint_level_id": 1
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_4_levels_1",
                            "level_id": 8
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_5",
                    "id": "Act1-Jail",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_5_levels_0",
                            "level_id": 28,
                            "waypoint_level_id": 0
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_5_levels_1",
                            "level_id": 29,
                            "waypoint_level_id": 29
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_5_levels_2",
                            "level_id": 30
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_5_levels_3",
                            "level_id": 31
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_6",
                    "id": "Act1-MooMooFarm",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_6_levels_0",
                            "level_id": 39,
                            "waypoint_level_id": 1
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_7",
                    "id": "Act1-Tristram",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_7_levels_0",
                            "level_id": 4,
                            "waypoint_level_id": 4
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_7_levels_1",
                            "level_id": 38
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_8",
                    "id": "Act1-Tower",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_8_levels_0",
                            "level_id": 6,
                            "waypoint_level_id": 6
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_8_levels_1",
                            "level_id": 11
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_8_levels_2",
                            "level_id": 15
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_8_levels_3",
                            "level_id": 20
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_8_levels_4",
                            "level_id": 21
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_8_levels_5",
                            "level_id": 22
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_8_levels_6",
                            "level_id": 23
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_8_levels_7",
                            "level_id": 24
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_8_levels_8",
                            "level_id": 25
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_9",
                    "id": "Act1-Monastery",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_9_levels_0",
                            "level_id": 7
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_9_levels_1",
                            "level_id": 27,
                            "waypoint_level_id": 27
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_9_levels_2",
                            "level_id": 12
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_9_levels_3",
                            "level_id": 16
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_9_levels_4",
                            "level_id": 26
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_11",
                    "id": "Act2-Sewers",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_11_levels_0",
                            "level_id": 0
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_11_levels_1",
                            "level_id": 47,
                            "waypoint_level_id": 40
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_11_levels_2",
                            "level_id": 48,
                            "waypoint_level_id": 48
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_11_levels_3",
                            "level_id": 49
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_14",
                    "id": "Act2-RockyWaste",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_14_levels_0",
                            "level_id": 41,
                            "waypoint_level_id": 40
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_14_levels_1",
                            "level_id": 55
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_14_levels_2",
                            "level_id": 59
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_15",
                    "id": "Act2-DryHills",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_15_levels_0",
                            "level_id": 42,
                            "waypoint_level_id": 42
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_15_levels_1",
                            "level_id": 56
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_15_levels_2",
                            "level_id": 57,
                            "waypoint_level_id": 57
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_15_levels_3",
                            "level_id": 60
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_16",
                    "id": "Act2-FarOasis",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_16_levels_0",
                            "level_id": 43,
                            "waypoint_level_id": 43
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_16_levels_1",
                            "level_id": 62
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_16_levels_2",
                            "level_id": 63
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_16_levels_3",
                            "level_id": 64
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_17",
                    "id": "Act2-LostCity",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_17_levels_0",
                            "level_id": 44,
                            "waypoint_level_id": 44
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_17_levels_1",
                            "level_id": 45
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_17_levels_2",
                            "level_id": 58
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_17_levels_3",
                            "level_id": 61
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_17_levels_4",
                            "level_id": 65
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_18",
                    "id": "Act2-TalRashas",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_18_levels_0",
                            "level_id": 66,
                            "waypoint_level_id": 46
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_18_levels_1",
                            "level_id": 67
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_18_levels_2",
                            "level_id": 68
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_18_levels_3",
                            "level_id": 69
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_18_levels_4",
                            "level_id": 70
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_18_levels_5",
                            "level_id": 71
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_18_levels_6",
                            "level_id": 72
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_18_levels_7",
                            "level_id": 73
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_18_levels_8",
                            "level_id": 46
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_19",
                    "id": "Act2-ArcaneSanctuary",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_19_levels_0",
                            "level_id": 74,
                            "waypoint_level_id": 74
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_19_levels_1",
                            "level_id": 50
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_19_levels_2",
                            "level_id": 51
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_19_levels_3",
                            "level_id": 52,
                            "waypoint_level_id": 52
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_19_levels_4",
                            "level_id": 53
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_19_levels_5",
                            "level_id": 54
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_20",
                    "id": "Act3-SpiderForest",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_20_levels_0",
                            "level_id": 76,
                            "waypoint_level_id": 76
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_20_levels_2",
                            "level_id": 84
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_20_levels_1",
                            "level_id": 85
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_21",
                    "id": "Act3-GreatMarsh",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_21_levels_0",
                            "level_id": 77,
                            "waypoint_level_id": 77
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_22",
                    "id": "Act3-FlayerJungle",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_22_levels_0",
                            "level_id": 78,
                            "waypoint_level_id": 78
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_22_levels_1",
                            "level_id": 88
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_22_levels_2",
                            "level_id": 89
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_22_levels_3",
                            "level_id": 91
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_22_levels_4",
                            "level_id": 86
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_22_levels_5",
                            "level_id": 87
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_22_levels_6",
                            "level_id": 90
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_23",
                    "id": "Act3-Kurast",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_0",
                            "level_id": 80,
                            "waypoint_level_id": 80
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_1",
                            "level_id": 79,
                            "waypoint_level_id": 79
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_2",
                            "level_id": 81,
                            "waypoint_level_id": 81
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_3",
                            "level_id": 82
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_4",
                            "level_id": 92
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_5",
                            "level_id": 93
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_6",
                            "level_id": 94
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_7",
                            "level_id": 95
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_8",
                            "level_id": 96
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_9",
                            "level_id": 97
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_10",
                            "level_id": 98
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_23_levels_11",
                            "level_id": 99
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_24",
                    "id": "Act3-Travincal",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_24_levels_0",
                            "level_id": 83,
                            "waypoint_level_id": 83
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_25",
                    "id": "Act3-DuranceOfHate",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_25_levels_0",
                            "level_id": 100
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_25_levels_1",
                            "level_id": 101,
                            "waypoint_level_id": 101
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_25_levels_2",
                            "level_id": 102
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_26",
                    "id": "Act4_OuterSteppes",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_26_levels_0",
                            "level_id": 104,
                            "waypoint_level_id": 103
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_26_levels_1",
                            "level_id": 105
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_27",
                    "id": "Act4-RiverOfFlame",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_27_levels_0",
                            "level_id": 106,
                            "waypoint_level_id": 106
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_27_levels_1",
                            "level_id": 107,
                            "waypoint_level_id": 107
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_28",
                    "id": "Act4-ChaosSanctuary",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_28_levels_0",
                            "level_id": 108,
                            "waypoint_level_id": 107
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_29",
                    "id": "Act5-BloodyFoothils",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_29_levels_0",
                            "level_id": 110
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_29_levels_1",
                            "level_id": 111,
                            "waypoint_level_id": 111
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_29_levels_2",
                            "level_id": 125
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_30",
                    "id": "Act5-ArreatPlateau",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_30_levels_0",
                            "level_id": 112,
                            "waypoint_level_id": 112
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_30_levels_1",
                            "level_id": 126
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_31",
                    "id": "Act5-CrystallinePassage",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_31_levels_0",
                            "level_id": 113,
                            "waypoint_level_id": 113
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_31_levels_1",
                            "level_id": 114
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_32",
                    "id": "Act5-Halls",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_32_levels_0",
                            "level_id": 121,
                            "waypoint_level_id": 109
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_32_levels_1",
                            "level_id": 122
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_32_levels_2",
                            "level_id": 123,
                            "waypoint_level_id": 123
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_32_levels_3",
                            "level_id": 124
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_33",
                    "id": "Act5-GlacialTrail",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_33_levels_0",
                            "level_id": 115,
                            "waypoint_level_id": 115
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_33_levels_1",
                            "level_id": 116
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_34",
                    "id": "Act5-AncientsWay",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_34_levels_0",
                            "level_id": 118,
                            "waypoint_level_id": 118
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_34_levels_1",
                            "level_id": 119
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_35",
                    "id": "Act5-FrozenTundra",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_35_levels_0",
                            "level_id": 117,
                            "waypoint_level_id": 117
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_35_levels_1",
                            "level_id": 127
                        }
                    ]
                },
                {
                    "type": "DesecratedZone",
                    "name": "desecratedzones_desecrated_zones_0_zones_36",
                    "id": "Act5-WorldstoneKeep",
                    "levels": [
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_36_levels_0",
                            "level_id": 128
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_36_levels_1",
                            "level_id": 129,
                            "waypoint_level_id": 129
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_36_levels_2",
                            "level_id": 130
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_36_levels_3",
                            "level_id": 131
                        },
                        {
                            "type": "DesecratedLevel",
                            "name": "desecratedzones_desecrated_zones_0_zones_36_levels_4",
                            "level_id": 132
                        }
                    ]
                }
            ]
        }
    ]
}
```

In order to reverse engineer some parts of this, especially the per-zone and per-level overrides, help from killshot777 was instrumental. They were able to ask an LLM to generate a JSON file guide based on decompiled game code, that helped uncover some fields that were not present in the original file. The generated JSON file guide is included here for further reference.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "DesecratedZonesConfigs",
  "type": "object",
  "properties": {
    "dependencies": {
      "type": "object",
      "properties": {
        "particles": { "type": "array", "items": { "type": "string" } },
        "models": { "type": "array", "items": { "type": "string" } },
        "skeletons": { "type": "array", "items": { "type": "string" } },
        "animations": { "type": "array", "items": { "type": "string" } },
        "textures": { "type": "array", "items": { "type": "string" } },
        "physics": { "type": "array", "items": { "type": "string" } },
        "json": { "type": "array", "items": { "type": "string" } },
        "variantdata": { "type": "array", "items": { "type": "string" } },
        "objecteffects": { "type": "array", "items": { "type": "string" } },
        "other": { "type": "array", "items": { "type": "string" } }
      }
    },
    "type": { "type": "string", "const": "DesecratedZonesConfigs" },
    "name": { "type": "string" },
    "desecrated_zones": {
      "type": "array",
      "items": { "$ref": "#/definitions/DesecratedConfigData" }
    }
  },
  "required": ["type", "name", "desecrated_zones"],
  "definitions": {
    "DesecratedConfigData": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedConfigData" },
        "name": { "type": "string" },
        "start_time_utc": { "type": "string", "description": "Required. UTC time 'YYYY-MM-DD HH:MM:SS'." },
        "end_time_utc": { "type": "string", "description": "UTC time. If empty/missing, no end time (INT64_MAX)." },
        "seed": { "type": "integer", "description": "int64 seed for zone rotation." },
        "zone_duration_minutes": { "type": "integer", "default": 0 },
        "break_duration_minutes": { "type": "integer", "default": 0 },
        "manual_deprioritize_threshold": { "type": "integer", "default": 0 },
        "manual_removal_threshold": { "type": "integer", "default": 0 },
        "game_difficulties": { "$ref": "#/definitions/DesecratedGameDifficultyPerGameVersion" },
        "warnings": { "type": "array", "items": { "$ref": "#/definitions/DesecratedWarning" } },
        "zones": { "type": "array", "items": { "$ref": "#/definitions/DesecratedZone" } },
        "manual_zones": { "type": "array", "items": { "$ref": "#/definitions/DesecratedZoneGroup" } }
      },
      "required": ["start_time_utc"]
    },
    "DesecratedGameDifficultyPerGameVersion": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedGameDifficultyPerGameVersion" },
        "name": { "type": "string" },
        "expansion": { "$ref": "#/definitions/DesecratedGameDifficultyPerDifficulty" },
        "rotw": { "$ref": "#/definitions/DesecratedGameDifficultyPerDifficulty" }
      }
    },
    "DesecratedGameDifficultyPerDifficulty": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedGameDifficultyPerDifficulty" },
        "name": { "type": "string" },
        "normal": { "$ref": "#/definitions/DesecratedGameDifficultyConfig" },
        "nightmare": { "$ref": "#/definitions/DesecratedGameDifficultyConfig" },
        "hell": { "$ref": "#/definitions/DesecratedGameDifficultyConfig" }
      }
    },
    "DesecratedGameDifficultyConfig": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedGameDifficultyConfig" },
        "name": { "type": "string" },
        "ladder_enabled": { "type": "boolean" },
        "non_ladder_enabled": { "type": "boolean" },
        "max_herald_tokens": { "type": "integer", "default": 0 },
        "max_herald_tiers": { "type": "integer", "default": 0 },
        "always_unique_mod_pool": {
          "type": "array",
          "maxItems": 6,
          "items": { "$ref": "#/definitions/AlwaysUniqueMod" }
        },
        "defaults": { "$ref": "#/definitions/DesecratedDifficultyConfig" }
      }
    },
    "DesecratedDifficultyConfig": {
      "type": "object",
      "description": "Core difficulty parameters. Uses copy-on-write inheritance for zone/level overrides.",
      "properties": {
        "type": { "type": "string", "const": "DesecratedDifficultyConfig" },
        "name": { "type": "string" },
        "bound_incl_min": { "type": "integer", "description": "Static default: 1" },
        "bound_incl_max": { "type": "integer", "description": "Static default: 1" },
        "boost_level": { "type": "integer", "description": "Static default: 0" },
        "difficulty_scale": { "type": "integer", "description": "Static default: 1" },
        "boost_experience_percent": { "type": "integer" },
        "chance_to_gain_herald_token": { "type": "number", "description": "Stored as float32" },
        "chance_for_token_to_convert_to_herald": { "type": "number", "description": "Stored as float32" },
        "unique_mod_chance_boosts": {
          "type": "array",
          "maxItems": 3,
          "items": { "$ref": "#/definitions/DifficultyUniqueModChanceBoost" }
        },
        "herald_tiers": {
          "type": "array",
          "maxItems": 8,
          "items": { "$ref": "#/definitions/DesecratedHeraldTier" }
        }
      }
    },
    "DifficultyUniqueModChanceBoost": {
      "type": "object",
      "description": "At difficulty level: no behavior field",
      "properties": {
        "type": { "type": "string", "const": "UniqueModChanceBoost" },
        "name": { "type": "string" },
        "unique_mod": { "type": "integer" },
        "boost": { "type": "integer" }
      },
      "required": ["unique_mod", "boost"]
    },
    "AlwaysUniqueMod": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "AlwaysUniqueMod" },
        "name": { "type": "string" },
        "unique_mod": { "type": "integer" },
        "chance": { "type": "integer" }
      },
      "required": ["unique_mod", "chance"]
    },
    "UniqueModChanceBoost": {
      "type": "object",
      "description": "At herald tier level: has behavior field (clamped 0–2)",
      "properties": {
        "type": { "type": "string", "const": "UniqueModChanceBoost" },
        "name": { "type": "string" },
        "unique_mod": { "type": "integer" },
        "boost": { "type": "integer" },
        "behavior": { "type": "integer", "minimum": 0, "maximum": 2 }
      },
      "required": ["unique_mod", "boost", "behavior"]
    },
    "DesecratedHeraldTier": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedHeraldTier" },
        "name": { "type": "string" },
        "herald_health_boost_percent": { "type": "integer", "default": 0 },
        "herald_damage_boost_percent": { "type": "integer", "default": 0 },
        "herald_treasure_class_level_boost": { "type": "integer", "default": 0 },
        "minion_health_boost_percent": { "type": "integer", "default": 0 },
        "minion_damage_boost_percent": { "type": "integer", "default": 0 },
        "minion_treasure_class_level_boost": { "type": "integer", "default": 0 },
        "minion_behavior": { "type": "integer", "minimum": 0, "maximum": 2, "default": 0 },
        "min_minions": { "type": "integer", "default": 0 },
        "max_minions": { "type": "integer", "default": 0 },
        "minions": {
          "type": "array",
          "maxItems": 3,
          "items": { "$ref": "#/definitions/DesecratedHeraldMinion" }
        },
        "min_unique_mods": { "type": "integer", "default": 0 },
        "max_unique_mods": { "type": "integer", "default": 0 },
        "unique_mod_chance_boosts": {
          "type": "array",
          "maxItems": 3,
          "items": { "$ref": "#/definitions/UniqueModChanceBoost" }
        }
      }
    },
    "DesecratedHeraldMinion": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedHeraldMinion" },
        "name": { "type": "string" },
        "minion_type": { "type": "integer", "minimum": 0, "maximum": 2, "description": "Clamped to 0–2" },
        "always_include": { "type": "boolean", "default": false },
        "monster": { "type": "integer", "default": 0, "description": "Monster ID" },
        "chance": { "type": "integer", "default": 0 },
        "min": { "type": "integer", "default": 0 },
        "max": { "type": "integer", "default": 0 }
      },
      "required": ["minion_type"]
    },
    "DesecratedWarning": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedWarning" },
        "name": { "type": "string" },
        "announce_time_minutes": { "type": "integer" },
        "tier": { "type": "integer" }
      },
      "required": ["announce_time_minutes", "tier"]
    },
    "DesecratedZoneGroup": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedZoneGroup" },
        "name": { "type": "string" },
        "group_id": { "type": "integer", "minimum": 1, "description": "Must be non-zero" },
        "zones": {
          "type": "array",
          "minItems": 1,
          "items": { "$ref": "#/definitions/DesecratedZone" }
        }
      },
      "required": ["group_id", "zones"]
    },
    "DesecratedZone": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedZone" },
        "name": { "type": "string" },
        "id": { "type": "string", "minLength": 1, "description": "FNV-1a hashed. Must be unique." },
        "difficulties": { "$ref": "#/definitions/DesecratedZoneDifficultyOverrides" },
        "levels": {
          "type": "array",
          "maxItems": 15,
          "items": { "$ref": "#/definitions/DesecratedLevel" }
        }
      },
      "required": ["id"]
    },
    "DesecratedZoneDifficultyOverrides": {
      "type": "object",
      "properties": {
        "expansion": { "$ref": "#/definitions/DesecratedDifficultyOverridePerDifficulty" },
        "rotw": { "$ref": "#/definitions/DesecratedDifficultyOverridePerDifficulty" }
      }
    },
    "DesecratedDifficultyOverridePerDifficulty": {
      "type": "object",
      "properties": {
        "normal": { "$ref": "#/definitions/DesecratedDifficultyConfig" },
        "nightmare": { "$ref": "#/definitions/DesecratedDifficultyConfig" },
        "hell": { "$ref": "#/definitions/DesecratedDifficultyConfig" }
      }
    },
    "DesecratedLevel": {
      "type": "object",
      "properties": {
        "type": { "type": "string", "const": "DesecratedLevel" },
        "name": { "type": "string" },
        "level_id": { "type": "integer" },
        "waypoint_level_id": { "type": "integer", "default": 0 },
        "difficulties": { "$ref": "#/definitions/DesecratedZoneDifficultyOverrides" }
      },
      "required": ["level_id"]
    }
  }
}
```

This page was written by [Undeceiver](https://discord.com/users/306228069520375809), with help from killshot777 as mentioned above, and using knowledge from pre-3.0 desecratedzones.json that I learned somewhere else but I unfortunately cannot locate the original source right now.