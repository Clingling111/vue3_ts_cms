<template>
  <div class="user">
    <user-search @query-click="queryClick" @reset-click="handelResetClick" />
    <user-content
      ref="userContentRef"
      @new-click="handelNewClick"
      @edit-click="handelEditClick"
    />
    <user-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'
import userModal from './c-cpns/user-modal.vue'
import { ref } from 'vue'

const userContentRef = ref<InstanceType<typeof userContent>>()
const queryClick = (searchForm: any) => {
  userContentRef.value?.fetchUserListData(searchForm)
}

const handelResetClick = () => {
  userContentRef.value?.fetchUserListData()
}

const modalRef = ref<InstanceType<typeof userModal>>()
const handelNewClick = () => {
  modalRef.value?.changeDialogVisible()
}

const handelEditClick = (item: any) => {
  modalRef.value?.changeDialogVisible(false, item)
}
</script>

<style lang="less" scoped></style>
