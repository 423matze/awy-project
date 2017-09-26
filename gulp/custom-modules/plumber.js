var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
//
function customPlumber(errTitle){
    if (process.env.CI) {
        return plumber({
        errorHandler: function(err) {
        throw Error(err.message);
        }
        });
    } else {
        return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error runnig Gulp MAL",
            message: "Error: <%= error.message %>"
        })
    });
    };
};
module.exports = customPlumber;