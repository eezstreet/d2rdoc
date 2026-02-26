// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["ItemUICategories"] = {
    "title": "ItemUICategories.txt",
    "overview": "",
    "fields": [
        {
            "name": "Name",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "isEquipment",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ParentCategory",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 8,
                "file": "",
                "field": ""
            }
        },
        {
            "name": "QualityFilter",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NumColumns",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        }
    ]
}