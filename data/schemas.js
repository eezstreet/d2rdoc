// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
const schemas = [
    { "name": "Latest (3.1)", "directory": "data/files", "isDefault": true },
    { "name": "2.4", "directory": "data/old/2.4" }
];
