<template>
  <div class="membercard">
    <img
      class="avatar"
      :src="
        img_prefix +
        (member.avatar !== '' ? member.avatar : '/members/default_member.webp')
      "
    />
    <div class="info">
      <div class="duty">{{ "—" + member.duty + "—" }}</div>
      <div class="name">{{ member.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
import { ref } from "vue";
const props = defineProps<{
  member: any;
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
  margin-right: 1vh;
  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info {
    position: absolute;
    width: 100%;
    height: 4vh;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(250, 250, 210, 1);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 1) 100%
    );
    .duty {
      font-size: 1.2vh;
      letter-spacing: 0.2vh;
    }
    .name {
      font-size: 1vh;
    }
  }
}

.membercard:hover {
  cursor: pointer;
}
</style>
