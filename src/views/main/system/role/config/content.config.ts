const contentConfig = {
  header: {
    title: '角色列表',
    btnTitle: '新建角色'
  },
  propList: [
    { type: 'selection' },
    { type: 'index', label: '序号', width: '55' },
    { type: 'normal', label: '角色名称', prop: 'name' },
    { type: 'normal', label: '角色权限', prop: 'intro' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作' }
  ],
  pageName: 'role'
}

export default contentConfig
