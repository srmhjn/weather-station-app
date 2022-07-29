export const apiConfig = {
    WEATHER_URL: "http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json"
};

export const httpStatusCode = {
    SUCCESS: 200,
    SERVICE_UNAVAILABLE: 503,
    INTERNAL_SERVER_ERROR: 500
};

export const messages = {
    SERVICE_NOT_AVAILABLE: "Error Connecting to BOM.",
    NO_DATA_FOUND: "Data Not Found",
    UNKNOWN_ERROR: "Unknown Error",
    SUCCESS: "Data Fetched Successfully"
};

export const TEMP_THRESHOLD = 15;
export const WEATHER_APP_PORT = 8000; // should be to move to env