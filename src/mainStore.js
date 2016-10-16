import { createStore, applyMiddleware, compose } from 'redux'
import { electronEnhancer } from 'redux-electron-store'
import reducers from './reducers'
import logger from 'redux-logger'

let enhancer = compose(
    applyMiddleware(logger()),
    electronEnhancer()
)

let defaultStore = {
    data: [
        {id:1, name: "The Only One"}
    ],
    loading: false
}

export default createStore(reducers, defaultStore, enhancer)
