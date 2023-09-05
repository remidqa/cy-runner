const {globSync} = require("glob")
const fs = require("fs")

require('dotenv').config();
apiQaIntUrl = process.env.API_QA_INT_URL

module.exports = {
    getReports: (app) => {
        var f = []
        files = globSync(`cypress/reports/${app}*.json`)
        files.forEach(file => {
            f.push(file.slice("cypress/reports/".length, file.length-".json".length))
        });
        return {status: 200, msg: `report folder scanned for ${app} reports`, reports: f}
    },
    getReport: (reportName) => {
        return JSON.parse(fs.readFileSync(`cypress/reports/${reportName}.json`, "utf-8"))
    },
    deleteReport: (reportName) => {
        fileExist = fs.existsSync(`cypress/reports/${reportName}.json`)
        if(!fileExist) {return {msg : `unable to find a report with name '${reportName}' (cypress/reports/${reportName}.json)`}}
        fs.unlinkSync(`cypress/reports/${reportName}.json`)
        return {status: 200, msg : `report removed succesfully`}
    }
}