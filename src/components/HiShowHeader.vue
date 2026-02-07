<template>
  <div class="hishow_header">
    <img class="logo" src="/common/hishow_logo.webp" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.hishow_header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 50%;
  width: min(100vw, 50vh);
  height: 15vh;
  padding-left: 2vh;
  transform: translateX(-50%);
  .logo {
    height: 12vh;
    object-fit: contain;
  }
}
</style>
