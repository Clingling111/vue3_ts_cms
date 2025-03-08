<template>
  <div class="main-menu">
    <div class="logo">
      <img class="image" src="@/assets/img/logo.svg" />
      <h2 class="title" v-show="!isFold">后台管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        :default-active="defaultActive"
        active-text-color="#fff"
        background-color="#001529"
        text-color="#b7bdc3"
        :collapse="isFold"
      >
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                @click="hanleMenuItemClick(subitem)"
                :index="subitem.id + ''"
                >{{ subitem.name }}</el-menu-item
              >
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login/login'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mapPathToMenu } from '@/utlis/mapMenuToRoute'
import { watch } from 'vue'

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus
const router = useRouter()

const hanleMenuItemClick = (item: any) => {
  router.push(item.url)
}

//ElMenu的默认菜单
const route = useRoute()
let pathMenu = mapPathToMenu(route.path, userMenus)
let defaultActive = ref<string>(pathMenu?.id + '')

// 监听路由路径的变化,实时绑定菜单与路由的关系
watch(
  () => route.path,
  (newVal) => {
    pathMenu = mapPathToMenu(newVal, userMenus)
    defaultActive.value = pathMenu?.id + ''
  }
)
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    .image {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }
}

.el-menu {
  border-right: none;
  user-select: none;

  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }

    .el-menu-item:hover {
      color: #fff;
    }

    .el-menu-item.is-active {
      background-color: #0a60bd;
    }
  }
}
</style>
