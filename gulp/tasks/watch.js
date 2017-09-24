var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
//
var config = require('../config');
//
gulp.task('watch', function(){
    gulp.watch(config.sass.src, ['sass', 'lint:css']);
    gulp.watch('config.js.src', ['watch-js']);
    gulp.watch(config.nunjucks.watch, ['nunjucks']);     
});
//
gulp.task('watch-js',['lint:js'], browserSync.reload);