<template>
  <div class="container">
    <HiShowHeader />
    <!-- <RouterView /> -->
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="['HomePage', 'InfoPage']">
        <component :is="Component" :key="route.name" />
      </keep-alive>
    </router-view>
    <HiShowNavbar />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HiShowHeader from './components/HiShowHeader.vue'
import HiShowNavbar from './components/HiShowNavbar.vue'
</script>

<style lang="less">
html {
  display: flex;
  flex-direction: column;
  align-items: center;
  body {
    width: 7.5rem;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: rgba(32, 32, 32, 1);
    #app {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 7.5rem;
      height: 100vh;
      margin: 0;
      padding: 0;
      background-color: wheat;
      color: #000;
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 7.5rem;
        height: 100vh;
        margin: 0 auto;
        // padding-top: 2rem;
        // padding-bottom: 0.8rem;
        background: linear-gradient(
          135deg,
          rgba(128, 0, 128, 0) 0%,
          rgba(128, 0, 128, 0.2) 20%,
          rgba(128, 0, 128, 0.4) 40%,
          rgba(128, 0, 128, 0.6) 60%,
          rgba(128, 0, 128, 0.8) 80%,
          rgba(128, 0, 128, 1) 100%
        );
      }
    }
  }
}

/* 整个滚动条区域 */
::-webkit-scrollbar {
  width: 0; /* 垂直滚动条宽度 */
  height: 0; /* 水平滚动条高度 */
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background: #f1f1f1; /* 轨道颜色 */
  border-radius: 1px; /* 圆角 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #888; /* 滑块颜色 */
  border-radius: 1px; /* 圆角 */
  border: 1px solid #f1f1f1; /* 滑块边框(形成内边距效果) */
}

/* 滑块悬停状态 */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* 悬停颜色 */
}

/* 滚动条角落(水平和垂直滚动条交汇处) */
::-webkit-scrollbar-corner {
  background: #f1f1f1;
}
</style>
