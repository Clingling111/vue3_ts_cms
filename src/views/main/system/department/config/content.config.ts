const contentConfig = {
  header: {
    title: '部门列表',
    btnTitle: '新建部门'
  },
  propList: [
    { type: 'selection', width: '55' },
    { type: 'index', label: '序号', width: '55' },
    { type: 'normal', label: '部门名称', prop: 'name' },
    { type: 'normal', label: '部门领导', prop: 'leader' },
    { type: 'normal', label: '上级部门', prop: 'parentId' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作' }
  ],
  pageName: 'department'
}

export default contentConfig
