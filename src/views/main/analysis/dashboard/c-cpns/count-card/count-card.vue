<template>
  <div class="count-card">
    <div class="header">
      <span>{{ itemData.title }}</span>
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="itemData.tips"
        placement="top-start"
      >
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span v-if="itemData.amount === 'saleroom'">￥</span>
      <span ref="count1Ref">{{ itemData.number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ itemData.subtitle }}</span>
      &nbsp;
      <span v-if="itemData.amount === 'saleroom'">￥</span>
      <span ref="count2Ref">{{ itemData.number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { onMounted } from 'vue'
import { ref } from 'vue'
interface IProps {
  itemData: {
    amount: string
    number1: number
    number2: number
    subtitle: string
    tips: string
    title: string
  }
}
const props = defineProps<IProps>()

const count1Ref = ref<HTMLElement>()
const count2Ref = ref<HTMLElement>()

// 创建countup的实例对象
// 参数一：执行动画的元素
// 参数二：数字增加 10000
onMounted(() => {
  const countup1 = new CountUp(count1Ref.value!, props.itemData.number1)
  const countup2 = new CountUp(count2Ref.value!, props.itemData.number2)

  countup1.start()
  countup2.start()
})
</script>

<style lang="less" scoped>
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    justify-content: space-between;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    align-items: center;
  }

  .content {
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
  }

  .footer {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
  }
}
</style>
