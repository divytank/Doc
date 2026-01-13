// config.js - Your API Configuration
const CONFIG = {
    GOOGLE_CLIENT_ID: "121256470278-hqruts5pc4jqduakbjn5077prfmv5cmr.apps.googleusercontent.com",
    GOOGLE_API_KEY: "", // Leave empty for OAuth
    SCOPES: "https://www.googleapis.com/auth/drive.file",
    DISCOVERY_DOCS: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
    PASSWORD: "C6222180", // Your access password
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'image/jpeg',
        'image/png',
        'image/gif',
        'text/plain'
    ]
};
