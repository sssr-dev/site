import React from "react";

import {apiRequest} from "./LinksApi"

import './Links.css';


class LinksInputForm extends React.Component{
    /// @description Form input for links (Button and input).
    constructor(props) {
        super(props);

        this.state = {
            input: "", // User link.
        };

        this.onLinkInputChange = this.onLinkInputChange.bind(this);
        this.onLinkShorten = this.onLinkShorten.bind(this);
    }

    onLinkInputChange(e){
        /// @description Updating input when user changes input.
        this.setState({
            input: e.target.value
        })
    }

    onLinkShorten(){
        /// @description Processing to onShortenLink event with current input.
        this.props.onShortenLink(this.state.input);
    }

    render(){
        return (<>
            <input value={this.state.input} onChange={this.onLinkInputChange}/>
            &nbsp;
            <button onClick={this.onLinkShorten}>Shorten!</button>
        </>)
    }
}

class LinksResultMessage extends React.Component{
    /// @description Handles showing of the result message (success / error).
    render(){
        return (
            <div className="links-messages">
                {this.props.errorMessage && <span className="links-error">
                    {this.props.errorMessage}
                </span>}
                {this.props.linkData && <span className="links-success">
                    Your link: <a href={this.props.linkData.short}>{this.props.linkData.short}</a><br/>
                    (Refers to link: <a href={this.props.linkData.url}>{this.props.linkData.url}</a>)
                </span>}
            </div>
        )
    }
}

class Links extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            linkData: undefined
        };

        this.onShortenLink = this.onShortenLink.bind(this);
    }    

    
    onShortenLink(inputLink){
        const onSuccess = (raw, result) => {
            this.setState({
                error: "",
                link: result.object,
            })
        }

        const onError = (raw, error) => {
            let message = "error" in error ? error.error.error : raw.statusText;
            this.setState({
                error: message,
                link: undefined
            })
        }

        apiRequest("POST", undefined, {"url": inputLink}, onSuccess, onError);
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

                <LinksInputForm onShortenLink={this.onShortenLink}/>
                <br/><br/>

                <LinksResultMessage errorMessage={this.state.error} linkData={this.state.link}/>
            </div>
        )
    }
}

export default Links;