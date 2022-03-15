// Links API utils.

// Base API settings.

// Or later - 
// process.env.REACT_APP_API_ENDPOINT;
const API_ENDPOINT = "https://api.sssr.dev/cc"; 
const API_HTTP_METHOD = "GET";
const DEFAULT_HEADERS = {
    "Content-Type": "application/x-www-form-urlencoded",
}

// Public.
function apiRequest(httpMethod = API_HTTP_METHOD,
                    getParams = "",
                    postParams = undefined,
                    onSuccess  = undefined,
                    onError = undefined){

    /// @description Makes request to API with handling API version.
    getParams = new URLSearchParams(getParams);
    getParams.set("v", "1.1");
    getParams = getParams.toString()

    postParams = new URLSearchParams(postParams);
    postParams = postParams.toString()

    return apiRequestWrapper(
        httpMethod, 
        getParams, postParams, 
        onSuccess, onError)
}

export {
    apiRequest
};

// Private.

function apiFetch(httpMethod, getParams, postBody, successHandler, errorHandler){
    /// @description Makes API request with given handlers.
    fetch(API_ENDPOINT + "?" + getParams, {
        method: httpMethod,
        headers: DEFAULT_HEADERS,
        body: postBody,
    }).then(raw_response => {
        // We got 200 OK.
        raw_response.json().then(((response) => {
            // We got valid JSON.
            if ("object" in response) return successHandler(raw_response, response);
            return errorHandler(raw_response, response);
        })).catch((error) => errorHandler(raw_response, error))
    }).catch(errorHandler);
}


function apiRequestWrapper(httpMethod = API_HTTP_METHOD,
                           getParams = "",
                           httpBody = undefined,
                           onSuccess = undefined,
                           onError = undefined){
    /// @description Makes request to API.
    const onErrorHandler = function(raw, result){
        /// @description Error response handler.
        if (onError) onError(raw, result);
        console.log(`[Links API] Failed to fetch API with params "${getParams}" via apiRequest because of error: `);
        console.error(result.error.message);
        console.error(raw);
    }

    const onSuccessHandler = function(raw, result){
        /// @description Success response handler.
        if (onSuccess) onSuccess(raw, result);
        console.log(`[Links API] Successfully fetched API with params "${getParams}" via apiRequest!`);
        console.error(raw);
    }

    // Requesting API.
    console.log(`[Links API] Fetching API with params "${getParams}" via apiRequest...`);
    apiFetch(httpMethod, getParams, httpBody, onSuccessHandler, onErrorHandler);
}