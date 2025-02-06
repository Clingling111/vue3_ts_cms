<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" :stretch="true" v-model="activeName">
        <panelAccount ref="acountRef" />
        <panelPhone />
      </el-tabs>
      <div class="control">
        <el-checkbox
          v-model="isRemPwd"
          name="type"
          label="记住密码"
        ></el-checkbox>
        <span class="forget">忘记密码</span>
      </div>
      <el-button type="primary" @click="handleLoginClick">立即登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import panelAccount from './panel-account.vue'
import panelPhone from './panel-phone.vue'

const activeName = ref('account')

// 是否记住密码
const isRemPwd = ref<boolean>(
  localStorage.getItem('isRemPwd') == 'true' ? true : false
)

watch(isRemPwd, (newVal) => {
  localStorage.setItem('isRemPwd', JSON.stringify(newVal))
})

// 获取子组件的ref
const acountRef = ref<InstanceType<typeof panelAccount>>()

const handleLoginClick = () => {
  if (activeName.value === 'account') {
    // 1.获取子组件的实例
    // 2.调用方法
    acountRef.value?.loginAction(isRemPwd.value)
    if (isRemPwd.value) {
      console.log('记住密码')
    }
  } else {
    console.log('用户在进行手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  text-align: center;

  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .forget {
      color: #606266;
      font-size: 14px;
    }
  }

  .el-button--primary {
    margin-top: 4px;
    width: 100%;
    height: 40px;
  }
}

.custom-tabs-label {
  display: flex;
  align-items: center;

  .text {
    margin-left: 5px;
  }
}
</style>
