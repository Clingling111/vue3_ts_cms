<template>
  <div>
    <categorySearch @search-click="search" @reset-click="reset" />
    <categoryContent
      ref="contentRef"
      @add-cate-click="addCate"
      @edit-cate-click="editCate"
    />
    <categoryModal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import categorySearch from './c-cpns/category-search.vue'
import categoryContent from './c-cpns/category-content.vue'
import categoryModal from './c-cpns/category-modal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof categoryContent>>()
const modalRef = ref<InstanceType<typeof categoryModal>>()
const search = (queryInfo: any) => {
  contentRef.value?.fetchTabelData('category', queryInfo)
}

const reset = () => {
  contentRef.value?.fetchTabelData('category')
}
const addCate = () => {
  if (modalRef.value) {
    modalRef.value.showModal(true)
  }
}

const editCate = (item: any) => {
  if (modalRef.value) {
    modalRef.value.showModal(false, item)
  }
}
</script>

<style lang="less" scoped></style>
