var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
//
gulp.task('useref', function() {
    var _src = 'app/*.html';
    return gulp.src(_src)
        .pipe($.useref())
        .pipe($.cached('useref'))
        .pipe($.gulpif('*.js', uglify()))
        .pipe($.gulpif('*.css', uncss({
            html: [ _src ]
        })))
        .pipe($.gulpif('*.css', cssnano()))
        .pipe($.debug())
        .pipe(gulp.dest('dist'))
});