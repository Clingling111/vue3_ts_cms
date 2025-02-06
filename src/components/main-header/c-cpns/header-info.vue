<template>
  <div class="info">
    <div class="operation">
      <span>
        <el-icon><Bell /></el-icon>
      </span>
      <span>
        <span class="dot"></span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <el-icon><Postcard /></el-icon>
      </span>
    </div>
    <el-dropdown>
      <span class="user-info">
        <el-avatar
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        />
        <span class="name">coderwwb</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logoutClick">
            <el-icon><SwitchButton /></el-icon>
            <span>退出系统</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon><Document /></el-icon>
            <span>个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><Lock /></el-icon>
            <span>修改密码</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
// 退出登录
const logoutClick = () => {
  // 清除token
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.info {
  display: flex;
  align-items: center;

  // 去除鼠标悬停时显示的黑色边框
  :deep(.el-tooltip__trigger:focus-visible) {
    outline: none;
  }

  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }

  .user-info {
    display: flex;
    align-items: center;

    .name {
      margin-left: 4px;
    }
  }
}

.operation {
  display: inline-flex;
  margin-right: 20px;
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background-color: #f2f2f2;
    }

    .dot {
      position: absolute;
      top: 7px;
      right: 8px;
      width: 6px;
      height: 6px;
      background-color: red;
      border-radius: 100%;
      z-index: 10;
    }
  }
}
</style>
