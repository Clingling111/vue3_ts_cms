import myRequest from '@/service'

// 用户页面的网络请求
export function postUserListData(queryInfo: any) {
  return myRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}

// 删除用户
export function deleteUserData(id: number) {
  return myRequest.delete({
    url: `/users/${id}`
  })
}

// 新建用户
export function createUser(info: any) {
  return myRequest.post({
    url: '/users',
    data: info
  })
}

// 编辑用户
export function editUser(id: number, info: any) {
  return myRequest.patch({
    url: `/users/${id}`,
    data: info
  })
}

//
export function postPageListData(pageName: string, queryInfo: any) {
  return myRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}
export function deletePageData(pageName: string, id: number) {
  return myRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function createPageData(pageName: string, pageInfo: any) {
  return myRequest.post({
    url: `/${pageName}`,
    data: pageInfo
  })
}

export function editPageData(pageName: string, id: number, pageInfo: any) {
  return myRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}

// 获取故事列表
export function getStoryList() {
  return myRequest.post({
    url: '/story/list'
  })
}
