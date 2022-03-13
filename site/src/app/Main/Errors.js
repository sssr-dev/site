import React from 'react'
import PropTypes from 'prop-types';


class Errors extends React.Component{

    componentDidMount(){

        console.log("[Errors]   file: src/app/Main/Errors.js")
        console.log("[Errors]   props:", this.props)
        document.title = "Error " + this.props.error

    }

    render(){
        return(
            <h1 className={"center-text"}>
                Page loads with error.<br/>
                Error code: {this.props.error}
            </h1>
        )
    }
}

Errors.propTypes = {
    error: PropTypes.number
}

Errors.defaultProps = {
    error: "[unknown]"
}

export default Errors;
