<template>
  <div class="managercard">
    <img
      class="avatar"
      :src="
        img_prefix +
        (manager.avatar === ''
          ? '/members/default_member.webp'
          : manager.avatar)
      "
    />
    <div class="name">
      <div>{{ manager.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
const props = defineProps<{
  manager: any;
}>();
</script>

<style scoped lang="less">
.managercard {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin: auto;
    object-fit: cover;
  }
  .name {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 0 0% 50% 50%;
    color: white;
    background-color: black;
    font-weight: bold;
    text-align: center;
    font-size: 1.2vh;
    padding-bottom: 7%;
    clip-path: polygon(0 75%, 100% 75%, 100% 95%, 0 95%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}
</style>
