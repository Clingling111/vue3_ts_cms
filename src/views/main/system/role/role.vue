<template>
  <div class="role">
    <page-search
      :search-config="searchConfig"
      @query-click="handelQueryClick"
      @reset-click="handelResetClick"
    />
    <page-content
      ref="contentRef"
      :content-config="contentConfig"
      @new-click="handelNewClick"
      @edit-click="handelEditClick"
    />
    <page-modal
      ref="modalRef"
      :modal-config="modalConfig"
      :other-info="otherInfo"
    >
      <template #menuList>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheck"
        />
      </template>
    </page-modal>
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
import { useMainStore } from '@/store/main/main'
import { storeToRefs } from 'pinia'
import type { ElTree } from 'element-plus'
import { ref, nextTick } from 'vue'
import { mapMenyListToIds } from '@/utlis/mapMenuToRoute'

const { contentRef, handelQueryClick, handelResetClick } = usePageContent()
const { modalRef, handelNewClick, handelEditClick } = usePageModal(editCallback)

// 获取完整的菜单
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)

const otherInfo = ref({})
const handleCheck = (data1: any, data2: any) => {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}

const treeRef = ref<InstanceType<typeof ElTree>>()
function editCallback(itemData: any) {
  nextTick(() => {
    const menuIds = mapMenyListToIds(itemData.menuList)
    console.log(menuIds)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
</script>

<style lang="less" scoped></style>
