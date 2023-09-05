const { filesExists } = require("./fsUtils")
const fs = require('fs');
const { exec } = require("child_process");


module.exports = {
    runCypress: async (app) => {
        return new Promise(async (res, rej) => {
            let filesState = filesExists(app);
            if (filesState) {
                let reportName = `${app}_${Date.now()}`
                let reportFolder = `cypress/reports/${reportName}`
                fs.mkdirSync(reportFolder);
                exec(`npx cypress run --spec 'cypress/e2e/${app}/*.cy.js' --reporter mochawesome --reporter-options reportDir='${reportFolder}',reportFilename='[status]_[datetime]-[name]-report'`, (err, stdout, stderr) => {
                    exec(`npx mochawesome-merge ${reportFolder}/*.json -o cypress/reports/${reportName}.json`, (err, stdout, stderr) => {
                        fs.rmSync(reportFolder, {force: true, recursive: true})
                        res({
                            status: 200,
                            msg: `Cypresss execution ended for app '${app}'. Json report available with name '${reportName}'`,
                            infos: {
                                app: app,
                                reportName: reportName
                            }
                        })
                    })
                })
            } else {
                rej({ status: "err", msg: `no files for directory 'cypress/e2e' and pattern '${app}*.cy.js'` })
            }
        })
    }
}