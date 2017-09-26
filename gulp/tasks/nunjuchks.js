var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var fs = require('fs');

var customPlumber = require('../custom-modules/plumber.js');

var config = require('../config');

gulp.task('nunjucks', function() {
    $.nunjucksRender.nunjucks.configure(config.nunjucks.templates);
    return gulp.src(config.nunjucks.src)
    // custemPlumber Error handling
    .pipe(customPlumber('Error Running Nunjucks'))
    // Adding jason data
    .pipe($.data(function() {
        return JSON.parse(fs.readFileSync(config.nunjucks.data))
        }))
    // Renders template with nunjucks
    .pipe($.nunjucksRender(config.nunjucks.render))
    // output files in app folder
    .pipe(gulp.dest(config.nunjucks.dest))
    // Browser refresh
    .pipe(browserSync.reload({
        stream: true
    }))
    
});