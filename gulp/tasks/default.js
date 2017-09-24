var gulp = require('gulp');
var runSequence = require('run-sequence');
// fast development phasen tasks zusammen
gulp.task('default', function(callback) {
    runSequence(
        'clean:dev',
        ['lint:js','lint:scss'],
        ['sass', 'nunjucks'],
        ['browserSync', 'watch'],
        callback
    );
});