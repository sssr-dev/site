import React from "react";

import {apiRequest} from "./LinksApi"

import './Links.css';


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
            let message;
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