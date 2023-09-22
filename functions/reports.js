const {globSync} = require("glob")
const fs = require("fs")

require('dotenv').config();
apiQaIntUrl = process.env.API_QA_INT_URL

let reportsPath = "cypress/reports"

module.exports = {
    getReport: (reportFolder, reportName) => {
        return JSON.parse(fs.readFileSync(`${reportsPath}/${reportFolder}/${reportName}.json`, "utf-8"))
    },
    deleteReport: (folder, reportName) => {
        fileExist = fs.existsSync(`${reportsPath}/${folder}/${reportName}.json`)
        if(!fileExist) {return {msg : `unable to find a report with name '${reportName}' (${reportsPath}/${reportName}.json)`}}
        fs.unlinkSync(`${reportsPath}/${folder}/${reportName}.json`)
        fs.readdir(`${reportsPath}/${folder}`, (err, files) => { if (files.length == 0){fs.rmdirSync(`${reportsPath}/${folder}`)} })
        return {status: 200, msg : `report removed succesfully`}
    }
}