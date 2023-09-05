const fastify = require('fastify')({ logger: true })
const { runCypress } = require("./functions/cy.js")
const { getReports, getReport, deleteReport } = require("./functions/reports.js")

fastify.get('/reports/app/:app', async (req, rep) => {
    return getReports(req.params.app)
})

fastify.post('/run/app/:app', async (req, rep) => {
    let cyRun = await runCypress(req.params.app);
    return cyRun
})

fastify.get('/report/report_name/:report_name', async (req, rep) => {
    return getReport(req.params.report_name)
})

fastify.delete('/report/report_name/:report_name', async (req, rep) => {
    return deleteReport(req.params.report_name)
})

// Run the server!
fastify.listen({ host: "0.0.0.0", port: 5010 }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})