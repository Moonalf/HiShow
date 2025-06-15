<template>
  <div>
    <Loading :style="bgStyle"></Loading>
    <div :style="baseStyle" class="basestyle">
      <HiShowHeader></HiShowHeader>
      <div class="main-content">
        <slot id="page-anchor" />
      </div>
      <el-menu
        :default-active="activeIndex"
        :router="true"
        :unique-opened="true"
        mode="horizontal"
        background-color="rgba(0,83,117,0.1)"
        class="nav-menu"
        id="anchor"
      >
        <div v-for="(n, sub) in nav" :key="n.label">
          <el-menu-item :index="n.path">
            <template #title>
              <i :class="n.icon + ' text'"></i>
              <span class="text">{{ n.label }}</span>
            </template>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import HiShowHeader from "~/components/HiShowHeader.vue";
import Loading from "~/components/Loading.vue";
import { ref, onMounted } from "vue";

const activeIndex = ref("1");
const nav = ref({
  home: {
    path: "/",
    label: "主页",
    icon: "bi bi-house-fill",
  },
  about: {
    path: "/main",
    label: "戏影",
    icon: "bi bi-camera-reels-fill",
  },
});
const baseStyle = ref({
  width: "100vw",
  height: "100vh",
});

const bgStyle = ref({ display: "" });
onMounted(() => {
  // 获取设备尺寸
  let deviceWidth = 0;
  if (window.innerWidth > window.innerHeight) {
    deviceWidth = Math.floor(window.innerHeight / 2);
  } else {
    deviceWidth = window.innerWidth;
  }
  baseStyle.value = {
    width: deviceWidth + "px",
    height: window.innerHeight + "px",
  };
  bgStyle.value = {
    display: "none",
  };
});
</script>

<style scoped lang="less">
.basestyle {
  background: linear-gradient(
    135deg,
    rgba(128, 0, 128, 0) 0%,
    rgba(128, 0, 128, 0.2) 20%,
    rgba(128, 0, 128, 0.4) 40%,
    rgba(128, 0, 128, 0.6) 60%,
    rgba(128, 0, 128, 0.8) 80%,
    rgba(128, 0, 128, 1) 100%
  );
  background-size: cover;
  margin: auto;
  position: relative;
}
.el-menu.nav-menu /deep/ .el-menu-item {
  height: 6vh !important;
  line-height: 6vh !important;
  padding: 0 !important;
}

.el-menu.nav-menu {
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  background-color: rgba(240, 255, 255, 1);
  border-color: rgba(128, 0, 128, 1);
  z-index: 1;
}

.nav-menu .text {
  font-size: 1.6vh;
  font-weight: bold;
  color: rgba(128, 0, 128, 0.8);
}

.main-content {
  z-index: 0;
  width: 100%;
  height: 85vh;
  padding-bottom: 8vh;
  margin: 0 auto;
  // border: 1px black solid;
  overflow-y: scroll;
  /* 隐藏滚动条（兼容多浏览器） */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.main-content::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
</style>
