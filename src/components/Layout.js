import React from "react"
import { Link } from "react-router"
import { connect } from "react-redux"
import { doSomething } from "../actions"

import Header from "./Header"


const mapStateToProps = (store) => {
    return {
        data: store.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        run: () => {
            dispatch(doSomething())
        }
    }
}

//@connect(mapStateToProps, mapDispatchToProps)
//export default class Layout extends React.Component {
class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "Hello!"
        };
    }

    reload() {
        console.log("Reloading...")
        this.props.run()
    }

    changeTitle(title) {
        this.setState({title});
    }

    navigateToDefault() {
        this.props.history.replace("/");
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps(nextProps)", nextProps)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate(nextProps, nextState)", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate(prevProps, prevState)", prevProps, prevState)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        const { data } = this.props
        const dataElements = data.map(d => <li key={d.id}>{d.name}</li>)

        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                {this.props.children}
                <Link to="a"><button>Show A</button></Link>
                <Link to="b"><button>Show B</button></Link>
                <button onClick={this.navigateToDefault.bind(this)}>Show default</button>
                <ul>
                    {dataElements}
                </ul>
                <button onClick={this.reload.bind(this)}>RELOAD DATA</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)