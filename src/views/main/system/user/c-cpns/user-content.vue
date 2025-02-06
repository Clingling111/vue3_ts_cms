<template>
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary" @click="handleNewUserClick">新建用户</el-button>
    </div>

    <div class="table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="55" />
        <el-table-column align="center" type="index" label="序号" width="55" />
        <el-table-column
          align="center"
          label="用户名"
          prop="name"
          width="120px"
        />
        <el-table-column
          align="center"
          label="真实姓名"
          prop="realname"
          width="120px"
        />
        <el-table-column
          align="center"
          label="手机号码"
          prop="cellphone"
          width="150px"
        />
        <el-table-column align="center" label="状态" prop="enable" width="80px">
          <template #default="scope">
            <el-button
              size="small"
              plain
              :type="scope.row.enable ? 'success' : 'danger'"
            >
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" label="创建时间" prop="createAt">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="更新时间" prop="updateAt">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button
              size="small"
              text
              :icon="Edit"
              type="primary"
              @click="handelEditClick(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              text
              :icon="Delete"
              @click="handelDeleteClick(scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="footer">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        size="small"
        layout="sizes, prev, pager, next, jumper,total"
        :total="usersListTotalCount"
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
const systemStore = useSystemStore()

// 页码相关的信息
const currentPage = ref(1)
const pageSize = ref(10)

fetchUserListData()

// 使systemStore中的数据变成响应式
const { usersList, usersListTotalCount } = storeToRefs(systemStore)

const handleCurrentChange = () => {
  // 获取当前页面的数据
  fetchUserListData()
}

// pagesize发生变化时
const handleSizeChange = () => {
  fetchUserListData()
}

// 定义函数，用于发送网络请求
function fetchUserListData(queryInfo?: any) {
  // 1.获取offset/size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * 10

  // 2.发送网络请求
  const pageInfo = { size, offset }
  systemStore.postUserListAction({ ...pageInfo, ...queryInfo })
}

// 删除数据
const handelDeleteClick = (id: number) => {
  systemStore.deteleUserDataById(id)
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

defineExpose({ fetchUserListData })
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
