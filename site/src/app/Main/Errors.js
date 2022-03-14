import React from 'react'
import PropTypes from 'prop-types';


class Errors extends React.Component{

    componentDidMount(){

        console.log("[Errors]   file: src/app/Main/Errors.js")
        console.log("[Errors]   props:", this.props)
        document.title = "Error " + this.props.error

    }

    render(){

        const params = new URLSearchParams(window.location.search)

        return(
            <div className={"center-text"}>
                <h1>
                    Page loads with error.<br/>
                    Error code: {this.props.error} <br/>
                </h1>
                {this.props.error === 404 ?
                    <p>
                        Link: {params.get("from")} not found on server.
                    </p> : null
                }
            </div>
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
