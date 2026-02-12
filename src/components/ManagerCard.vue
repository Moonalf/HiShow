<template>
  <div class="managercard">
    <img
      class="avatar"
      :src="prefix + (manager.avatar === '' ? 'members/default_member.webp' : manager.avatar)"
    />
    <div class="name">
      <div>{{ manager.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  manager: any
}>()
const prefix = import.meta.env.BASE_URL
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
  overflow: hidden;

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin: auto;
    object-fit: cover;
  }
  .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25%;
    padding-top: 0.05rem;
    background-color: black;
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 0.2rem;
  }
}
</style>
