<template>
  <div class="breadcurmbs">
    <el-breadcrumb separator="/">
      <template v-for="item in breadCrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.url">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLoginStore } from '@/store/login/login'
import { mapPathToBreadCrumbs } from '@/utlis/mapMenuToRoute'

const loginStore = useLoginStore()
const route = useRoute()
const breadCrumbs = computed(() => {
  return mapPathToBreadCrumbs(route.path, loginStore.userMenus)
})
</script>

<style lang="less" scoped></style>
