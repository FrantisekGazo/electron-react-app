import { remote } from 'electron'

import ProjectService from '../services/Project'
import { createAction } from './actionCreator'
import { PROJECT_ACTIONS } from '../actionTypes'


export function startNewProject() {
    return function (dispatch) {
        remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
            properties: ['createDirectory', 'openDirectory']
        }, (dirPath) => {
            if (dirPath && dirPath[0]) {
                const projectDir = dirPath[0]

                const ps = new ProjectService(projectDir)

                if (ps.isInitialized()) {
                    // if already exists => show error
                    dispatch(createAction(PROJECT_ACTIONS.OPEN_ERROR, "Selected directory is already a Project"))
                } else {
                    ps.init()
                    dispatch(createAction(PROJECT_ACTIONS.OPEN, projectDir))
                }
            }
        })
    }
}

export function openProject() {
    return function (dispatch) {
        remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
            properties: ['openDirectory']
        }, (path) => {
            if (path && path[0]) {
                const projectDir = path[0]

                const ps = new ProjectService(projectDir)

                if (ps.isInitialized()) {
                    dispatch(createAction(PROJECT_ACTIONS.OPEN, projectDir))
                } else {
                    // if not found => show error
                    dispatch(createAction(PROJECT_ACTIONS.OPEN_ERROR, "Selected directory is not a Project"))
                }
            }
        })
    }
}
