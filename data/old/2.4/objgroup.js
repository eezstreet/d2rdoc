// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["objgroup"] = {
    "title": "objgroup.txt",
    "overview": "This file controls what group of possible Objects to spawn in a part of an area level.<br>This file uses the following files: objects.txt<br>The order of each Object Group defined in this file will convey what ID value it has, which is referenced by the Levels.txt file<br>The order of these Object Groups should not be changed",
    "fields": [
        {
            "name": "GroupName",
            "description": "This is a reference field to define the Object Group name",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "*ID",
            "description": "This field is not read directly, but can be used as an Index for groups",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ID0",
            "description": "Uses the ID field from Objects.txt as an index to choose which Objects are assigned to this Object Group",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Density0",
            "description": "Controls the number of Objects to spawn in the area level. This is also affected by the Object's populate function defined by the PopulateFn field from the objects.txt file. The maximum value allowed is 128",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Prob0",
            "description": "Controls the probability that the Object will spawn in the area level. This is calculated in order so the first probability that is successful will be chosen. This also means that these field values should add up to exactly 100 in total to guarantee that one of the objects spawn.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}