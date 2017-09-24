var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

//
function customPlumber(errTitle){
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error runnig Gulp MAL",
            message: "Error: <%= error.message %>"
        })
    });
};

module.exports = customPlumber;