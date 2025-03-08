<template>
  <div class="overview">
    <div class="about">
      <el-card style="max-width: 100%">
        <template #header>
          <div class="card-header">
            <h4>关于</h4>
          </div>
        </template>
        <p>
          Vue3Admin是基于Vue3、Pinia、VueRouter、Vite、ElementPlus、TypeScript、Echart等后台系统解决方案
        </p>
      </el-card>
    </div>
    <div class="skill">
      <el-card style="max-width: 100%">
        <template #header>
          <div class="card-header">
            <h4>技术栈</h4>
          </div>
        </template>

        <div class="list">
          <template v-for="(item, index) in skillForm" :key="index">
            <div class="item">
              <span class="label">{{ item.label }}:</span>
              <span class="value">{{ item.value }}</span>
            </div>
          </template>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const skillForm = reactive([
  { label: '开发工具', value: 'Visual Studio Code' },
  { label: '编程语言', value: 'TypeScript 4.x + JavaScript' },
  { label: '构建工具', value: 'Vite 2.x/Webpack5.x' },
  { label: '前端框架', value: 'Vue 3.x' },
  { label: '路由工具', value: 'VueRouter 4.x' },
  { label: '状态管理', value: 'Pinia' },
  { label: 'UI框架', value: 'Element Plus' },
  { label: '可视化', value: 'Echarts' },
  { label: '富文本', value: 'vueup/vue-quill' },
  { label: '工具库', value: '@vueuse/core + dayjs + countup.js' },
  { label: 'CSS预编译', value: 'Sass/Less' },
  { label: 'HTTP工具', value: 'Axios' },
  { label: '代码规范', value: 'EditorConfig + Prettier + ESLint' },
  { label: '部署', value: 'Centos + Nginx' }
])
</script>

<style lang="less" scoped>
.overview {
  .skill {
    margin-top: 20px;

    .list {
      .item {
        margin-top: 10px;
        font-size: 14px;
        .label {
          font-weight: 600;
        }

        .value {
          margin-left: 14px;
          color: #1890ff;
        }
      }
    }
  }
}
</style>
