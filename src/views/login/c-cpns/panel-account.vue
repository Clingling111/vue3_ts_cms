<template>
  <div class="panel-account">
    <el-tab-pane name="account">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><User /></el-icon>
          <span class="text">帐号登录</span>
        </span>
      </template>
      <div class="input-box">
        <el-form
          :model="accountForm"
          :rules="accountRules"
          status-icon
          ref="accountFormRef"
        >
          <el-form-item label="帐号" prop="name">
            <el-input v-model="accountForm.name" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="accountForm.password"
              show-password
              type="password"
            />
          </el-form-item>
        </el-form>
      </div>
    </el-tab-pane>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import { useLoginStore } from '@/store/login/login'
import type { IAccount } from '../types/index'

// 1.定义account数据
const accountForm = reactive<IAccount>({
  name: localStorage.getItem('name') ?? '',
  password: localStorage.getItem('password') ?? ''
})

// 定义表单校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 6, max: 20, message: 'Length should be 6 to 20', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 3, max: 6, message: 'Length should be 3 to 6', trigger: 'blur' }
  ]
}

// 登录逻辑
const accountFormRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()

function loginAction(isRemPwd: boolean) {
  // 表单验证
  accountFormRef.value?.validate((valid) => {
    if (valid) {
      // 1.获取用户输入的帐号和密码
      const name = accountForm.name
      const password = accountForm.password
      // 2.向服务器发送网络请求(携带帐号和密码)
      loginStore.accountLoginAction({ name, password }).then(() => {
        // 是否需要记住密码
        if (isRemPwd) {
          localStorage.setItem('name', name)
          localStorage.setItem('password', password)
        } else {
          localStorage.removeItem('name')
          localStorage.removeItem('password')
        }
      })
    } else {
      ElMessage({
        message: '请输入正确的帐号和密码!',
        type: 'error',
        plain: true
      })
    }
  })
}

defineExpose({ loginAction })
</script>

<style lang="less" scoped></style>
