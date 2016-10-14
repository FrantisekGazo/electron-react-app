import React from "react";
import ReactDOM from "react-dom";


class AppLayout extends React.Component {
    render() {
        return (
            <h1>React Works!</h1>
        );
    }
}

const app = document.getElementById("app")

ReactDOM.render(<AppLayout/>, app)
