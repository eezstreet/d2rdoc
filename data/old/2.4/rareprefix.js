// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["rareprefix"] = {
    "title": "RarePrefix.txt",
    "overview": "This file controls the list of strings that are randomly selected to be used as the prefix part of the name when generating Rare items<br>Rare Prefixes are chosen at random from the list define in the data file<br>These item affixes will appear at the start of a Rare item's name",
    "fields": [
        {
            "name": "name",
            "description": "Uses a string key to define the Rare Prefix name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "version",
            "description": "Defines which game version to use this Set bonus (0 = Classic mode | 100 = Expansion mode)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "itype1",
            "description": "Controls what item types are allowed for this Rare Prefix to spawn on (Uses the Code field from ItemTypes.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "etype1",
            "description": "Controls what item types are excluded for this Rare Prefix to spawn on (Uses the Code field from ItemTypes.txt)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}