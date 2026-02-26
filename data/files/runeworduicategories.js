// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["RunewordUICategories"] = {
    "title": "RunewordUICategories.txt",
    "overview": "",
    "fields": [
        {
            "name": "Name",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        }
    ]
}