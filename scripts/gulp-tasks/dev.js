//dev tasks
var
  gulp = require('gulp'),
  build = require('./build.js'),
  server = require('./server.js'),
  runSequence = require('run-sequence')


gulp.task('server', server['browser-sync'])
gulp.task('build', build['watch'])


module.exports = {
  run: function() {
    return runSequence(
      'build', 
      ['server']
    )
  }
}
