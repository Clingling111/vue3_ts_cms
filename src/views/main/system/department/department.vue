<template>
  <div class="department">
    <page-search
      @query-click="handelQueryClick"
      @reset-click="handelResetClick"
      :searchConfig="searchConfig"
    />
    <page-content
      ref="contentRef"
      @new-click="handelNewClick"
      @edit-click="handelEditClick"
      :content-config="contentConfig"
    />
    <page-modal ref="modalRef" :modal-config="modalConfigRef" />
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import { computed } from 'vue'
import { useMainStore } from '@/store/main/main'

const modalConfigRef = computed(() => {
  const mainSotre = useMainStore()
  const departments = mainSotre.departmentList.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItem.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options?.push(...departments)
    }
  })

  return modalConfig
})
console.log(modalConfig.formItem)

const { contentRef, handelQueryClick, handelResetClick } = usePageContent()
const { modalRef, handelNewClick, handelEditClick } = usePageModal()
</script>

<style lang="less" scoped></style>
