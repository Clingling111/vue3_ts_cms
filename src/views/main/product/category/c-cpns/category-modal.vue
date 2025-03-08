<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '新建类别' : '编辑类别'"
      width="500"
      center
    >
      <div class="form">
        <el-form
          label-width="80px"
          size="large"
          :model="formData"
          :rules="formRules"
          ref="formRef"
        >
          <el-form-item label="类别名称" prop="name">
            <el-input v-model="formData.name" placeholder="类别名称"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleCreateCateClick">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import type { FormInstance } from 'element-plus'

import { ref, reactive } from 'vue'
const dialogVisible = ref(false)
const isNewRef = ref(false)
const formRef = ref<FormInstance>()
const cateId = ref(0)
const systemStore = useSystemStore()
let formData = reactive({
  name: ''
})
const formRules = reactive({
  name: [
    { required: true, message: 'Please input category name', trigger: 'blur' }
  ]
})

const showModal = (isNew: boolean, item?: any) => {
  if (item) {
    cateId.value = item.id
  }
  isNewRef.value = isNew
  if (!isNew) {
    // 点击编辑
    formData.name = item.name
  } else {
    formData.name = ''
  }
  dialogVisible.value = true
}

const handleCreateCateClick = () => {
  formRef.value?.validate((valid) => {
    if (valid && isNewRef.value) {
      systemStore.createPageDataAction('category', formData)
      dialogVisible.value = false
      formRef.value?.resetFields()
    } else {
      systemStore.editPageInfoAction('category', cateId.value, formData)
      dialogVisible.value = false
      formRef.value?.resetFields()
    }
  })
}

defineExpose({ showModal })
</script>

<style lang="less" scoped></style>
