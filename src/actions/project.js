import { remote } from 'electron'
import fs from 'fs'

import { createAction } from './actionCreator'
import { PROJECT_ACTIONS } from '../actionTypes'


export function startNewProject() {
    return function(dispatch) {
        remote.dialog.showOpenDialog(remote.getCurrentWindow(),  {
            properties: ['createDirectory', 'openDirectory']
        }, (path) => {
            if (path && path[0]) {
                const projectDir = path[0]

                if (fs.existsSync(projectDir + '/.project_config')) {
                    // TODO : create project config file
                    // if already exists => show error
                    dispatch(createAction(PROJECT_ACTIONS.OPEN_ERROR, "Selected directory is already a Project"))
                } else {
                    dispatch(createAction(PROJECT_ACTIONS.OPEN, projectDir))
                }
            }
        })
    }
}

export function openProject() {
    return function(dispatch) {
        remote.dialog.showOpenDialog(remote.getCurrentWindow(),  {
            properties: ['openDirectory']
        }, (path) => {
            if (path && path[0]) {
                const projectDir = path[0]

                if (fs.existsSync(projectDir + '/.project_config')) {
                    dispatch(createAction(PROJECT_ACTIONS.OPEN, projectDir))
                } else {
                    // if not found => show error
                    dispatch(createAction(PROJECT_ACTIONS.OPEN_ERROR, "Selected directory is not a Project"))
                }
            }
        })
    }
}
