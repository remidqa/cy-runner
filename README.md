# README

## Used Technologies
- Cypress
- Nodejs
- Docker

## What is this application for
A simple application to run cypress executions
A server listen to 1 ```GET```, 1 ```POST``` and 1 ```DELETE``` route to manage execution reports

## Setup
You need to use some ```Docker Volume```
There is example folders in this repository, you can copy/paste it in your volume folder to have some example data
Volumes :
    - <target-directory>/cypress/e2e:/app/cypress/e2e
    - <target-directory>/cypress/fixtures:/app/cypress/fixtures
    - <target-directory>/cypress/reports:/app/cypress/reports
    - <target-directory>/cypress/screenshots:/app/cypress/screenshots
    - <target-directory>/cypress/support:/app/cypress/support

## Build
- ```docker build -t newman-runner```
- ```docker run newman-runner```

## Routes
- ```[GET] /reports/app/:app```
    - expected params
        - ```app```: [MANDATORY] cypress app (folrder name, all ```*.cy.js``` files in it will be executed)

- ```[POST] /run/app/:app```
    - ```app```: [MANDATORY] cypress app (folrder name, all ```*.cy.js``` files in it will be executed)

- ```[GET] /report/report_name/:report_name```
    - expected query inputs
        - ```report_name```: [MANDATORY] name of the cypress report (in the ```cypress/reports``` folder)

- ```[DELETE] /report/report_name/:report_name```
    - expected query inputs:
        - ```report_name```: [MANDATORY] name of the cypress report (in the ```cypress/reports``` folder)


