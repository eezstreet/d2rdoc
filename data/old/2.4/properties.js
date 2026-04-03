// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["properties"] = {
    "title": "Properties.txt",
    "overview": "This file defines how item modifiers work. It takes a stat defined from ItemStatCost.txt and uses a function to handle the stat's \"min\", \"max\" and \"parameter\" values.<br>Used by the following data files: UniqueItems.txt, SetItems.txt, QualityItems.txt, Sets.txt, Runes.txt",
    "fields": [
        {
            "name": "code",
            "description": "Defines the property ID. Used as a reference in other data files",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "func1",
            "description": "Code function used to define the Property. Uses numeric ID values to define what function to use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "stat1",
            "description": "Stat applied by the property. Used by the func1 field as a possible parameter using a Stat entry from ItemStatCost.txt. A stat is comprised of a \"min\" and \"max\" value which it uses to calculate the actual numeric value. Stats also can have a \"parameter\" value, depending on its function",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "set1",
            "description": "Used by the func1 field as a possible parameter. If equals 1, then set the stat value regardless of its current value. If equals 0, then add to the stat value",
            "type": {
                "type": "bool",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "val1",
            "description": "sed by the func1 field as a possible input parameter for additional function calculations",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}