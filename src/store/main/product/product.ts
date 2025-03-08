import { defineStore } from 'pinia'
import {
  postPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const useProductStore = defineStore('product', {
  state: () => ({}),
  actions: {}
})

export default useProductStore
