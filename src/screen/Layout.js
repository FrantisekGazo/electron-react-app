import React from "react";
import {Link} from "react-router";

import Header from "../components/Header";


export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "Hello!"
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    navigateToDefault() {
        this.props.history.replace("/");
    }

    render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                {this.props.children}
                <Link to="a"><button>Show A</button></Link>
                <Link to="b"><button>Show B</button></Link>
                <button onClick={this.navigateToDefault.bind(this)}>Show default</button>
            </div>
        );
    }
}
