<template>
  <div class="goods">
    <pageSearch
      :searchConfig="searchConfig"
      @query-click="handelQueryClick"
      @reset-click="handelResetClick"
    />
    <pageContent
      :contentConfig="contentConfig"
      ref="contentRef"
      @new-click="handelNewClick"
      @edit-click="handelEditClick"
    />

    <pageModal ref="modalRef" :modalConfig="modalConfig" />
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

const { contentRef, handelQueryClick, handelResetClick } = usePageContent()
const { modalRef, handelNewClick, handelEditClick } = usePageModal()
</script>

<style lang="less" scoped></style>
