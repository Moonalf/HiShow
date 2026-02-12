<template>
  <div class="showcard">
    <img :src="prefix + show.cover" class="cover" />
    <div class="title">{{ show.title }}</div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  show: any
}>()
const prefix = import.meta.env.BASE_URL
</script>

<style lang="less" scoped>
.showcard {
  position: relative;
  width: 6rem;
  height: 3.3rem;
  overflow: hidden;
  border-radius: 0.2rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-1%);
    box-shadow: 0 0.1rem 0.1rem 0 rgba(128, 0, 128, 1);
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
    font-size: 0.3rem;
    font-weight: bold;
    text-align: center;
  }
}
</style>
