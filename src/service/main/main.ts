// 本文件接口主要是main模块中多个页面要用到的公共数据

import myRequest from '..'

// 获取角色列表
export const getAllRoleList = () => {
  return myRequest.post({
    url: '/role/list'
  })
}

// 获取部门列表
export const getAllDepartmenList = () => {
  return myRequest.post({
    url: '/department/list'
  })
}

// 完整的菜单
export const getAllMenuList = () => {
  return myRequest.post({
    url: '/menu/list'
  })
}
