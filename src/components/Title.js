import React from "react";
import {remote} from "electron";

export default class Tilte extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}
