<template>
  <div class="index">
    <HiShowBanner></HiShowBanner>
    <div class="title">社团简介</div>
    <div class="content">
      海树话剧社是清华SIGS的文艺类社团，于2021年9月创立。社团的宗旨是传递清深文化，体悟表演生活。社团将努力打造学院文化建设新平台，营造校园艺术文化氛围，丰富广大师生文化生活。
    </div>
    <div class="title">联系我们</div>
    <div class="content">
      本网站由海树第三届副社长张纯鑫维护，有关于网站的信息校正或是UI建议，欢迎联系：
    </div>
    <div class="content">Wechat：<u>Ma_Mei11eure_Ennemie</u></div>
    <div class="content">Email：<u>916824242@qq.com</u></div>
  </div>
</template>

<script setup lang="ts">
import HiShowBanner from "~/components/HiShowBanner.vue";
</script>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  width: 90%;
  text-align: left;
  text-indent: 1vh;
  font-size: 2vh;
  font-weight: bold;
  margin: 2vh 0;
  border-left: 0.5vh solid black;
}
.content {
  width: 90%;
  text-align: justify;
  text-indent: 1.5vh;
  font-size: 1.5vh;
}
</style>
