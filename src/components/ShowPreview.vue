<template>
  <div class="showpreview">
    <div class="showpreview_container">
      <div class="title">{{ show.title }}</div>
      <div class="subtitle">演出介绍</div>
      <img v-if="show.introbg" :src="prefix + show.introbg" class="introbg" />
      <div class="shadow"></div>
      <div>
        <div v-for="intro in show.intros" :key="intro" class="intro">
          {{ intro }}
        </div>
      </div>
      <div class="subtitle">制作团队</div>
      <div v-for="row in pd_rows" :key="'pdrow-' + row" class="pdrow">
        <div v-for="col in Math.min(pd_col, show.producers.length - (row - 1) * pd_col)">
          <ProducerCard :member="show.producers[(row - 1) * pd_col + col - 1]"></ProducerCard>
        </div>
      </div>
      <div class="subtitle">卡司阵容</div>
      <div v-for="row in ca_rows" :key="'carow-' + row" class="carow">
        <div v-for="col in Math.min(ca_col, show.casts.length - (row - 1) * ca_col)">
          <CastCard
            :member="show.casts[(row - 1) * ca_col + col - 1]"
            :index="(row - 1) * ca_col + col - 1"
          ></CastCard>
        </div>
      </div>
      <div class="subtitle">剧照回顾</div>
      <div class="photo" v-for="photo in show.photos" :key="photo">
        <img :src="prefix + photo" />
      </div>
    </div>
    <div class="exit" :onclick="handleExit">←返回</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  show: any
  handleExit: any
}>()
const prefix = import.meta.env.BASE_URL
const handleExit = () => {
  props.handleExit()
}
// 制作团队
const pd_col = 3
import ProducerCard from './ProducerCard.vue'
const pd_rows = ref(Math.ceil(props.show.producers.length / pd_col))
// 卡司阵容
const ca_col = 3
import CastCard from './CastCard.vue'
const ca_rows = ref(Math.ceil(props.show.casts.length / ca_col))
</script>

<style lang="less" scoped>
.showpreview {
  position: fixed;
  width: min(100vw, 50vh);
  height: 100vh;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  background-color: rgba(0, 0, 0, 1);
  .exit {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 2vh;
    left: 0;
    width: 10vh;
    height: 5vh;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0 2.5vh 2.5vh 0;
    font-size: 2vh;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }
  .showpreview_container {
    width: 90%;
    height: 100%;
    padding: 7vh 0;
    margin: auto;
    position: relative;
    overflow-y: scroll;
    /* 隐藏滚动条（兼容多浏览器） */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    .title {
      font-size: 2.5vh;
      font-weight: bold;
      width: 100%;
      text-align: center;
      color: rgba(250, 250, 210, 1);
    }
    .subtitle {
      font-size: 2vh;
      text-indent: 1vh;
      margin: 1vh 0;
      margin-top: 5vh;
      font-weight: bold;
      color: black;
      width: 100%;
      border-radius: 0.5vh;
      background: linear-gradient(90deg, rgba(250, 250, 210, 1) 0, rgba(250, 250, 210, 0) 50%);
    }
    .introbg {
      position: absolute;
      top: 12vh;
      right: 0;
      width: 32vh;
      height: 18vh;
      object-fit: contain;
      z-index: -2;
    }
    .shadow {
      position: absolute;
      top: 12vh;
      right: 0;
      width: 32vh;
      height: 18vh;
      z-index: -1;
      background: radial-gradient(
        ellipse closest-side at center,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1)
      );
    }
    .intro {
      width: 100%;
      font-size: 1.5vh;
      color: rgba(250, 250, 210, 1);
      text-indent: 3vh;
      text-align: justify;
      margin: 1vh 0;
    }
    .intro:first-of-type {
      width: 50%;
    }
    .pdrow {
      width: 100%;
      padding-left: 1vh;
      margin: 1vh 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .carow {
      width: 100%;
      padding-left: 1vh;
      margin: 1vh 0;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .photo {
      width: 90%;
      margin: 1vh auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
.container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
</style>
