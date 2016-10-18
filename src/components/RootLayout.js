import React from "react"
import { Link } from "react-router"
import { connect } from "react-redux"


class Layout extends React.Component {

    navigateToDefault() {
        console.log(this)
        this.props.history.replace("/")
    }

    render() {
        return (
            <div>
                <Link to="setup"><button>START</button></Link>
                <Link to="plot"><button>PLOT</button></Link>
                <button onClick={this.navigateToDefault.bind(this)}>BACK</button>

                {this.props.children}
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
)(Layout)
