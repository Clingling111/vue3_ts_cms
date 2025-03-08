<template>
  <div class="content">
    <div class="title">
      <div class="text">类别列表</div>
      <el-button type="primary" @click="addCate">新建数据</el-button>
    </div>

    <div class="table">
      <el-table :data="pageList" style="width: 100%">
        <el-table-column
          type="selection"
          width="55"
          label="选择"
          align="center"
        />
        <el-table-column type="index" width="55" label="序号" align="center" />
        <el-table-column
          prop="name"
          label="类别名称"
          width="180"
          align="center"
        />
        <el-table-column label="创建时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template></el-table-column
        >
        <el-table-column prop="updateAt" label="更新时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <template #default="scope">
            <el-button
              size="small"
              text
              :icon="Edit"
              type="primary"
              @click="editCate(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              text
              :icon="Delete"
              @click="deleteCate(scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageListTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utlis/format'

const systemStore = useSystemStore()
//初始化数据
systemStore.postPageListAction('category')
const { pageList, pageListTotalCount } = storeToRefs(systemStore)

// 分页数据
const currentPage = ref(1)
const pageSize = ref(10)
const handleSizeChange = (e: any) => {
  console.log(e, pageSize.value)
}
const handleCurrentChange = (e: any) => {
  console.log(e)
}

// 抽取更新表格的方法
const fetchTabelData = (pageName: string, queryInfo?: any) => {
  systemStore.postPageListAction(pageName, queryInfo)
  console.log(pageName, queryInfo)
}

// 修改
const editCate = (item: any) => {
  console.log('edit', item)
  emit('editCateClick', item)
}
// 删除
const deleteCate = (item: any) => {
  systemStore.deletePageDataAction('category', item.id)
}

const addCate = () => {
  emit('addCateClick')
}

const emit = defineEmits(['addCateClick', 'editCateClick'])
defineExpose({ fetchTabelData })
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .table {
    margin-top: 10px;
  }

  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
