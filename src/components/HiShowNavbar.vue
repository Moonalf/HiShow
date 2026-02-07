<template>
  <div class="hishow_navbar">
    <div
      :class="'nav_item ' + (item.selected === true ? 'selected' : '')"
      v-for="(item, index) in nav"
      :key="'navitem' + index"
      @click="item.click2router"
    >
      <!-- <div class="nav_icon">
        <img
          :src="prefix + 'common/' + item.name + '_' + (item.selected ? 'light' : 'dark') + '.png'"
        />
      </div> -->
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const prefix = import.meta.env.BASE_URL
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const nav = ref([
  {
    title: '主页',
    name: 'HomePage',
    selected: false,
    click2router: () => {
      router.replace('/')
    },
  },
  {
    title: '戏影',
    name: 'InfoPage',
    selected: false,
    click2router: () => {
      router.replace('info')
    },
  },
])
import { watch } from 'vue'
watch(
  () => route,
  (newVal, oldVal) => {
    nav.value.map((item) => {
      item.selected = false
      if (item.name === newVal.name) {
        item.selected = true
      }
      return item
    })
  },
  { deep: true, immediate: true },
)
</script>

<style lang="less" scoped>
.hishow_navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: min(100vw, 50vh);
  height: 6vh;
  background-color: rgba(240, 255, 255, 1);
  z-index: 5;
  overflow: hidden;

  .nav_item {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(127, 127, 127, 0.6) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    color: rgba(128, 0, 128, 1);
    font-size: 2vh;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    .nav_icon {
      height: 50%;
      margin-right: 0.5vh;
      img {
        height: 100%;
        object-fit: contain;
      }
    }
    &.selected {
      transform: scale(1.04);
      background: linear-gradient(
        180deg,
        rgba(128, 0, 128, 0.5) 0%,
        rgba(128, 0, 128, 1) 50%,
        rgba(128, 0, 128, 0.5) 100%
      );
      color: rgba(240, 255, 255, 1);
      font-weight: 900;
    }
  }
}
</style>
