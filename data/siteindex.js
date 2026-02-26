// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
const siteIndex = [
    {
        "name": "Home",
        "path": "/index.html"
    },
    {
        "name": "Files",
        "children": [
            {
                "name": "actinfo.txt",
                "path": "/files/actinfo.html"
            },
            {
                "name": "armor.txt",
                "path": "/files/armor.html"
            },
            {
                "name": "automagic.txt",
                "path": "/files/automagic.html"
            },
            {
                "name": "AutoMap.txt",
                "path": "/files/automap.html"
            },
            {
                "name": "belts.txt",
                "path": "/files/belts.html"
            },
            {
                "name": "books.txt",
                "path": "/files/books.html"
            },
            {
                "name": "charstats.txt",
                "path": "/files/charstats.html"
            },
            {
                "name": "cubemain.txt",
                "path": "/files/cubemain.html"
            },
            {
                "name": "difficultylevels.txt",
                "path": "/files/difficultylevels.html"
            },
            {
                "name": "experience.txt",
                "path": "/files/experience.html"
            },
            {
                "name": "gamble.txt",
                "path": "/files/gamble.html"
            },
            {
                "name": "gems.txt",
                "path": "/files/gems.html"
            },
            {
                "name": "hireling.txt",
                "path": "/files/hireling.html"
            },
            {
                "name": "inventory.txt",
                "path": "/files/inventory.html"
            },
            {
                "name": "itemratio.txt",
                "path": "/files/itemratio.html"
            },
            {
                "name": "ItemStatCost.txt",
                "path": "/files/itemstatcost.html"
            },
            {
                "name": "ItemTypes.txt",
                "path": "/files/itemtypes.html"
            },
            {
                "name": "ItemUICategories.txt",
                "path": "/files/itemuicategories.html"
            },
            {
                "name": "LevelGroups.txt",
                "path": "/files/levelgroups.html"
            },
            {
                "name": "Levels.txt",
                "path": "/files/levels.html"
            },
            {
                "name": "LvlMaze.txt",
                "path": "/files/lvlmaze.html"
            },
            {
                "name": "LvlPrest.txt",
                "path": "/files/lvlprest.html"
            },
            {
                "name": "LvlSub.txt",
                "path": "/files/lvlsub.html"
            },
            {
                "name": "LvlTypes.txt",
                "path": "/files/lvltypes.html"
            },
            {
                "name": "LvlWarp.txt",
                "path": "/files/lvlwarp.html"
            },
            {
                "name": "MagicPrefix.txt",
                "path": "/files/magicprefix.html"
            },
            {
                "name": "MagicSuffix.txt",
                "path": "/files/magicsuffix.html"
            },
            {
                "name": "misc.txt",
                "path": "/files/misc.html"
            },
            {
                "name": "Missiles.txt",
                "path": "/files/missiles.html"
            },
            {
                "name": "monequip.txt",
                "path": "/files/monequip.html"
            },
            {
                "name": "MonLvl.txt",
                "path": "/files/monlvl.html"
            },
            {
                "name": "MonPet.txt",
                "path": "/files/monpet.html"
            },
            {
                "name": "MonPreset.txt",
                "path": "/files/monpreset.html"
            },
            {
                "name": "MonProp.txt",
                "path": "/files/monprop.html"
            },
            {
                "name": "monseq.txt",
                "path": "/files/monseq.html"
            },
            {
                "name": "monsounds.txt",
                "path": "/files/monsounds.html"
            },
            {
                "name": "monstats.txt",
                "path": "/files/monstats.html"
            },
            {
                "name": "monstats2.txt",
                "path": "/files/monstats2.html"
            },
            {
                "name": "MonType.txt",
                "path": "/files/MonType.html"
            },
            {
                "name": "monumod.txt",
                "path": "/files/monumod.html"
            },
            {
                "name": "npc.txt",
                "path": "/files/npc.html"
            },
            {
                "name": "objects.txt",
                "path": "/files/objects.html"
            },
            {
                "name": "objgroup.txt",
                "path": "/files/objgroup.html"
            },
            {
                "name": "objpreset.txt",
                "path": "/files/objpreset.html"
            },
            {
                "name": "Overlay.txt",
                "path": "/files/overlay.html"
            },
            {
                "name": "pettype.txt",
                "path": "/files/pettype.html"
            },
            {
                "name": "Properties.txt",
                "path": "/files/properties.html"
            },
            {
                "name": "PropertyGroups.txt",
                "path": "/files/propertygroups.html"
            },
            {
                "name": "qualityitems.txt",
                "path": "/files/qualityitems.html"
            },
            {
                "name": "RarePrefix.txt",
                "path": "/files/rareprefix.html"
            },
            {
                "name": "RareSuffix.txt",
                "path": "/files/raresuffix.html"
            },
            {
                "name": "Runes.txt",
                "path": "/files/runes.html"
            },
            {
                "name": "RunewordUICategories.txt",
                "path": "/files/runeworduicategories.html"
            },
            {
                "name": "SetItems.txt",
                "path": "/files/setitems.html"
            },
            {
                "name": "Sets.txt",
                "path": "/files/sets.html"
            },
            {
                "name": "shrines.txt",
                "path": "/files/shrines.html"
            },
            {
                "name": "skilldesc.txt",
                "path": "/files/skilldesc.html"
            },
            {
                "name": "skills.txt",
                "path": "/files/skills.html"
            },
            {
                "name": "SoundEnviron.txt",
                "path": "/files/soundenviron.html"
            },
            {
                "name": "sounds.txt",
                "path": "/files/sounds.html"
            },
            {
                "name": "states.txt",
                "path": "/files/states.html"
            },
            {
                "name": "SuperUniques.txt",
                "path": "/files/superuniques.html"
            },
            {
                "name": "TreasureClassEx.txt",
                "path": "/files/treasureclassex.html"
            },
            {
                "name": "UniqueAppellation.txt",
                "path": "/files/uniqueappellation.html"
            },
            {
                "name": "UniqueItems.txt",
                "path": "/files/uniqueitems.html"
            },
            {
                "name": "UniquePrefix.txt",
                "path": "/files/uniqueprefix.html"
            },
            {
                "name": "UniqueSuffix.txt",
                "path": "/files/uniquesuffix.html"
            },
            {
                "name": "wanderingmon.txt",
                "path": "/files/wanderingmon.html"
            },
            {
                "name": "weapons.txt",
                "path": "/files/weapons.html"
            },
            {
                "name": "Reference Files",
                "children": [
                    {
                        "name": "ArmType.txt",
                        "path": "/files/armtype.html"
                    },
                    {
                        "name": "bodylocs.txt",
                        "path": "/files/bodylocs.html"
                    },
                    {
                        "name": "colors.txt",
                        "path": "/files/colors.html"
                    },
                    {
                        "name": "compcode.txt",
                        "path": "/files/compcode.html"
                    },
                    {
                        "name": "Composit.txt",
                        "path": "/files/composit.html"
                    },
                    {
                        "name": "cubemod.txt",
                        "path": "/files/cubemod.html"
                    },
                    {
                        "name": "ElemTypes.txt",
                        "path": "/files/elemtypes.html"
                    },
                    {
                        "name": "events.txt",
                        "path": "/files/events.html"
                    },
                    {
                        "name": "HitClass.txt",
                        "path": "/files/hitclass.html"
                    },
                    {
                        "name": "lowqualityitems.txt",
                        "path": "/files/lowqualityitems.html"
                    },
                    {
                        "name": "misscalc.txt",
                        "path": "/files/misscalc.html"
                    },
                    {
                        "name": "monai.txt",
                        "path": "/files/monai.html"
                    },
                    {
                        "name": "MonMode.txt",
                        "path": "/files/monmode.html"
                    },
                    {
                        "name": "MonPlace.txt",
                        "path": "/files/monplace.html"
                    },
                    {
                        "name": "ObjMode.txt",
                        "path": "/files/objmode.html"
                    },
                    {
                        "name": "PlayerClass.txt",
                        "path": "/files/playerclass.html"
                    },
                    {
                        "name": "PlrMode.txt",
                        "path": "/files/plrmode.html"
                    },
                    {
                        "name": "PlrType.txt",
                        "path": "/files/plrtype.html"
                    },
                    {
                        "name": "skillcalc.txt",
                        "path": "/files/skillcalc.html"
                    },
                    {
                        "name": "StorePage.txt",
                        "path": "/files/storepage.html"
                    }
                ]
            },
            {
                "name": "Resources",
                "children": [
                    {
                        "name": "enums",
                        "path": "/files/enums.html"
                    }
                ]
            }
        ]
    },
    {
        "name": "Guides",
        "children": [
            {
                "name": "Getting Started",
                "path": "/guides/getting-started.html"
            }
        ]
    },
    {
        "name": "Appendix",
        "children": [
            {
                "name": "Generic Pet AI",
                "path": "/docs/genericpetai.html"
            },
            {
                "name": "BBE/Calc Fields",
                "path": "/docs/bbe-calc.html"
            },
            {
                "name": "Item Ratio Calculations",
                "path": "/docs/itemratio-calc.html"
            }
        ]
    }
]