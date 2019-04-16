# apickli-example

Setup test environment:

1. Install Node.js 4.3.2 and above - https://nodejs.org/en/
2. Install CucumberJS by command from CLI 
</br>npm install -g cucumber@0.5.2
3. Go to web folder (or api)
4. Run "npm i" command from CLI
5. Run tests from web or api folder in CLI:
</br> $ cucumber-js --format=json > cucumber_report.json
</br> cucumber-js --tags @smoke --format=json > cucumber_report.json (run scenarios with tag @smoke)

 Grunt
 grunt cucumberjs --require=features/step_definitions/ --features=features/dashboard/ --format=pretty

