var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var customPlumber = require('../custom-modules/plumber.js');

var config = require('../config');

// Compiles Sass to CSS
gulp.task('sass', function() {
  return gulp.src(config.sass.src)
    .pipe(customPlumber('Error Running Sass'))
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.sass.options))
    .pipe($.autoprefixer())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});