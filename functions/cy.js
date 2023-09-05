const {filesExists} = require("./fsUtils")
const fs = require('fs');
const { exec } = require("child_process");

module.exports = {
    runCypress : async (app) => {
        return new Promise(async (res, rej) => {
            let filesState = filesExists(app);
            if (filesState) {
                let reportFolder = `cypress/results/${app}_${Date.now()}`
                fs.mkdirSync(reportFolder);
                exec(`npx cypress run --spec 'cypress/e2e/${app}/*.cy.js' --reporter mochawesome --reporter-options reportDir='${reportFolder}',reportFilename='[status]_[datetime]-[name]-report'`, (err, stdout, stderr) => {
                    exec(`npx mochawesome-merge ${reportFolder}/*.json -o ${reportFolder}/output.json`, (err, stdout, stderr) => {
                        fs.readFile(`${reportFolder}/output.json`, "utf-8", (err, data) => {
                            if (err) {
                                rej({ err: "something wrong after execution, when trying to fetch .json report" })
                            };
                            fs.rmSync(reportFolder, {force: true, recursive: true})
                            data = JSON.parse(data)
                            res(data)
                        })
                    })
                })
            } else {
                rej({ status: "err", msg: `no files for directory 'cypress/e2e' and pattern '${app}*.cy.js'` })
            }
        })
    }
}