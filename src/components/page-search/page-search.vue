<template>
  <div class="search" v-if="isQuery">
    <el-form
      :model="searchForm"
      ref="searchFormRef"
      label-width="80px"
      size="large"
    >
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItem" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="datetimerange"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  format="YYYY-MM-DD"
                  date-format="YYYY/MM/DD"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
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
import usePagePermission from '@/hooks/usePagePermission'

// 自定义事件和props
interface IProps {
  searchConfig: {
    formItem: any[]
    pageName: string
  }
}
const props = defineProps<IProps>()
const emit = defineEmits(['queryClick', 'resetClick'])

const initalForm: any = []
for (const item of props.searchConfig.formItem) {
  initalForm[item.prop] = ''
}

const searchForm = reactive(initalForm)
const searchFormRef = ref<InstanceType<typeof ElForm>>()

// 判断用户是否有搜索权限
const isQuery = usePagePermission(`${props.searchConfig.pageName}`)

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
