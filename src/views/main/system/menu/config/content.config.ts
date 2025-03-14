const contentConfig = {
  header: {
    title: '菜单列表',
    btnTitle: '新建菜单'
  },
  propList: [
    { label: '菜单名称', prop: 'name' },
    { label: '级别', prop: 'type', width: '100px' },
    { label: '菜单url', prop: 'url', width: '150px' },
    { label: '菜单icon', prop: 'icon', width: '200px' },
    { label: '排序', prop: 'sort', width: '120px' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '150px' }
  ],
  pageName: 'menu'
}

export default contentConfig
