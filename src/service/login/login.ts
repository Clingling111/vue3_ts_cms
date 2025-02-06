import myRequest from '..'
import type { IAccount } from '@/views/login/types'

export function accountLogin(account: IAccount) {
  return myRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return myRequest.get({
    url: '/users/' + id
    // headers: {
    //   Authorization: localStorage.getItem('token')
    // }
  })
}

// 根据用户角色id查询菜单树
export function getMenuListByRoleId(id: number) {
  return myRequest.get({
    url: `/role/${id}/menu`
  })
}
