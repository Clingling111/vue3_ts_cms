<template>
  <el-card class="item">
    <template #header>
      <div class="card-header">
        <span>{{ item.title }}</span>
      </div>
    </template>
    <div class="content" v-html="item.content"></div>
    <template #footer>{{ formatUTC(item.createAt) }}</template>
  </el-card>
</template>

<script setup lang="ts">
import type { storyItem } from '@/types'
import { formatUTC } from '@/utlis/format'
withDefaults(defineProps<{ item: storyItem }>(), {
  item: () => ({
    id: 0,
    title: '暂无标题',
    content: '',
    createAt: ''
  })
})
</script>

<style lang="less" scoped>
.item {
  margin-bottom: 10px;

  .card-header {
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
