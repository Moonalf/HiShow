<template>
  <div class="index_page">
    <HiShowBanner />
    <div class="title">社团简介</div>
    <div class="content">
      海树话剧社是清华SIGS的文艺类社团，于2021年9月创立。社团的宗旨是传递清深文化，体悟表演生活。社团将努力打造学院文化建设新平台，营造校园艺术文化氛围，丰富广大师生文化生活。
    </div>
    <div class="title">联系我们</div>
    <div class="content">
      本网站由海树第三届副社长张纯鑫维护，有关于网站的信息校正或是UI建议，欢迎联系Email：<u
        >916824242@qq.com</u
      >
    </div>
    <div class="content">其实网站也是开源的，有心者可接力维护：</div>
    <div class="content"><u>https://github.com/Moonalf/HiShow</u></div>
  </div>
</template>

<script setup lang="ts">
import HiShowBanner from '@/components/HiShowBanner.vue'

defineOptions({
  name: 'HomePage',
})
</script>

<style lang="less" scoped>
.index_page {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .title {
    width: 90%;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    text-align: left;
    text-indent: 0.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    border-left: 0.1rem solid black;
  }
  .content {
    width: 90%;
    text-align: justify;
    text-indent: 0.4rem;
    font-size: 0.24rem;
  }
}
</style>
