import { MAIN_ACTIONS } from "../actionTypes"

export default function (state = {}, action = {type: undefined}) {
    switch (action.type) {
        case MAIN_ACTIONS.DO_SOMETHING:
            return {...state, data: [
                {id: 226783, name: "Data1"},
                {id: 762390, name: "Data2"},
                {id: 523687, name: "Data3"}
            ]}
        default:
            return state
    }
}
