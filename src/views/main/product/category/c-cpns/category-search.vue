<template>
  <div class="search">
    <el-form
      :model="searchForm"
      label-width="auto"
      ref="formRef"
      :rules="rules"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="类别名称" prop="name">
            <el-input v-model="searchForm.name" placeholder="请输入类别名称" />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item prop="createAt" label="创建时间">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              format="YYYY-MM-DD"
              date-format="YYYY/MM/DD"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      </el-row>
    </el-form>

    <div class="btn">
      <el-button :icon="Refresh" @click="reset">重置</el-button>
      <el-button :icon="Search" type="primary" @click="search">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import type { FormRules, FormInstance } from 'element-plus'
const searchForm = reactive({
  name: '',
  createAt: ''
})

// 定义表单校验规则
const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input category name', trigger: 'blur' }
  ]
})

const emit = defineEmits(['searchClick', 'resetClick'])
const formRef = ref<FormInstance>()
const search = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('submit!')
      emit('searchClick', searchForm)
    } else {
      console.log('error submit!')
    }
  })
}
const reset = () => {
  formRef.value?.resetFields()
  emit('resetClick')
}
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
  }

  .btn {
    text-align: right;
  }
}
</style>
