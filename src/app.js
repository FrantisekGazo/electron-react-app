import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./screen/Layout"
import ContentA from "./screen/ContentA"
import ContentB from "./screen/ContentB"
import ContentDefault from "./screen/ContentDefault"

const appEl = document.getElementById("app");
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={ContentDefault}/>
            <Route path="a" component={ContentA}/>
            <Route path="b" component={ContentB}/>
        </Route>
    </Router>,
    appEl
);
