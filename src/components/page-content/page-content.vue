<template>
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig.header?.title ?? '数据列表' }}</h3>
      <el-button type="primary" @click="handleNewUserClick" v-if="isCreate">{{
        contentConfig.header?.btnTitle ?? '新建数据'
      }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border style="width: 100%" row-key="id">
        <template v-for="item in contentConfig.propList" :key="item.prop">
          <template v-if="item.type === 'timer'">
            <el-table-column
              align="center"
              :label="item.label"
              :prop="item.prop"
            >
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <el-table-column
              :label="item.label"
              align="center"
              v-if="isUpdate && isDelete"
            >
              <template #default="scope">
                <el-button
                  size="small"
                  text
                  :icon="Edit"
                  type="primary"
                  @click="handelEditClick(scope.row)"
                  v-if="isUpdate"
                >
                  编辑
                </el-button>
                <el-button
                  size="small"
                  type="danger"
                  text
                  :icon="Delete"
                  @click="handelDeleteClick(scope.row.id)"
                  v-if="isDelete"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column v-bind="item" align="center" />
          </template>
        </template>
      </el-table>
    </div>

    <div class="footer">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        size="small"
        layout="sizes, prev, pager, next, jumper,total"
        :total="pageListTotalCount"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useSystemStore from '@/store/main/system/system'
import { Delete, Edit } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utlis/format'
import usePagePermission from '@/hooks/usePagePermission'

interface IProps {
  contentConfig: {
    header?: {
      title?: string
      btnTitle?: string
    }
    propList: any[]
    pageName: string
  }
}

const props = defineProps<IProps>()

// 根据按钮权限判断用户是否拥有增删改查的权限
const isCreate = usePagePermission(`${props.contentConfig.pageName}:create`)
const isUpdate = usePagePermission(`${props.contentConfig.pageName}:update`)
const isDelete = usePagePermission(`${props.contentConfig.pageName}:delete`)
const isQuery = usePagePermission(`${props.contentConfig.pageName}:query`)

const systemStore = useSystemStore()
// 页码相关的信息
const currentPage = ref(1)
const pageSize = ref(10)

// 订阅action
systemStore.$onAction(({ name, after }) => {
  // action执行完成时执行
  after(() => {
    if (
      name === 'deletePageDataAction' ||
      name === 'createPageDataAction' ||
      name === 'editUserInfoAction'
    ) {
      currentPage.value = 1
    }
  })
})

fetchPageListData()
// 使systemStore中的数据变成响应式
const { pageList, pageListTotalCount } = storeToRefs(systemStore)

const handleCurrentChange = () => {
  // 获取当前页面的数据
  fetchPageListData()
}

// pagesize发生变化时
const handleSizeChange = () => {
  fetchPageListData()
}

// 定义函数，用于发送网络请求
function fetchPageListData(queryInfo?: any) {
  if (!isQuery) return
  // 1.获取offset/size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * 10

  // 2.发送网络请求
  const pageInfo = { size, offset }
  systemStore.postPageListAction(props.contentConfig.pageName, {
    ...pageInfo,
    ...queryInfo
  })
}

// 删除数据
const handelDeleteClick = (id: number) => {
  systemStore.deletePageDataAction(props.contentConfig.pageName, id)
}

// 新建用户
const emit = defineEmits(['newClick', 'editClick'])
const handleNewUserClick = () => {
  emit('newClick')
}

// 编辑用户
const handelEditClick = (item: any) => {
  emit('editClick', item)
}

defineExpose({ fetchPageListData })
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .title {
      font-size: 22px;
    }
  }

  .footer {
    margin-top: 14px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
