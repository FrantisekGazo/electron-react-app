import React from "react"
import { connect } from "react-redux"

import { doSomething } from "../actions"


class SetupScreen extends React.Component {

    reload() {
        console.log("Reloading...")
        this.props.run()
    }

    render() {
        const { data } = this.props
        const dataElements = data.map(d => <li key={d.id}>{d.name}</li>)

        return (
            <div>
                <h1>Setup Screen</h1>

                <ul>
                    {dataElements}
                </ul>
                <button onClick={this.reload.bind(this)}>RELOAD DATA</button>
            </div>
        )
    }
}

export default connect(
    // state to props
    (state) => {
        return {
            data: state.project.data
        }
    },
    // dispatch functions to props
    (dispatch) => {
        return {
            run: () => {
                dispatch(doSomething())
            }
        }
    }
)(SetupScreen)
