// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["soundenviron"] = {
    "title": "SoundEnviron.txt",
    "overview": "This file controls the music and ambient sounds that are played while the player is in the area level<br>The order of each Sound Environment defined in this file will convey what ID value it has<br>This file points to a Sound entry from Sounds.txt for all it's entries<br>This file is used by Levels.txt",
    "fields": [
        {
            "name": "Handle",
            "description": "A reference field to define the name of the Sound Environment",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Index",
            "description": "A reference field to define the ID/Index for the Environment",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Song",
            "description": "Play this sound as the background music while the player is in an area level",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Day Ambience",
            "description": "Play this sound as an ambient sound while it is currently daytime in the game",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HD Day Ambience",
            "description": "Play this sound as an ambient sound while it is currently daytime in the game while playing in the new graphics mode",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Night Ambience",
            "description": "Play this sound as an ambient sound while it is currently nighttime in the game",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HD Night Ambience",
            "description": "Play this sound as an ambient sound while it is currently nighttime in the game while playing in the new graphics mode",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Day Event",
            "description": "Play this sound at a random range and variance in the background when it is currently daytime in the game",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HD Day Event",
            "description": "Play this sound at a random range and variance in the background when it is currently daytime in the game while playing in the new graphics mode",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Night Event",
            "description": "Play this sound at a random range and variance in the background when it is currently nighttime in the game",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HD Night Event",
            "description": "Play this sound at a random range and variance in the background when it is currently nighttime in the game while playing in the new graphics mode",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Event Delay",
            "description": "Controls the baseline number of frames to wait before playing the Day Event or Night Event sound, depending on the time of day. This only applies when the game is being played in SD mode. This value is used in the following calculation to get a random time to play the next event sound: [Event Delay] - [Event Delay] / 3 + RANDOM(0, ([Event Delay] / 3 * 2 + 1))",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HD Event Delay",
            "description": "Controls the baseline number of frames to wait before playing the Day Event or Night Event sound, depending on the time of day. This only applies when the game is being played in the new graphics mode. This value is used in the following calculation to get a random time to play the next event sound: [Event Delay] - [Event Delay] / 3 + RANDOM(0, ([Event Delay] / 3 * 2 + 1))",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Indoors",
            "description": "If equals 1 then, if the current sound being played in the area level with this Sound Environment is \"event_thunder_1\", then the sound will be obstructed. If equals 0, then ignore this",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Material 1",
            "description": "Controls the material of the Sound Environment, which affects which footstep sounds are played. Uses a code to define a specific material.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HD Material 1",
            "description": "Controls the material of the Sound Environment, which affects which footstep sounds are played. Uses a code to define a specific material. This only applies when the game is being played in the new graphics mode. See Material 1 for the code descriptions.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SFX EAX Environ",
            "description": "Determines an environment preset for default sound reverberation settings.",
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
                    "Generic"
                ],
                [
                    "1",
                    "Padded Cell"
                ],
                [
                    "2",
                    "Room"
                ],
                [
                    "3",
                    "Bathroom"
                ],
                [
                    "4",
                    "Livingroom"
                ],
                [
                    "5",
                    "Stone Room"
                ],
                [
                    "6",
                    "Auditorium"
                ],
                [
                    "7",
                    "Concert Hall"
                ],
                [
                    "8",
                    "Cave"
                ],
                [
                    "9",
                    "Arena"
                ],
                [
                    "10",
                    "Hanger"
                ],
                [
                    "11",
                    "Carpeted Hallway"
                ],
                [
                    "12",
                    "Hallway"
                ],
                [
                    "13",
                    "Stone Corridor"
                ],
                [
                    "14",
                    "Alley"
                ],
                [
                    "15",
                    "Forest"
                ],
                [
                    "16",
                    "City"
                ],
                [
                    "17",
                    "Mountains"
                ],
                [
                    "18",
                    "Quarry"
                ],
                [
                    "19",
                    "Plain"
                ],
                [
                    "20",
                    "Parking Lot"
                ],
                [
                    "21",
                    "Sewer Pipe"
                ],
                [
                    "22",
                    "Underwater"
                ],
                [
                    "23",
                    "Drugged"
                ],
                [
                    "24",
                    "Dizzy"
                ],
                [
                    "25",
                    "Psychotic"
                ],
                [
                    "26",
                    "Programmer Test (A long distant echo)"
                ]
            ]
        },
        {
            "name": "SFX EAX Room Vol",
            "description": "Room effect level at mid frequencies",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SFX EAX Room HF",
            "description": "Relative room effect level at high frequencies",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SFX EAX Decay Time",
            "description": "Reverberation decay time at mid frequencies",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SFX EAX Decay HF",
            "description": "High-frequency to mid-frequency decay time ratio",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SFX EAX Reflect",
            "description": "Early reflections level relative to room effect",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SFX EAX Reflect Delay",
            "description": "Initial reflection delay time",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SFX EAX Reverb",
            "description": "Late reverberation level relative to room effect",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SFX EAX Rev Delay",
            "description": "Late reverberation delay time relative to initial reflection.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VOX EAX Environ",
            "description": "Determines an environment preset for default sound reverberation settings.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VOX EAX Room Vol",
            "description": "Room effect level at mid frequencies",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VOX EAX Room HF",
            "description": "Relative room effect level at high frequencies",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VOX EAX Decay Time",
            "description": "Reverberation decay time at mid frequencies",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VOX EAX Decay HF",
            "description": "High-frequency to mid-frequency decay time ratio",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VOX EAX Reflect",
            "description": "Early reflections level relative to room effect",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VOX EAX Reflect Delay",
            "description": "Initial reflection delay time",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VOX EAX Reverb",
            "description": "Late reverberation level relative to room effect",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "VOX EAX Rev Delay",
            "description": "Late reverberation delay time relative to initial reflection",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "InheritEnvironment",
            "description": "If equals 1, then this sound environment will inherit certain values from the existing environment and overwrite other values with its own.",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}