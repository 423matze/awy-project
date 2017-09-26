var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
    runSequence(
        ['clean:dev','clean:dist'],
        ['lint:js','lint:scss'],
        ['sass','nunjucks'],
        ['useref','fonts','images','test'],
        callback
    );
});