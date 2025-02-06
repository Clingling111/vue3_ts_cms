<template>
  <div class="header">
    <div class="flod-icon" @click="handleFlodIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <header-crumbs />
      <header-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerCrumbs from './c-cpns/header-crumbs.vue'
import headerInfo from './c-cpns/header-info.vue'

const isFold = ref(false)
const emit = defineEmits(['changeIsFoldEvent'])

const handleFlodIconClick = () => {
  isFold.value = !isFold.value
  // 给父组件Main发送事件和参数isFold
  emit('changeIsFoldEvent', isFold.value)
}
</script>

<style lang="less" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;

  .flod-icon {
    margin-top: 5px;
  }

  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 16px;
  }
}
</style>
