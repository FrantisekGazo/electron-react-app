import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import RootLayout from "./components/RootLayout"
import store from './store/renderer'


ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={RootLayout}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
