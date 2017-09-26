var gulp = require('gulp');
var del = require('del');

var config = require('../config');

gulp.task('clean:dist', function() {
    return del.sync(config.dist.src);
});