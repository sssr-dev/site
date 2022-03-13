import React from "react";

class Status extends React.Component{

    componentDidMount(){
        console.log("[Status]   file: src/app/Main/Counters.js")
        console.log("[Status]   props:", this.props)

        document.title = "[СССР] Status page"
    }

    render(){
        return(
            <h1 className={"center-text"}>
                No status.
            </h1>
        )
    }
}

export default Status;
