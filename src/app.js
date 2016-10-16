import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import ContentA from "./components/ContentA"
import ContentB from "./components/ContentB"
import ContentDefault from "./components/ContentDefault"
import Layout from "./components/Layout"
import store from './rendererStore'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={ContentDefault}/>
                <Route path="a" component={ContentA}/>
                <Route path="b" component={ContentB}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
