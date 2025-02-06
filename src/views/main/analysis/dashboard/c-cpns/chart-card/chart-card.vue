<template>
  <div class="card">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>{{ header }}</span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  header?: string
}

withDefaults(defineProps<IProps>(), {
  header: '卡片的标题'
})
</script>

<style lang="less" scoped></style>
