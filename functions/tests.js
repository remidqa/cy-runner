const fs = require("fs")

module.exports = {
    getTests: (app) => {
        if(fs.existsSync(`cypress/e2e/${app}`)) {
            let tests = fs.readdirSync(`cypress/e2e/${app}`).filter(fileName => fileName.endsWith('.cy.js')).map(fileName => fileName.replace(/\.cy\.js$/, ''));
            if(tests.length == 0 ) {
                return {
                    "err": `folder found for app: '${app}', but no tests found`
                }
            }
            return {'tests': tests}
        } else {
            return {
                "err": `no test folder found for app: '${app}'`
            }
        }
    },
    getTest: (app, test) => {
        if(fs.existsSync(`cypress/e2e/${app}/${test}.cy.js`)) {
            let testScript = fs.readFileSync(`cypress/e2e/${app}/${test}.cy.js`, "utf-8")
            return {test: testScript}
        } return {
            "err": `no test named '${test}' in folder '${app}'`
        }
    }
}