import { createStore, applyMiddleware, compose } from 'redux'
import { electronEnhancer } from 'redux-electron-store'
import reducers from './reducers'


let enhancer
if (process.env.NODE_ENV === 'development') {
    let logger = require('redux-logger')

    enhancer = compose(
        applyMiddleware(logger()),
        electronEnhancer()
    )
} else { // production
    enhancer = compose(
        electronEnhancer()
    )
}

let defaultStore = {
    data: [
        {id:1, name: "The Only One"}
    ],
    loading: false
}

export default createStore(reducers, defaultStore, enhancer)
