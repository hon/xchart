export default class DataFactory {
  constructor() {
    
  }
  /**
   * 转换接口, 由下游具体实现
   */
  transform() {
    return {}
  }

  /**
   * 设置转换类型
   * @param type {String} 转换类型，通常由图表类型决定
   */
  setType(type) {
    this.type = type
  }

  _setRawData(data) {
    this.rawData = data
  }
  _setTransformedData(data) {
    this.transformedData = data
  }
  setData(data, type) {
    if ('raw' === type) this._setRawData(data)
    else this._setTransformedData(data)
  }

  // 获取最终数据
  getData() {
    if ('raw' === this.type) return this.transform()
    else return this.transformedData
  }
}
