const fastify = require('fastify')({ logger: true })
const { runCypress } = require("./functions/cy.js")
const { getReports, getReport, deleteReport } = require("./functions/reports.js")
const { getTests, getTest } = require("./functions/tests.js")

fastify.post('/run', async (req, rep) => {
    let app = req.body.app
    let env = req.body.env
    let cyRun = await runCypress(app, env);
    return cyRun
})

fastify.get('/tests/app/:app', async (req, rep) => {
    return getTests(req.params.app)
})

fastify.get('/tests/app/:app/test/:test', async (req, rep) => {
    return getTest(req.params.app, req.params.test)
})

fastify.get('/report/folder/:folder/report_name/:report_name', async (req, rep) => {
    return getReport(req.params.folder, req.params.report_name)
})

fastify.delete('/report/folder/:folder/report_name/:report_name', async (req, rep) => {
    let folder = req.params.folder
    let reportName = req.params.report_name
    return deleteReport(folder, reportName)
})

// Run the server!
fastify.listen({ host: "0.0.0.0", port: 5010 }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})