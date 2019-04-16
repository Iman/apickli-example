/**
 * Created by Vasily on 3/7/2016.
 */
/**
 * Created by Vasily on 3/12/2016.
 */

var myHooks = function () {

    var Report = require("cucumber-html-report");
    var options = {
        "source": "cucumber_report.json", // source json
        "dest": "reports", // target directory (will create if not exists)
        "name": "report.html" // report file name (will be index.html if not exists)
        //"template": "mytemplate.html" // your custom mustache template (uses default if not specified)
    };

    this.AfterFeatures(function () {
        var report = new Report(options);
        report.createReport();
    });
};

module.exports = myHooks;