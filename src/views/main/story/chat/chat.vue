<template>
  <div class="editorWrapper">
    <QuillEditor :options="options" />
  </div>
</template>

<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import { reactive } from 'vue'

const options = reactive({
  debug: 'info',
  modules: {
    toolbar: ['bold', 'italic', 'underline']
  },
  placeholder: 'Compose an epic...',
  readOnly: false,
  theme: 'snow'
})
</script>

<style lang="less" scoped>
.editorWrapper {
  background: #fff;

  :deep(.ql-container) {
    height: 500px;
  }
}
</style>
