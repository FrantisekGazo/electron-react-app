import { createStore, applyMiddleware, compose } from 'redux'
import { electronEnhancer } from 'redux-electron-store'
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers'


let filter = true

let enhancer
if (process.env.NODE_ENV === 'development') {
    let logger = require('redux-logger')

    enhancer = compose(
        applyMiddleware(thunkMiddleware, logger()),
        electronEnhancer(filter)
    )
} else { // production
    enhancer = compose(
        applyMiddleware(thunkMiddleware),
        electronEnhancer(filter)
    )
}

export default createStore(reducers, enhancer)
