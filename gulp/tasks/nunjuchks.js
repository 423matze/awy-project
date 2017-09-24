var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var fs = require('fs');
var customPlumber = require('../custom-modules/plumber.js');
//
gulp.task('nunjucks', function() {
    $.nunjucksRender.nunjucks.configure(['app/templates/']);
    return gulp.src('app/pages/**/*.+(html|njk)')
    // custemPlumber Error handling
    .pipe(customPlumber('Error Running Nunjucks'))
    // Adding jason data
    .pipe($.data(function() {
        return JSON.parse(fs.readFileSync('./app/data/data.json'))
        }))
    // Renders template with nunjucks
    .pipe($.nunjucksRender(
        {
            path: ['app/templates']
        }
    ))
    // output files in app folder
    .pipe(gulp.dest('app'))
    // Browser refresh
    .pipe(browserSync.reload({
        stream: true
    }))
    
});