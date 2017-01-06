// build tasks
var
  gulp = require('gulp'),
  base = require('./base.js'),
  stylus = require('gulp-stylus'),
  runSequence = require('run-sequence')


var path = {
  img: base.path.img,
  dist: base.path.dist,
  css: base.path.css,
  cssDist: base.path.cssDist
}
var tasks = {
  /**
   * 1. stylus to css
   * 2. postcss parse css
   * 3. webpack load css
   */
  stylus: function() {
    return gulp.src(path.css)
      .pipe(stylus())
      .pipe(gulp.dest(path.cssDist))
  },

  postcss: function() {

  },

  css: function () {
    return runSequence(
      'stylus',
      'postcss'
    )
  },

  //images
  img: function () {
    return gulp.src(path.img)
      .pipe(cache('image'))
      .pipe(gulp.dest(path.dist))
  },

  //watch
  watch: function () {
    gulp.watch(path.img, ['img'])
    gulp.watch(path.css, ['css'])
  }


}

base.listTasks(tasks, gulp)

module.exports = base.filterObj(
  ['watch'],
  tasks
)
