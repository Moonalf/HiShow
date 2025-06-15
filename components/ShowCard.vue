<template>
  <div class="showcard">
    <img :src="img_prefix + show.cover" class="cover" />
    <div class="title">{{ show.title }}</div>
  </div>
</template>

<script lang="ts" setup>
import { img_prefix } from "~/assets/constants";
defineProps<{
  show: any;
}>();
</script>

<style lang="less" scoped>
.showcard {
  position: relative;
  width: 36vh;
  height: 20vh;
  overflow: hidden;
  border-radius: 1vh;
  &:hover {
    cursor: pointer;
    transform: translateY(-1%);
    box-shadow: 0 1vh 1vh -0.5vh rgba(128, 0, 128, 1);
  }
  .cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: black;
    color: white;
    font-size: 2vh;
    font-weight: bold;
    text-align: center;
  }
}
</style>
