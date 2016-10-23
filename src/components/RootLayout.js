import React from "react"
import { connect } from "react-redux"

import PlotScreen from "./PlotScreen"
import SetupScreen from "./SetupScreen"
import StartScreen from "./StartScreen"


class Layout extends React.Component {

    render() {
        let content
        if (this.props.selectedProject) {
            content = (<SetupScreen/>)
        } else {
            content = (<StartScreen/>)
        }

        return (
            <div>
                {content}
                <PlotScreen/>
            </div>
        )
    }
}

export default connect(
    // state to props
    (state) => {
        return {
            selectedProject: state.project.path
        }
    },
    // dispatch functions to props
    (dispatch) => {
        return {
        }
    }
)(Layout)
