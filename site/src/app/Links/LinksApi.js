// Links API utils.

// Base API settings.

// Or later - 
// process.env.REACT_APP_API_ENDPOINT;
const API_ENDPOINT = "https://api.sssr.dev/cc"; 
const API_HTTP_METHOD = "GET";
const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
}

// Public.
function apiRequest(params="", onSuccess=undefined, onError=undefined){
    /// @description Makes request to API.
    const onErrorHandler = function(raw, result){
        /// @description Error response handler.
        if (onError) onError(raw, result);
        console.log(`[Links API] Failed to fetch API with params "${params}" via apiRequest because of error: `);
        console.error(raw);
        console.error(result);
    }

    const onSuccessHandler = function(raw, result){
        /// @description Success response handler.
        if (onSuccess) onSuccess(raw, result);
        console.log(`[Links API] Successfully fetched API with params "${params}" via apiRequest!`);
    }

    // Requesting API.
    console.log(`[Links API] Fetching API with params "${params}" via apiRequest...`);
    apiRequestWrapper(params, onSuccessHandler, onErrorHandler);
}

export {
    apiRequest
};

// Private.

function apiFetch(apiParams=""){
    /// @description Returns fetch for API.
    return fetch(API_ENDPOINT + "?" + apiParams, {
        method: API_HTTP_METHOD,
        headers: DEFAULT_HEADERS
    })
}

function apiRequestWrapper(apiParams, successHandler, errorHandler){
    /// @description Makes API request with given handlers.
    apiFetch(apiParams).then(raw_response => {
        // We got 200 OK.
        raw_response.json().then(((response) => {
            // We got valid JSON.
            if ("object" in response) return successHandler(raw_response, response);
            return errorHandler(raw_response, response);
        })).catch((error) => errorHandler(raw_response, error))
    }).catch(errorHandler);
}