import { MAIN_ACTIONS, PROJECT_ACTIONS } from "../actionTypes"

const initialState = {
    path: null,
    error: null,
    data: [],
    fetching: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PROJECT_ACTIONS.OPEN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case PROJECT_ACTIONS.OPEN:
            return {
                ...state,
                path: action.payload
            }
        case PROJECT_ACTIONS.CLOSE:
            return {
                ...state,
                path: null
            }
        case MAIN_ACTIONS.DO_SOMETHING:
            return {
                ...state,
                data: [
                    {id: 226783, name: "Data1"},
                    {id: 762390, name: "Data2"},
                    {id: 523687, name: "Data3"}
                ]
            }
        default:
            return state
    }
}
