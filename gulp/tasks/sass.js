var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
//
var customPlumber = require('../custom-modules/plumber.js');
//
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(customPlumber('Error running Sass Task'))
        // init Sourcmap
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            precision: 2,
            includePaths: ['app/bower_components']
        }))
        .pipe($.autoprefixer({
            // Default options
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
        }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))        
});