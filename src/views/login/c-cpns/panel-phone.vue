<template>
  <div class="panel-phone">
    <el-tab-pane name="phone">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><Iphone /></el-icon>
          <span class="text">手机登录</span>
        </span>
      </template>
      <div class="input-box">
        <el-form :model="phoneForm">
          <el-form-item label="手机号">
            <el-input v-model="phoneForm.phone" />
          </el-form-item>
          <el-form-item label="验证码">
            <div class="verity-code">
              <el-input v-model="phoneForm.code" />
              <el-button class="btn" type="primary">获取验证码</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-tab-pane>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { IPhone } from '../types/index'

const phoneForm = reactive<IPhone>({
  phone: '',
  code: ''
})
</script>

<style lang="less" scoped>
.verity-code {
  display: flex;

  .btn {
    margin-left: 10px;
  }
}
</style>
