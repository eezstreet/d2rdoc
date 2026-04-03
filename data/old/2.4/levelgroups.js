// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["levelgroups"] = {
    "title": "LevelGroups.txt",
    "overview": "This file controls how the game groups levels together. This has currently no gameplay purpose and is mainly used for condensing level names in desecrated (terror) zone messaging.",
    "fields": [
        {
            "name": "Name",
            "description": "Defines the unique name pointer for the level group, which is used in other files",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ID",
            "description": "Defines the unique numeric ID for the level group, which is used in other files",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "GroupName",
            "description": "String Field. Used for displaying the name of the level group, such as when all levels in a group have been desecrated (Terrorized)",
            "type": {
                "type": "string",
                "dataLength": 0,
                "memSize": 0
            }
        }
    ]
}