import {
  postUserListData,
  deleteUserData,
  createUser,
  editUser,
  postPageListData,
  deletePageData,
  createPageData,
  editPageData,
  getStoryList
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import { useMainStore } from '../main'
import { ElMessage } from 'element-plus'
import type { storyItem } from '@/types'

interface ISystemState {
  usersList: any[]
  usersListTotalCount: number
  pageList: any[]
  pageListTotalCount: number
  storyList: storyItem[]
}
const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersListTotalCount: 0,
    pageList: [],
    pageListTotalCount: 0,
    storyList: []
  }),

  actions: {
    async postUserListAction(queryInfo: any) {
      const res = await postUserListData(queryInfo)
      this.usersList = res.data.list
      this.usersListTotalCount = res.data.totalCount
    },
    async deteleUserDataById(id: number) {
      // 1.删除数据
      await deleteUserData(id)
      // 2.重新请求新的数据
      this.postUserListAction({ offset: 0, size: 10 })
    },
    async createUserByInfo(info: any) {
      await createUser(info)
      this.postUserListAction({ offset: 0, size: 10 })
    },
    async editUserInfoAction(id: number, info: any) {
      await editUser(id, info)
      this.postUserListAction({ offset: 0, size: 10 })
    },
    async postPageListAction(pageName: string, queryInfo?: any) {
      const res = await postPageListData(pageName, queryInfo)
      const { list, totalCount } = res.data

      this.pageList = list
      this.pageListTotalCount = totalCount
    },
    async deletePageDataAction(pageName: string, id: number) {
      const res = await deletePageData(pageName, id)
      if (res.code !== 200) {
        ElMessage(res.data)
      }
      this.postPageListAction(pageName, { offset: 0, size: 10 })

      // 获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetchRoleList()
      mainStore.fetchDepartmentList()
      mainStore.fetchMenuList()
    },
    async createPageDataAction(pageName: string, pageInfo: any) {
      await createPageData(pageName, pageInfo)
      this.postPageListAction(pageName, { offset: 0, size: 10 })

      // 获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetchRoleList()
      mainStore.fetchDepartmentList()
      mainStore.fetchMenuList()
    },
    async editPageInfoAction(pageName: string, id: number, pageInfo: any) {
      const res = await editPageData(pageName, id, pageInfo)
      if (res.code !== 200) {
        ElMessage(res.data)
      }
      this.postPageListAction(pageName, { offset: 0, size: 10 })

      // 获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetchRoleList()
      mainStore.fetchDepartmentList()
      mainStore.fetchMenuList()
    },

    async getStoryListAction() {
      const res = await getStoryList()
      this.storyList = res.data.list
      console.log(this.storyList)
    }
  }
})

export default useSystemStore
