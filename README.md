# CY-RUNNER

This application is a Cypress tests runner wrapped in an API. It can be used to trigger tests and and manage reports

## Technologies
- Cypress
- Nodejs
- fastify
- Docker
- remidqa quality workflow

## Build
- This application is designed for a Docker usage.
- To build simple run : ```docker build -t {tag-name} .```
- Then the image will be available on your local repository

## Configuration
- All cypress files (fixtures, commands, configs, tests and reports) must be in a docker volume :
    - eg. for cypress tests files : ```./volumes/cypress/e2e:/app/cypress/e2e```
    - eg. for fixture files : ```./volumes/cypress/fixtures:/app/cypress/fixtures```
    - eg. for reports files : ```./volumes/cypress/reports:/app/cypress/reports```
    - eg. for screenshot files : ```./volumes/cypress/screenshots:/app/cypress/screenshots```
    - eg. for configuration files : ```./volumes/cypress/support:/app/cypress/supportset docker```
- This way you can edit, create and delete your datas, tests,... without any concern about updates or restart of the wrapper/runner

  ## Usage
- ```[POST] /run``` with 2 mandatory variables (app and env) in the body : {"app": "${app}", "env": "${env}"}
    - ```app```: is looking for all available ```.cy.js``` file in path ```cypress/e2e/${app}```
    - ```evnv```: is looking for all available ```${env}.json``` file in path ```cypress/fixtures```
    - RESPONSE : you will get the report's name and folder in the body response
- ```[GET] /report/folder/:folder/report_name/:report_name``` : to get the .json report
