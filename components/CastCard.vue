<template>
  <div :class="'membercard rotate-' + (index % 8)">
    <div :class="'border border-' + (index % 8)"></div>
    <img
      class="avatar"
      :src="
        img_prefix +
        (member.avatar !== '' ? member.avatar : '/members/default_member.webp')
      "
    />
    <div class="info">{{ member.name + " 饰 " + member.character }}</div>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
const props = defineProps<{
  member: any;
  index: number;
}>();
</script>

<style scoped lang="less">
.membercard {
  flex-shrink: 0;
  width: 12vh;
  height: 16vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 0.5vh;
  margin-right: 2vh;
  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info {
    position: absolute;
    top: 15%;
    left: 7%;
    writing-mode: vertical-lr;
    font-size: 1vh;
    border-right: 0.2vh rgba(250, 250, 210, 1) solid;
    color: rgba(250, 250, 210, 1);
    background: rgba(0, 0, 0, 0.2);
  }
  .border {
    position: absolute;
    top: 0;
    left: 0;
    width: 12vh;
    height: 16vh;
    clip-path: polygon(
      5% 5%,
      95% 5%,
      95% 95%,
      5% 95%,
      5% 5%,
      0 0,
      0 100%,
      100% 100%,
      100% 0,
      0 0
    );
    &-0 {
      background: rgba(250, 250, 210, 1);
    }
    &-1 {
      background: rgba(128, 128, 255, 1);
    }
    &-2 {
      background: rgba(0, 0, 0, 1);
    }
    &-3 {
      background: rgba(255, 255, 255, 1);
    }
    &-4 {
      background: rgba(64, 128, 128, 1);
    }
    &-5 {
      background: rgba(64, 0, 0, 1);
    }
    &-6 {
      background: rgba(154, 205, 50, 1);
    }
    &-7 {
      background: rgba(70, 130, 180, 1);
    }
  }
}
.rotate {
  &-0 {
    transform: rotate(-3deg);
  }
  &-1 {
    transform: rotate(2deg);
  }
  &-2 {
    transform: rotate(-1deg);
  }
  &-3 {
    transform: rotate(2deg);
  }
  &-4 {
    transform: rotate(-1deg);
  }
  &-5 {
    transform: rotate(3deg);
  }
  &-6 {
    transform: rotate(-2deg);
  }
  &-7 {
    transform: rotate(1deg);
  }
}
.membercard:hover {
  cursor: pointer;
}
</style>
