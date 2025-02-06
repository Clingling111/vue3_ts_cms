import { defineStore } from 'pinia'
import {
  accountLogin,
  getMenuListByRoleId,
  getUserInfoById
} from '@/service/login/login'
import {
  mapMenuslistToPermission,
  mapMenuToRoute
} from '@/utlis/mapMenuToRoute'
import type { IAccount } from '@/views/login/types'
import router from '@/router'
import { useMainStore } from '../main/main'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permission: string[]
}
export const useLoginStore = defineStore('login', {
  // 如何指定state的类型
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: [],
    permission: []
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      // 1.获取token
      const res = await accountLogin(account)
      const id = res.data.id
      this.token = res.data.token

      // 2.将token存进本地缓存
      localStorage.setItem('token', res.data.token)

      // 3.获取用户详细信息
      const userInfoRes = await getUserInfoById(id)
      this.userInfo = userInfoRes.data

      // 4.根据角色请求用户的权限(菜单menus)
      const menuListRes = await getMenuListByRoleId(this.userInfo.role.id)
      const useMenus = menuListRes.data
      this.userMenus = useMenus

      // 5.将用户信息和菜单信息保存到内存中
      localStorage.setItem('userInfo', JSON.stringify(useMenus))
      localStorage.setItem('userMenus', JSON.stringify(useMenus))

      // 2.配置动态路由(重要)
      const routes = mapMenuToRoute(useMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 6.获取角色列表和部门列表
      const mainStore = useMainStore()
      mainStore.fetchRoleList()
      mainStore.fetchDepartmentList()
      mainStore.fetchMenuList()

      //7.获取用户的按钮权限
      const permission = mapMenuslistToPermission(useMenus)

      this.permission = permission

      // 跳转到首页
      router.push('/main')
    },
    loadLocalCacheAction() {
      // 1.获取本地数据
      const token = localStorage.getItem('token')
      const userInfo = JSON.parse(localStorage.getItem('userInfo') as string)
      const userMenus = JSON.parse(localStorage.getItem('userMenus') as string)

      const mainStore = useMainStore()

      if (token && userInfo && userMenus) {
        this.token = token as string
        this.userInfo = userInfo
        this.userMenus = userMenus

        mainStore.fetchRoleList()
        mainStore.fetchDepartmentList()
        mainStore.fetchMenuList()

        //获取用户的按钮权限
        const permission = mapMenuslistToPermission(this.userMenus)

        this.permission = permission

        // 2.配置动态路由(重要)
        const routes = mapMenuToRoute(userMenus)
        routes.forEach((route) => {
          router.addRoute('main', route)
        })
      }
    }
  }
})
