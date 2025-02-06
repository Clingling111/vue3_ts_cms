<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="!isCollapse ? '210px' : '60px'">
        <main-menu :isFold="isCollapse" />
      </el-aside>
      <!-- <button @click="logout">退出登录</button> -->
      <el-container>
        <el-header height="50px">
          <main-header @change-is-fold-event="changeIsFold" />
        </el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
// const Router = useRouter()

// const logout = () => {
//   localStorage.removeItem('token')
//   Router.push('/login')
// }

const isCollapse = ref(false)
const changeIsFold = (flag: boolean) => {
  isCollapse.value = flag
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}

.main-content {
  height: 100%;
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;

    // 折叠动画
    transition: width 0.8s ease;

    // 删除滚动条
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
