import { createAction } from './actionCreator'
import { MAIN_ACTIONS } from '../actionTypes'

export function doSomething() {
    return createAction(MAIN_ACTIONS.DO_SOMETHING, {name: 'Something'})
}
