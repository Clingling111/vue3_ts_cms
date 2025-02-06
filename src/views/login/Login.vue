<template>
  <div class="login">
    <loginPanel />
  </div>
</template>

<script setup lang="ts">
import loginPanel from './c-cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url('../../assets//img/login-bg.svg');
  justify-content: center;
  align-items: center;
}
</style>
