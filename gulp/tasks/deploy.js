var gulp = require('gulp');
var rsync = require('gulp-rsync');
 
gulp.task('deploy', function() {
  gulp.src('dist/**/*')
    .pipe(rsync({
      root:'dist/',
      shell: 'ssh',
      hostname: '10.0.1.42',
      username: 'matze423',
      destination: '/volume1/web/web/awy',
      process: true,
      command: true,
      recursive: true,
      clean: true,
      silent: false,
      compress: true
    }));
});