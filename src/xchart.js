import core from './core'
// 数据
import dataFactory from './data-factory'

// 组件
import {
  title,
  tooltip
} from './components'

export default class XChart {
  constructor(opts) {
    this.chartList = []

  }

  register(){

  }

  destory() {}

  // 挂载图标， 动这里开始绘图
  mount(cfg) {
    //必填信息
    if (!cfg.mount || !cfg.packageName || !cfg.chartType){
      throw new Error('err.')
    }else{
      //绘制
      var data = cfg.data
      this.render()
    }

  }


  // getInfo 获取chart的信息（属于哪个库，具体的chart类型，方便映射调用关系）
  // copyright 设置版权信息
  copyright(domStr) {
    return domStr
  }

  // 统一配置相关
  // setConfig

  // 数据相关
  // setData  设置数据
  setData() {}
  // transData  数据转换
  transData() {}

  // 组件相关
  // addComponents 设置配置项，主要是图表上的组件
  addComponents(comp = []) {

  }

  // 样式相关
  // setStyle  设置样式
  // mount 设置挂载点
  setMount() {}

  // 主题相关

  //事件相关
  // on
  // off
  on() {}
  off() {}

  // 行为相关
  // highlight
  highlight() {}
  // 动画相关

  //l18n
  setLan(lang) {}

  // 渲染相关
  // render 绘图
  render() {}
}
