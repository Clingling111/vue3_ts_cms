<template>
  <div class="list">
    <!-- <h2
      class="animate__animated animate__rubberBand"
      style="display: inline-block"
    >
      list
    </h2> -->

    <template v-for="item in systemStore.storyList" :key="item.id">
      <storyListItem :item="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import storyListItem from './cpns/story-list-item.vue'

const systemStore = useSystemStore()
// 获取故事列表
systemStore.getStoryListAction()
</script>

<style lang="less" scoped>
.masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 列 */
  grid-auto-rows: minmax(100px, auto); /* 每行最小高度为 100px */
  gap: 16px; /* 项目之间的间距 */
  padding: 16px;
}
</style>
