const contentConfig = {
  header: {
    title: '商品列表',
    btnTitle: '新建商品'
  },
  propList: [
    { type: 'index', label: '序号', width: '55' },
    { type: 'normal', label: '商品名称', prop: 'name' },
    { type: 'normal', label: '原价格', prop: 'oldPrice' },
    { type: 'normal', label: '新价格', prop: 'newPrice' },
    { type: 'normal', label: '状态', prop: 'status', width: '55' },
    { type: 'image', label: '图片', prop: 'imgUrl' },
    { type: 'normal', label: '库存', prop: 'inventoryCount' },
    { type: 'normal', label: '销量', prop: 'saleCount' },
    { type: 'normal', label: '收藏', prop: 'favorCount' },
    { type: 'normal', label: '地址', prop: 'address', width: '55' },
    { type: 'timer', label: '创建时间', prop: 'createAt', width: '120' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: '120' },
    { type: 'handler', label: '操作', width: '180' }
  ],
  pageName: 'goods'
}

export default contentConfig
