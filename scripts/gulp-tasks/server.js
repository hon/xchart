// 服务相关任务
var
  gulp = require('gulp'),
  bs = require('browser-sync').create(),
  runSequence = require('run-sequence'),
  base = require('./base.js')

// 单任务列表
var tasks = {
  'browser-sync': function () {
    bs.init({
      server: {
        baseDir: "./"
      },
      ui: {
        port: 9100
      }
    })
  }
}


// 生成任务
base.listTasks(tasks, gulp)

//导出任务， 可能有组合任务， 所以没有直接将tasks导出, 尽管可能和tasks对象一样
module.exports = base.filterObj(
  ['browser-sync'],
  tasks
)
