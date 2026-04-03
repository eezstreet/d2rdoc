// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["monsounds"] = {
    "title": "monsounds.txt",
    "overview": "This file controls the sounds that play for each of a monster's actions<br>This file points to a Sound entry from Sounds.txt for all it's entries<br>This file is used by the monstats.txt file",
    "fields": [
        {
            "name": "ID",
            "description": "Defines the unique name ID for the monster sound",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Attack1",
            "description": "Play this sound when the monster performs Attack 1 and Attack 2, respectively.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Weapon1",
            "description": "Play this sound when the monster performs Attack 1 and Attack 2, respectively. This acts as an extra sound that can play with the Attack1 sounds.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Att1Del",
            "description": "Controls the amount of game frames to delay playing the Attack1 sounds, respectively",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Wea1Del",
            "description": "Controls the amount of game frames to delay playing the Weapon1 sounds, respectively",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Att1Prb",
            "description": "Controls the percent chance (out of 100) to play the Attack1 sounds, respectively",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Wea1Vol",
            "description": "Controls the volume of the Weapon1 sounds, respectively. Uses a range between 0 to 255, where 255 is the maximum volume",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HitSound",
            "description": "Play this sound when the monster gets hit or knocked back.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DeathSound",
            "description": "Play this sound when the monster dies.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HitDelay",
            "description": "Controls the amount of game frames to delay playing the HitSound",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "DeaDelay",
            "description": "Controls the amount of game frames to delay playing the DeathSound",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Skill1",
            "description": "Play this sound when the monster uses the skill linked in the related Skill1 field from MonStats.txt.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Footstep",
            "description": "Play this sound while the monster is walking or running.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FootstepLayer",
            "description": "Play this sound while the monster is walking or running. This acts as an extra sound that can play with the Footstep sound.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FsCnt",
            "description": "Controls the footstep count which is used to determine how often to play the Footstep and FootstepLayer sound. A higher value would mean that the sounds would play more often",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FsOff",
            "description": "Controls the footstep offset which is used for calculating when to play the next Footstep and FootstepLayer sound, based on the current animation frame and the animation rate. A higher value would mean that the sounds would play less often",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "FsPrb",
            "description": "Controls the probability to play the Footstep and FootstepLayer sound, with a random chance out of 100",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Neutral",
            "description": "Play this sound while the monster is in Neutral, Walk, or Run mode. Also play this sound when the monster ID equals \"vulture1\" while using Skill1 or the ID equals \"batdemon1\" while using Skill4.",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NeuTime",
            "description": "Controls the amount of game frames to delay between re-playing the Neutral sound after it finishes",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Init",
            "description": "Play this sound when the monster spawns and is not dead and is not playing its Neutral sound. Sound entry from Sounds.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Taunt",
            "description": "Play this sound when the server requests that the monster should play its Taunt. This is typically used for quest or story related moments. Sound entry from Sounds.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Flee",
            "description": "Play this sound when the monster is told to flee. This depends on when the monster AI is told to play this sound. Sound entry from Sounds.txt",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "CvtMo1",
            "description": "This is used to convert the mode for playing the sound. This field defines the original mode that the monster is using. (MonMode.txt for the list of possible inputs)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "CvtSk1",
            "description": "Defines the skill that the monster is using. If the monster uses a specific skill, then the game can change the monster's mode for sound functionalities to another mode to change how sounds are generally handled. Points to a Skill in the Skills.txt file",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "CvtTgt1",
            "description": "Defines the mode to convert the sound to when the monster is using the relative skill from the CvtSk1 field. This does not actually change the monster's mode; only what mode it sounds like. (MonMode.txt for the list of possible inputs)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}