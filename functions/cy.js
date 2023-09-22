const { filesExists } = require("./fsUtils")
const fs = require('fs');
const { exec } = require("child_process");


module.exports = {
    runCypress: async (app, env) => {
        return new Promise(async (res, rej) => {
            let filesState = filesExists(app);
            if (filesState) {
                let reportName = `${app}_${env}_${Date.now()}`
                let reportFolder = `cypress/reports/${reportName}`
                fs.mkdirSync(reportFolder);
                exec(`npx cypress run --spec 'cypress/e2e/${app}/*.cy.js' --env env=${env} --reporter mochawesome --reporter-options html=false,reportDir='${reportFolder}',reportFilename='[status]_[name]-report'`, (err, stdout, stderr) => {
                    let reports = fs.readdirSync(reportFolder)
                    reports.forEach((report, i) => { reports[i] = report.slice(0, report.length - '.json'.length) })
                    res({
                        status: 200,
                        msg: `Cypresss execution ended for app '${app}'. Json reports available with names ['${reports.join('\', \'')}'] in folder '${reportName}'`,
                        infos: {
                            app: app,
                            env: env,
                            reportsFolder: reportName,
                            reports: reports
                        }
                    })
                })
            } else {
                rej({ status: "err", msg: `no files for directory 'cypress/e2e' and pattern '${app}*.cy.js'` })
            }
        })
    }
}