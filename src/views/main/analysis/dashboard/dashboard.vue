<template>
  <el-row :gutter="20">
    <template v-for="item in amountList" :key="item.amount">
      <el-col :span="6">
        <count-card :item-data="item" />
      </el-col>
    </template>
  </el-row>

  <!-- 图表中部区域 -->
  <el-row :gutter="10">
    <el-col :span="7">
      <chart-card header="分类商品数量(饼图)">
        <pie-echart :pie-data="showGoodsCategoryCount" />
      </chart-card>
    </el-col>
    <el-col :span="10">
      <chart-card header="分类商品数量(全国分布图)">
        <map-echart :map-data="showGoodsAddressSale" />
      </chart-card>
    </el-col>
    <el-col :span="7">
      <chart-card header="分类商品数量(玫瑰图)">
        <rose-echart :rose-data="showGoodsCategoryCount" />
      </chart-card>
    </el-col>
  </el-row>

  <!-- 图表底部区域 -->
  <el-row :gutter="10">
    <el-col :span="12">
      <chart-card header="分类商品销量(折线图)">
        <line-echart
          :label="showGoodsSaleCount.label"
          :value="showGoodsSaleCount.value"
        />
      </chart-card>
    </el-col>
    <el-col :span="12">
      <chart-card header="商品分类收藏数(柱状图)">
        <bar-echart
          :label="showGoodsFavorCount.label"
          :value="showGoodsFavorCount.value"
        />
      </chart-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import countCard from './c-cpns/count-card/count-card.vue'
import chartCard from './c-cpns/chart-card/chart-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'

import pieEchart from '@/components/page-echarts/src/pie-echart.vue'
import lineEchart from '@/components/page-echarts/src/line-echart.vue'
import roseEchart from '@/components/page-echarts/src/rose-echart.vue'
import barEchart from '@/components/page-echarts/src/bar-echart.vue'
import mapEchart from '@/components/page-echarts/src/map-echart.vue'
// 获取count-card数据
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisData()
const {
  amountList,
  goodsCategoryCount,
  goodsCategorySaleCount,
  goodsCategoryFavorCount,
  goodsAddressSale
} = storeToRefs(analysisStore)

// 获取图表数据
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})

const showGoodsSaleCount = computed(() => {
  const label: string[] = []
  const value: number[] = []
  goodsCategorySaleCount.value.forEach((item) => {
    label.push(item.name)
    value.push(item.goodsCount)
  })

  return { label, value }
})

const showGoodsFavorCount = computed(() => {
  const label: string[] = []
  const value: number[] = []
  goodsCategoryFavorCount.value.forEach((item) => {
    label.push(item.name)
    value.push(item.goodsFavor)
  })

  return { label, value }
})

const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => ({
    name: item.address,
    value: item.count
  }))
})
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}

.chart {
  height: 200px;
}
</style>
