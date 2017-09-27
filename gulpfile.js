var requireDir = require('require-dir');
// taskfolder
var dir = requireDir('./gulp/tasks');

var gulp = require('gulp');
// links
gulp.task('run-dev',['default']);
gulp.task('run-build',['build']);
gulp.task('run-deploy',['deploy']);
