<template>
  <div class="membercard">
    <img
      class="avatar"
      :src="prefix + (member.avatar !== '' ? member.avatar : 'members/default_member.webp')"
    />
    <div class="info">
      <div class="duty">{{ '—' + member.duty + '—' }}</div>
      <div class="name">{{ member.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  member: any
}>()
const prefix = import.meta.env.BASE_URL
</script>

<style scoped lang="less">
.membercard {
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 2.1rem;
  height: 2.8rem;
  margin-left: 0.05rem;
  margin-right: 0.1rem;
  display: flex;
  border-radius: 0.1rem;
  overflow: hidden;

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 0.7rem;
    bottom: 0;
    color: rgba(250, 250, 210, 1);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 1) 100%);
    .duty {
      font-size: 0.2rem;
      letter-spacing: 0.05rem;
    }
    .name {
      font-size: 0.18rem;
    }
  }
}

.membercard:hover {
  cursor: pointer;
}
</style>
