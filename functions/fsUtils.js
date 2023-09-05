const fs = require('fs');
var glob = require('glob-fs')({ gitignore: true });


module.exports = {
    filesExists: (app) => {
        let fileExists = false;
        if (fs.existsSync(`cypress/e2e/${app}`)) {
            files = glob.readdirSync(`cypress/e2e/${app}/*`)
            files.forEach((f) => {
                if (f.match(/[.]?\.cy\.js/)) {
                    fileExists = true
                }
            })
        }
        return fileExists
    }
}