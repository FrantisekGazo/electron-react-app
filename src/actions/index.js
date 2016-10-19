import { createAction } from './actionCreator'
import { MAIN_ACTIONS } from '../actionTypes'

export function doSomething() {
    return function(dispatch) {
        dispatch(
            // I can do something async and then call the dispatcher
            createAction(MAIN_ACTIONS.DO_SOMETHING, {name: 'Something'})
        )
    }
}
