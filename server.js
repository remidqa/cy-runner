const fastify = require('fastify')({ logger: true })
const { runCypress } = require("./functions/cy.js")
const { sendResultsToApiQa } = require("./functions/reports.js")

fastify.post('/run/app/:app', async (req, rep) => {
    let cyResults = await runCypress(req.params.app);
    let postedResults = await sendResultsToApiQa(cyResults)
    return postedResults
})

// Run the server!
fastify.listen({ host: "0.0.0.0", port: 5010 }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})