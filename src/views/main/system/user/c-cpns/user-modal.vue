<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '新建用户' : '编辑用户'"
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
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              v-model="formData.realname"
              placeholder="请输入真实姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" v-if="isNewRef">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="cellphone">
            <el-input
              v-model="formData.cellphone"
              placeholder="请输入电话号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select
              placeholder="请选择角色"
              size="large"
              style="width: 240px"
              v-model="formData.roleId"
            >
              <el-option
                v-for="item in roleList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select
              placeholder="请选择部门"
              size="large"
              style="width: 240px"
              v-model="formData.departmentId"
            >
              <el-option
                v-for="item in departmentList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleCreateUserClick">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useMainStore } from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'

const formData = reactive<any>({
  name: '',
  realname: '',
  cellphone: '',
  password: '',
  departmentId: '',
  roleId: ''
})
const dialogVisible = ref(false)

const isNewRef = ref(true)
const editId = ref(-1)

const changeDialogVisible = (isNew: boolean = true, item?: any) => {
  isNewRef.value = isNew
  dialogVisible.value = true
  if (!isNew && item) {
    // 如果是点击编辑按钮
    for (const key in formData) {
      formData[key] = item[key]
    }
    editId.value = item.id
  } else {
    formRef.value?.resetFields()
  }
}

// 表单验证
const formRef = ref<InstanceType<typeof ElForm>>()
const formRules = {
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
  ],
  realname: [
    { required: true, message: 'Please input realname', trigger: 'blur' },
    { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
  ],
  cellphone: [
    { required: true, message: 'Please input cellphone', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 3, max: 11, message: 'Length should be 3 to 11', trigger: 'blur' }
  ],
  departmentId: [
    { required: true, message: 'Please select department', trigger: 'blur' }
  ],
  roleId: [{ required: true, message: 'Please select role', trigger: 'blur' }]
}

// 获取角色和部门数据
const mainSotre = useMainStore()
const { roleList, departmentList } = storeToRefs(mainSotre)

// 创建用户
const systemStore = useSystemStore()
const handleCreateUserClick = () => {
  formRef.value?.validate((vaild) => {
    if (vaild) {
      if (isNewRef.value) {
        systemStore.createUserByInfo(formData)
        dialogVisible.value = false
        formRef.value?.resetFields()
      } else {
        systemStore.editUserInfoAction(editId.value, formData)
        dialogVisible.value = false
      }
    } else {
      ElMessage({
        message: '请完善表单信息~~',
        type: 'error'
      })
    }
  })
}

defineExpose({ changeDialogVisible })
</script>

<style lang="less" scoped>
.form {
  padding: 0 20px;
}
</style>
