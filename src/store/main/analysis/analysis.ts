import {
  getAmountListData,
  getGoodsCategoryCount,
  getGoodsCategorySaleCount,
  getGoodsCategoryFavorCount,
  getGoodsAddressSale
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountList: any[]
  goodsCategoryCount: any[]
  goodsCategorySaleCount: any[]
  goodsCategoryFavorCount: any[]
  goodsAddressSale: any[]
}
const useAnalysisStore = defineStore('analysisStore', {
  state: (): IAnalysisState => ({
    amountList: [],
    goodsCategoryCount: [],
    goodsCategorySaleCount: [],
    goodsCategoryFavorCount: [],
    goodsAddressSale: []
  }),
  actions: {
    async fetchAnalysisData() {
      getAmountListData().then((res) => {
        this.amountList = res.data
      })

      getGoodsCategoryCount().then((res) => {
        this.goodsCategoryCount = res.data
      })

      getGoodsCategorySaleCount().then((res) => {
        this.goodsCategorySaleCount = res.data
      })

      getGoodsCategoryFavorCount().then((res) => {
        this.goodsCategoryFavorCount = res.data
      })

      getGoodsAddressSale().then((res) => {
        this.goodsAddressSale = res.data
      })
    }
  }
})

export default useAnalysisStore
