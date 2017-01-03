// 第三方chart库信息
export default class ChartStore {
  constructor() {
    this.chartList = [
      {
        chartType: '',
        packageName: []
      }
    ]

    this._genChartId()
  }

  //
  register(info) {
    if (!info.chartType || !info.packageName) {
      throw new Error('必须提供图表类型和依赖的包名')
    }else{
      this.chartList.push(info)

      //生成id
      var id = this._genChartId(info)
      info.chartId = id
    }

    /**
     * 生成chartid
     * chartid由chartType, 和packageName中的某一个值组成
     */
    function _genChartId(info) {
      if (Array.isArray(info)){
        var ids = []
        info.packageName.forEach(name => {
          ids.push(name + '.' + info.chartType)
        })
        return ids
      }else{
        return info.packageName + '.' + info.chartType
      }
    }
  }

  // 删除某个chart
  destory(chartId) {
    this.chartList.filter(item => {
      return item.chartId != chartId || item.indexOf(chartId) === -1
    })
  }

  getChartList() {
    return this.chartList
  }
}
