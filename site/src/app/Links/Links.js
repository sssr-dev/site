import React, {useState} from "react";
import './Links.css';

const API_ENDPOINT = "https://api.sssr.dev/cc"; // Or later - process.env.REACT_APP_API_ENDPOINT;
const API_HTTP_METHOD = "GET";
const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
}


class Links extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputLink: "", 
            error: "",
            link: undefined
        };

        this.onShortenLink = this.onShortenLink.bind(this);
        this.onInputLinkChange = this.onInputLinkChange.bind(this);
    }    

    onShortenLink(){
        let params = new URLSearchParams();
        params.set("create", this.state.inputLink);
        apiRequest(params.toString(), (raw, result) => {
            this.setState({
                error: "",
                link: result.object,
            })
        }, (raw, error) => {
            let message = "Unexpected error!";

            if ("error" in error){
                message = error.error.error
            }else{
                message = raw.statusText;
            }

            this.setState({
                error: message,
                link: undefined
            })
        });
    }

    onInputLinkChange(event){
        this.setState({
            inputLink: event.target.value, 
        })
    }

    componentDidMount(){
        console.log("[Links]    file: src/app/Links/Links.js");
        console.log("[Links]    props:", this.props);

        document.title = "[СССР] Link shortening";
    }


    render(){
        return(
            <div className={"center-text"}>
                <h1>Links generator</h1>
                <br/>

                <input value={this.state.inputLink} onChange={this.onInputLinkChange}></input>
                &nbsp;
                <button onClick={this.onShortenLink}>Shorten!</button>

                <br/><br/>

                <div className="links-messages">
                    {this.state.error && <span className="links-error">
                        {this.state.error}
                    </span>}
                    {this.state.link && <span className="links-success">
                        Your link: <a href={this.state.link.short}>{this.state.link.short}</a><br/>
                        (Refers to link: <a href={this.state.link.url}>{this.state.link.url}</a>)
                    </span>}
                </div>
            </div>
        )
    }
}

export default Links;

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

function apiRequest(params="", onSuccess=undefined, onError=undefined){
    /// @description Makes request to API.
    const onErrorHandler = function(raw, result){
        /// @description Error response handler.
        if (onError) onError(raw, result);
        console.log(`Failed to fetch API with params "${params}" via apiRequest because of error: `);
        console.error(raw);
        console.error(result);
    }

    const onSuccessHandler = function(raw, result){
        /// @description Success response handler.
        if (onSuccess) onSuccess(raw, result);
        console.log(`Successfully fetched API with params "${params}" via apiRequest!`);
    }

    // Requesting API.
    console.log(`Fetching API with params "${params}" via apiRequest...`);
    apiRequestWrapper(params, onSuccessHandler, onErrorHandler);
}
