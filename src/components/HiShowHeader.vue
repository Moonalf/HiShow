<template>
  <div class="hishow_header">
    <img class="logo" src="/common/hishow_logo.webp" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.hishow_header {
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 7.5rem;
  height: 2rem;
  padding-left: 0.3rem;
  .logo {
    max-width: 100%;
    height: 1.5rem;
    object-fit: contain;
  }
}
</style>
