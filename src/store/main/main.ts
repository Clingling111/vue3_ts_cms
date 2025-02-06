// main模块中多个页面要用到的公共数据

import {
  getAllDepartmenList,
  getAllMenuList,
  getAllRoleList
} from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  roleList: any[]
  departmentList: any[]
  entireMenus: any[]
}

export const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    roleList: [],
    departmentList: [],
    entireMenus: []
  }),
  actions: {
    async fetchRoleList() {
      const res = await getAllRoleList()
      this.roleList = res.data.list
    },
    async fetchDepartmentList() {
      const res = await getAllDepartmenList()
      this.departmentList = res.data.list
    },
    async fetchMenuList() {
      const res = await getAllMenuList()
      this.entireMenus = res.data.list
    }
  }
})
