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
        return (
            <>
                <input value={this.state.input} onChange={this.onLinkInputChange}/>
                &nbsp;
                <button onClick={this.onLinkShorten}>Shorten!</button>
            </>
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
                error: null,
                link: result.object,
            })
        }

        const onError = (raw, error) => {
            let message;
            switch (error.code){
                case 10:
                    message = "Invalid URL..."
                    break;
                case 12:
                    message = "Input url firstly."
                    break;
                default:
                    message = "Unknown error."
            }

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

                <br/>
                <br/>

                <div className="links-messages">

                    {this.state.error && <span className="links-error">
                        {this.state.error}
                    </span>}

                    {this.state.link && <span className="links-success">
                        Your link: <a href={this.state.link.short}>{this.state.link.short}</a>
                        <br/>
                        (Refers to link: <a href={this.state.link.url}>{this.state.link.url}</a>)
                    </span>}

                </div>
                <br/>
                <p>
                    Special thanks for <a href='https://github.com/kirillzhosul/'>kirillzhosul</a>.
                </p>
            </div>
        )
    }
}

export default Links;