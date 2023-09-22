let apps = require('../../fixtures/apps.json')

export default (env) => {
    let appData = (env) => {
        let urls = {}
        for(var app in apps) {
            urls[app] = apps[app][env]
        }
        return urls
    }
    return appData(env)
} 