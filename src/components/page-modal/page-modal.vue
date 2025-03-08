<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="
        isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle
      "
      width="500"
      center
    >
      <div class="form">
        <el-form
          label-width="80px"
          size="large"
          :model="formData"
          ref="formRef"
        >
          <template v-for="item in modalConfig.formItem" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.label"
                  size="large"
                  style="width: 240px"
                  v-model="formData[item.prop]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.id"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'upload'">
                <el-upload
                  v-model:file-list="fileList"
                  class="upload-demo"
                  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                  multiple
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :limit="3"
                  :on-exceed="handleExceed"
                >
                  <el-button type="primary">Click to upload</el-button>
                  <template #tip>
                    <div class="el-upload__tip">
                      jpg/png files with a size less than 500KB.
                    </div>
                  </template>
                </el-upload>
              </template>
              <template v-else-if="item.type === 'image'">
                <img
                  src="https://s11.mogucdn.com/mlcdn/17f85e/180927_5i77e04lhaalbg3dai0j4588lbahh_640x960.jpg_560x999.jpg"
                  alt=""
                  style="width: 55px; height: 55px"
                />
              </template>
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
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
import type { ElForm } from 'element-plus'
import useSystemStore from '@/store/main/system/system'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
// upload
const fileList = ref<UploadUserFile[]>([])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}

// end

interface IProps {
  modalConfig: {
    pageName: string
    header: {
      newTitle: string
      editTitle: string
    }
    formItem: any[]
  }
  otherInfo?: {}
}
const props = defineProps<IProps>()

const initialData: any = {}

for (const item of props.modalConfig.formItem) {
  initialData[item.prop] = ''
}
const formData = reactive<any>(initialData)
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

const formRef = ref<InstanceType<typeof ElForm>>()

// 创建部门
const systemStore = useSystemStore()
const handleCreateUserClick = () => {
  let infoData: any = {}
  for (const key in formData) {
    infoData[key] = formData[key]
  }

  if (props.otherInfo) {
    infoData = { ...infoData, ...props.otherInfo }
  }
  if (isNewRef.value) {
    console.log(formData)

    systemStore.createPageDataAction(props.modalConfig.pageName, infoData)
    dialogVisible.value = false
    formRef.value?.resetFields()
  } else {
    console.log(infoData)
    systemStore.editPageInfoAction(
      props.modalConfig.pageName,
      editId.value,
      infoData
    )
    dialogVisible.value = false
  }
}

defineExpose({ changeDialogVisible })
</script>

<style lang="less" scoped>
.form {
  padding: 0 20px;
}
</style>
