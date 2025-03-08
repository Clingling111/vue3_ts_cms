const modalConfig = {
  pageName: 'goods',
  header: {
    newTitle: '新建商品',
    editTitle: '编辑商品'
  },
  formItem: [
    {
      type: 'input',
      label: '商品名称',
      prop: 'name',
      placeholder: '请输入商品名称'
    },
    {
      type: 'input',
      label: '原价格',
      prop: 'oldPrice',
      placeholder: '请输入原价格'
    },
    {
      type: 'input',
      label: '新价格',
      prop: 'newPrice',
      placeholder: '请输入新价格'
    },
    {
      type: 'input',
      label: '商品描述',
      prop: 'desc',
      placeholder: '请输入商品描述'
    },
    {
      type: 'select',
      label: '状态',
      prop: 'status',
      placeholder: '请选择状态',
      options: [
        {
          label: '启用',
          value: '1'
        },
        {
          label: '禁用',
          value: '0'
        }
      ]
    },
    // {
    //   type: 'upload',
    //   label: '图片上传',
    //   prop: 'imgUrl'
    // },
    {
      type: 'image',
      label: '图片',
      prop: 'imgUrl'
    },
    {
      type: 'input',
      label: '库存',
      prop: 'inventoryCount',
      placeholder: '请输入库存'
    },
    {
      type: 'input',
      label: '销量',
      prop: 'saleCount',
      placeholder: '请输入销量'
    },
    {
      type: 'input',
      label: '收藏数',
      prop: 'favorCount',
      placeholder: '请输入收藏数'
    },
    {
      type: 'input',
      label: '地址',
      prop: 'address',
      placeholder: '请输入地址'
    }
  ]
}

export default modalConfig
