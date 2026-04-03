// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["inventory"] = {
    "title": "inventory.txt",
    "overview": "This file controls the grid sizes of the inventory slots for the game's various UI windows.<br>These values are measured in pixels on the screen.",
    "fields": [
        {
            "name": "class",
            "description": "This is a reference field to define the type of inventory screen",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invLeft",
            "description": "Starting X coordinate pixel position of the inventory panel",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invRight",
            "description": "Ending X coordinate pixel position of the inventory panel (Includes the \"invLeft\" value with the inventory width size)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invTop",
            "description": "Starting Y coordinate pixel position of the inventory panel",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "invBottom",
            "description": "Ending Y coordinate pixel position of the inventory panel (Includes the \"invTop\" value with the inventory height size)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridX",
            "description": "Column number size of the inventory grid, measured in the number of grid boxes to use",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridY",
            "description": "Column row size of the inventory grid, measured in the number of grid boxes to use",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridLeft",
            "description": "Starting X coordinate location of the inventory's left grid side",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridRight",
            "description": "Ending X coordinate location of the inventory's right grid side (Includes the \"gridLeft\" value with the grid width size)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridTop",
            "description": "Starting Y coordinate location of the inventory's top grid side",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridBottom",
            "description": "Ending Y coordinate location of the inventory's bottom grid side (Includes the \"gridTop\" value with the grid height size)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridBoxWidth",
            "description": "Width size of an inventory's box cell",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "gridBoxHeight",
            "description": "Height size of an inventory's box cell",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rArmLeft",
            "description": "Starting X coordinate location of the Right Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rArmRight",
            "description": "Ending X coordinate location of the Right Weapon Slot (Includes the \"rArmLeft\" value with the \"rArmWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rArmTop",
            "description": "Starting Y coordinate location of the Right Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rArmBottom",
            "description": "Ending Y coordinate location of the Right Weapon Slot (Includes the \"rArmTop\" value with the \"rArmHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rArmWidth",
            "description": "The pixel width of the Right Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rArmHeight",
            "description": "The pixel Height of the Right Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "torsoLeft",
            "description": "Starting X coordinate location of the Body Armor Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "torsoRight",
            "description": "Ending X coordinate location of the Body Armor Slot (Includes the \"torsoLeft\" value with the \"torsoWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "torsoTop",
            "description": "Starting Y coordinate location of the Body Armor Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "torsoBottom",
            "description": "Ending Y coordinate location of the Body Armor Slot (Includes the \"torsoTop\" value with the \"torsoHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "torsoWidth",
            "description": "The pixel width of the Body Armor Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "torsoHeight",
            "description": "The pixel Height of the Body Armor Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lArmLeft",
            "description": "Starting X coordinate location of the Left Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lArmRight",
            "description": "Ending X coordinate location of the Left Weapon Slot (Includes the \"lArmLeft\" value with the \"lArmWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lArmTop",
            "description": "Starting Y coordinate location of the Left Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lArmBottom",
            "description": "Ending Y coordinate location of the Left Weapon Slot (Includes the \"lArmTop\" value with the \"lArmHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lArmWidth",
            "description": "The pixel width of the Left Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lArmHeight",
            "description": "The pixel Height of the Left Weapon Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "headLeft",
            "description": "Starting X coordinate location of the Helm Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "headRight",
            "description": "Ending X coordinate location of the Helm Slot (Includes the \"headLeft\" value with the \"headWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "headTop",
            "description": "Starting Y coordinate location of the Helm Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "headBottom",
            "description": "Ending Y coordinate location of the Helm Slot (Includes the \"headTop\" value with the \"headHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "headWidth",
            "description": "The pixel width of the Helm Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "headHeight",
            "description": "The pixel Height of the Helm Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "neckLeft",
            "description": "Starting X coordinate location of the Amulet Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "neckRight",
            "description": "Ending X coordinate location of the Amulet Slot (Includes the \"neckLeft\" value with the \"neckWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "neckTop",
            "description": "Starting Y coordinate location of the Amulet Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "neckBottom",
            "description": "Ending Y coordinate location of the Amulet Slot (Includes the \"neckTop\" value with the \"neckHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "neckWidth",
            "description": "The pixel width of the Amulet Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "neckHeight",
            "description": "The pixel Height of the Amulet Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rHandLeft",
            "description": "Starting X coordinate location of the Right Ring Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rHandLeft",
            "description": "Ending X coordinate location of the Right Ring Slot (Includes the \"rHandLeft\" value with the \"rHandWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rHandTop",
            "description": "Starting Y coordinate location of the Right Ring Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rHandBottom",
            "description": "Ending Y coordinate location of the Right Ring Slot (Includes the \"rHandTop\" value with the \"rHandHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rHandWidth",
            "description": "The pixel width of the Right Ring Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rHandHeight",
            "description": "The pixel Height of the Right Ring Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lHandLeft",
            "description": "Starting X coordinate location of the Left Ring Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lHandRight",
            "description": "Ending X coordinate location of the Left Ring Slot (Includes the \"lHandLeft\" value with the \"lHandWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lHandTop",
            "description": "Starting Y coordinate location of the Left Ring Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lHandBottom",
            "description": "Ending Y coordinate location of the Left Ring Slot (Includes the \"lHandTop\" value with the \"lHandHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lHandWidth",
            "description": "The pixel width of the Left Ring Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lHandHeight",
            "description": "The pixel Height of the Left Ring Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "beltLeft",
            "description": "Starting X coordinate location of the Belt Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "beltRight",
            "description": "Ending X coordinate location of the Belt Slot (Includes the \"beltLeft\" value with the \"beltWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "beltTop",
            "description": "Starting Y coordinate location of the Belt Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "beltBottom",
            "description": "Ending Y coordinate location of the Belt Slot (Includes the \"beltTop\" value with the \"beltHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "beltWidth",
            "description": "The pixel width of the Belt Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "beltHeight",
            "description": "The pixel Height of the Belt Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "feetLeft",
            "description": "Starting X coordinate location of the Boots Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "feetRight",
            "description": "Ending X coordinate location of the Boots Slot (Includes the \"feetLeft\" value with the \"feetWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "feetTop",
            "description": "Starting Y coordinate location of the Boots Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "feetBottom",
            "description": "Ending Y coordinate location of the Boots Slot (Includes the \"feetTop\" value with the \"feetHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "feetWidth",
            "description": "The pixel width of the Boots Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "feetHeight",
            "description": "The pixel Height of the Boots Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "glovesLeft",
            "description": "Starting X coordinate location of the Gloves Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "glovesRight",
            "description": "Ending X coordinate location of the Gloves Slot (Includes the \"glovesLeft\" value with the \"glovesWidth\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "glovesTop",
            "description": "Starting Y coordinate location of the Gloves Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "glovesBottom",
            "description": "Ending Y coordinate location of the Gloves Slot (Includes the \"glovesTop\" value with the \"glovesHeight\" value)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "glovesWidth",
            "description": "The pixel width of the Gloves Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "glovesHeight",
            "description": "The pixel Height of the Gloves Slot",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}