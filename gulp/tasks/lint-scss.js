var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
//
var config = require('../config');

gulp.task('lint:scss', function() {
    return gulp.src(config.sass.src)
      .pipe($.scssLint(config.scsslint));
  });