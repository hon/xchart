var
  gulp = require('gulp'),
  base = require('./base.js'),
  del = require('del'),
  vinylPaths = require('vinyl-paths')

var tasks = {
  clean: function () {
    return gulp.src(base.path.dist)
      // path as a param of del, del returns a promise.
      .pipe(vinylPaths(del))
  }
}

base.listTasks(tasks, gulp)


module.exports = base.filterObj(
  ['clean'],
  tasks
)
