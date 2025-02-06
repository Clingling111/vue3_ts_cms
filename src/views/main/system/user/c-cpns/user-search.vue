<template>
  <div class="search">
    <el-form
      :model="searchForm"
      ref="searchFormRef"
      abel-width="80px"
      size="large"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input
              placeholder="请输入查询的用户名"
              v-model="searchForm.name"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              placeholder="请输入查询的真实姓名"
              v-model="searchForm.realname"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码" prop="cellphone">
            <el-input
              placeholder="请输入查询的手机号码"
              v-model="searchForm.cellphone"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select
              v-model="searchForm.enable"
              placeholder="请选择查询的状态"
              size="large"
            >
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="datetimerange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              format="YYYY-MM-DD"
              date-format="YYYY/MM/DD"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- 按钮 -->
    <div class="operation">
      <el-button
        size="large"
        :icon="Search"
        type="primary"
        @click="handelSearchClick"
        >查询</el-button
      >
      <el-button size="large" :icon="Refresh" @click="handelRestClick"
        >重置</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search, Refresh } from '@element-plus/icons-vue'
import { ElForm } from 'element-plus'
import { ref, reactive } from 'vue'

const searchForm = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt: ''
})

const emit = defineEmits(['queryClick', 'resetClick'])

const searchFormRef = ref<InstanceType<typeof ElForm>>()

const handelRestClick = () => {
  searchFormRef.value?.resetFields()
  emit('resetClick')
}

const handelSearchClick = () => {
  emit('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }

  .operation {
    text-align: right;
    margin-right: 30px;
  }
}
</style>
