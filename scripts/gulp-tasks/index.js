var
  gulp = require('gulp'),
  runSequence = require('run-sequence'),
  tasks = {
    dev: require('./dev.js'),
    default: require('./dev.js'),
    product: require('./product.js')
  }


module.exports = function() {
  for (task in tasks){
    gulp.task(task, tasks[task].run)
  }
}
