let data = require('../../fixtures/data.json')

export default (env) => {
    let envData = data[env]
    return envData
} 