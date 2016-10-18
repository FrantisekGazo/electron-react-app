import React from "react"
import { connect } from "react-redux"


class StartScreen extends React.Component {

    render() {
        return (
            <div className="center">
                <p className="start-center-txt">Start a new project</p>
                <p className="start-center-txt">Open an existing project</p>
            </div>
        )
    }
}

export default connect(
    // state to props
    (state) => {
        return {
        }
    },
    // dispatch functions to props
    (dispatch) => {
        return {
        }
    }
)(StartScreen)

