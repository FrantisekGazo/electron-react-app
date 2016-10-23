import React from "react"
import { connect } from "react-redux"

import { startNewProject, openProject } from '../actions/project'


class StartScreen extends React.Component {

    render() {
        let errorMsg = null
        if (this.props.error) {
            errorMsg = (<p>{this.props.error}</p>)
        }

        return (
            <div className="center">
                <p className="start-center-txt" onClick={this.props.startNew.bind(this)}>Start a new project</p>
                <p className="start-center-txt" onClick={this.props.openExisting.bind(this)}>Open an existing project</p>
                { errorMsg }
            </div>
        )
    }
}

export default connect(
    // state to props
    (state) => {
        return {
            error: state.project.error
        }
    },
    // dispatch functions to props
    (dispatch) => {
        return {
            startNew: () => {
                dispatch(startNewProject())
            },
            openExisting: () => {
                dispatch(openProject())
            }
        }
    }
)(StartScreen)

