var $ = require('gulp-load-plugins')();
//
function customPlumber(errTitle){
    if (process.env.CI) {
        return $.plumber({
        errorHandler: function(err) {
        throw Error($.util.colors.red(err.message));
        }
        });
    } else {
        return $.plumber({
        errorHandler: $.notify.onError({
            title: errTitle || "Error runnig Gulp MAL",
            message: "Error: <%= error.message %>"
        })
    });
    };
};
module.exports = customPlumber;