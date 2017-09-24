var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
//
var customPlumber = require('../custom-modules/plumber.js');
//
gulp.task('lint:js', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(customPlumber('JSHint Error'))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail', {
            ignoreWarning: true,
            ignoreInfo: true
        }))
        .pipe($.jscs({
            fix: true,
            configPath: '.jscsrc'
        }))
        .pipe(gulp.dest('app/js'))
});