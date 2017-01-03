import {
  XChart
} from '../charts'

class BubbleChart extends XChart{
    constructor() {

    }
    // 信息
    static info = {
      package: [],
      chartType： ''
    }

    register() {
      
    }

}

let bc = new BubbleChart()

// 挂载图表，这些图表的数据转换和方法重载必须事先定义
// 只要有数据，库解析引擎和浏览器环境就可以绘制出图表
bc.mount({
  mount: '#main',
  packageName: 'echart',  //或包地址
  chartType: '',
  data: {}
  // OPTIONAL
  lang: 'en',
  copyright: '',
  theme: '',
  addComponents: []
  hostConfig: {

  }
})
