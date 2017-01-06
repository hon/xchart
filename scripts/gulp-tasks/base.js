var
  path = require('path'),
  root = path.resolve('../../src') + '/',
  dist = path.resolve('../../dist') + '/'

// 定义常用路径
var path = {
  root: root,
  js: root + '**/*.js',
  // html: '',
  css: [
    root + 'assets/**/*.{styl, css}',
    !root + 'assets/css/index.css'
  ],
  cssDist: root + 'assets/css/',
  img: root + 'assets/**/*.{png, jpg, gif, svg}',
  dist: dist
}

/**
 * 将gulp任务对象展开
 * @param {Object} tasks - 任务列表
 * @param {gulp} gulp - gulp对象
 */
function listTasks (tasks, gulp) {
    for (task in tasks) {
      gulp.task(task, tasks[task])
    }
}

/**
 * 过滤对象的某些key，创建新的对象
 * @param {Array} keys - 新对象的key列表
 * @param {Object} obj - 老对象
 */
function filterObj(keys, obj) {
  var res = {}
  keys.forEach(function(key) {
    res[key] = obj[key]
  })
  return res
}


module.exports = {
  path: path,
  listTasks: listTasks,
  filterObj: filterObj
}
