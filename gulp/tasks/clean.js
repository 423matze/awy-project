var gulp = require('gulp');
var del = require('del');
//
gulp.task('clean:dev', function() {
    return del.sync([
        'app/css',
        'app/*.html'
    ])
});