import { createStore, applyMiddleware, compose } from 'redux'
import { electronEnhancer } from 'redux-electron-store'
import reducers from './reducers'
import logger from 'redux-logger'

let enhancer = compose(
    applyMiddleware(logger()),
    electronEnhancer(true),
)

export default createStore(reducers, {}, enhancer)
