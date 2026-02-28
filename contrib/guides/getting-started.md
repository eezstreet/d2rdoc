## Overview

Diablo II: Resurrected currently (as of this writing - 3.1.1) supports modifications to the following:

 * Art Assets (images, models, some other assets)
 * Data (including: skills, level linkage, missiles, stats, items, runewords, cube recipes, etc.)
 * UI Layouts (primarily through `.json` files)

There is limited or no support for the following:

 * Particle Effects (all particle effects are a proprietary format that we don't have an editor for)
 * Level Editing (levels can be manually edited but no good tools exist)
 * Animation Editing
 * Code Editing (Legacy Diablo II, prior to Resurrected, has extensive support for this by third party editors)

Mods can exist either as a plugin for a mod manager tool such as [D2RMM](https://www.nexusmods.com/diablo2resurrected/mods/169) or distributed as a total conversion mod that changes everything in the game in one swoop. The community has historically done the latter.

## Downloading and installing mods (as a player)

[Nexus Mods](https://www.nexusmods.com/diablo2resurrected) has, by far and away, the largest body of mods out there. Each mod has specific installation instructions associated with it.

The remainder of this guide discusses how mods are made.

## Making a Mod

In all of the following directions, we are going to assume that your mod is called `MyMod`. Feel free to change as needed.

You will first need to create a `mods` folder inside your main game directory. This main game directory is typically in one of the following places:

 * **Battle.net:** `C:/Program Files/Battle.net/Diablo II Resurrected`
 * **Steam:** `C:/Program Files (x86)/Steam/steamapps/common/Diablo II Resurrected`

The main game directory will typically include a `data` directory.

Inside of your `mods` folder, you will want to create a `MyMod` folder. Inside of *that* folder, you should create a `MyMod.mpq` folder to house all of your mod's content.

Inside of your `MyMod.mpq`, you will need to create a `modinfo.json` with the following contents:

```json
{
  "name": "MyMod",
  "savepath": "MyMod"
}
```

### Editing Your Mod

Let's walk you through a very simple, easily tested edit to get your feet wet. We're going to increase the maximum quantity of Keys from `12` to `25`. This is a good test because it is very easy to see the results; Akara in the Rogue Encampment sells keys, and in *Resurrected*, the item tooltip lists the maximum quantity of a stack.

You'll need a tool to extract the relevant portions of data that we're looking for. There are three commonly used ones out there:

| Tool | Supported Game Versions | Notes  |
|------|-------------------------|--------|
| [CascView](http://www.zezula.net/en/casc/main.html) | Battle.net (full), Steam (partial) | Many CASC tools are based on the library beneath this tool. As of this writing though, it is unable to open Steam installations of the game offline - you will need to load an online CASC. |
| [cascextract](https://github.com/eezstreet/cascextract) | Battle.net, Steam | Text/list based view, with fuzzy-find search. |
| [D2RCasc](https://github.com/locbones/D2RCasc) | Battle.net, Steam | File-based browser for Casc archives |

After you have opened the game's CASC storage (the `data` directory inside the main game directory - see above), you will want to extract `data/global/excel` into your `MyMod.mpq`. Feel free to extract the entire directory - much of the game's data is held here and chances are you'll be touching all of it as you make your mod.

> You may also want to extract `data/local/lng/strings` - these `.json` files hold a lot of the ingame text that is useful for item names, monster names, skill descriptions, etc. However, this tutorial doesn't require it.

All of the games' main data is in tab-delimited `.txt` files, with some exceptions. There are a good number of tools online that can assist with these:

| Tool | Notes |
|------|-------|
| [AFJ Sheet Editor](http://www.mediafire.com/file/8qut7nq67ykekvm/AFJ_Sheet_Edit_0.61b.zip/file) | Classic sheet editor; barebones, community standby.
| [D2Horadrim](https://github.com/locbones/D2Horadrim) | Feature-rich editor with workspace support |
| [D2ExcelPlus](https://github.com/Cjreek/D2ExcelPlus/) | Older but still probably good |
| Microsoft Excel | Excel has caveats and may save files incorrectly. Use caution.

To make keys go from 12 to 25 in quantity, you need to look in `misc.txt` inside `MyMod.mpq/data/global/excel`. This includes all of the "miscellaneous" items (i.e, not armor or weapons). Find the `Key` row and increase its `maxstack` value from `12` to `25`. That should be all!

### Launching Your Mod

In order to launch your newly-created mod, you will need to add `-mod MyMod -txt` commandline arguments to launch your game. This can vary depending on what version of the game you have installed - you can use the Battle.net launcher and add launch arguments, or do so via Steam.

In *both* versions of the game, you can create a shortcut to `D2R.exe` with `Target Path` including them at the end.

## Quick Tips & Other Resources

If you get confused about what a column does, this guide lists every single column in the game. This documentation is in fact derived from Blizzard's original files. Additionally, there are several "community notes" that you'll find sprinkled throughout here that list additional caveats.

Check out the [Phrozen Keep Official Discord](https://discord.gg/NvfftHY) - it has modders and players alike!

There is also a presence on Reddit, in the [/r/D2RMODS](https://www.reddit.com/r/D2RMODS/) subreddit.
