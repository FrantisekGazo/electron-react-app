import fs from 'fs'
import path from 'path'


const CONFIG_FILE_NAME = '.pca.config'

export default class ProjectService {

    constructor(dirPath) {
        this.dirPath = dirPath
    }

    getConfigPath() {
        return path.join(this.dirPath, CONFIG_FILE_NAME)
    }

    isInitialized() {
        return fs.existsSync(this.getConfigPath())
    }

    init() {
        let fd = fs.openSync(this.getConfigPath(), 'w')
        fs.writeFileSync(fd, '{}')
        fs.closeSync(fd)
    }
}
