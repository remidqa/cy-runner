const fs = require("fs")

module.exports = {
    getTests: (app) => {
        if(fs.existsSync(`cypress/e2e/${app}`)) {
            let tests = fs.readdirSync(`cypress/e2e/${app}`).filter(fileName => fileName.endsWith('.cy.js'));
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
    }
}