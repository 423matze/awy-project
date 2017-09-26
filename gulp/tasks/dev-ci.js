var gulp = require('gulp');
var runSequence = require('run-sequence');
// fast development phasen tasks zusammen
gulp.task('dev-ci', function(callback) {
    runSequence(
        'clean:dev',
        ['lint:js','lint:scss'],
        ['sass', 'nunjucks'],
        callback
    );
});