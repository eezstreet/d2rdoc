// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["hirelingdesc"] = {
    "title": "hirelingdesc.txt",
    "overview": "This file was removed in version 3.1. Its fields were merged into hireling.txt. Switch to version 2.4 to view the original documentation.",
    "fields": []
}