import React from "react";

class Links extends React.Component{

    componentDidMount(){
        console.log("[Links]    file: src/app/Links/Links.js")
        console.log("[Links]    props:", this.props)

        document.title = "[СССР] Link shortening"
    }

    render(){
        return(
            <div>

                <h1 className={"center-text"}>
                    Links generator
                </h1>

            </div>
        )
    }
}

export default Links;
