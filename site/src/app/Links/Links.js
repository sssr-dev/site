import React from "react";

class Links extends React.Component{

    componentDidMount(){
        console.log("[Links]    file: src/app/Links/Links.js")
        console.log("[Links]    props:", this.props)

        document.title = "[СССР] Link shortening"
    }

    render(){
        return(
            <div className={"center-text"}>
                <h1 >
                    Links generator
                </h1>
                <br />
                <p>
                    Not ready.
                </p>
            </div>
        )
    }
}

export default Links;
