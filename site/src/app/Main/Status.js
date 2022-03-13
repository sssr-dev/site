import React from "react";

class Status extends React.Component{

    componentDidMount(){
        console.log("[Status]   file: src/app/Main/Counters.js")
        console.log("[Status]   props:", this.props)

        document.title = "[СССР] Status page"
    }

    render(){
        return(
            <div className={"center-text"}>
                <h1>
                    Site status
                </h1>
                <br />
                <p>
                    Not ready.
                </p>
            </div>
        )
    }
}

export default Status;
