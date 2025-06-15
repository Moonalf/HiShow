<template>
  <div class="banner">
    <el-carousel
      :height="dynamicHeight"
      trigger="click"
      :interval="3000"
      indicator-position="outside"
      class="banners"
    >
      <el-carousel-item v-for="banner in banners" :key="banner">
        <img :src="img_prefix + banner" alt="" class="banner-img hishow-mark" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { img_prefix } from "~/assets/constants";
import { ref, onMounted } from "vue";
const dynamicHeight = ref("");
const banners = [
  "/banners/banner_konglong.webp",
  "/banners/banner_sanmao.webp",
  "/banners/banner_swzszd.webp",
  "/banners/banner_qinren.webp",
  "/banners/banner_12gongmin.webp",
  "/banners/banner_xibie.webp",
  "/banners/banner_shijian.webp",
  "/banners/banner_yybn2.webp",
  "/banners/banner_yybn.webp",
];

onMounted(() => {
  if (window.innerWidth > window.innerHeight) {
    dynamicHeight.value = Math.ceil(window.innerHeight / 6) + "px";
  } else {
    dynamicHeight.value = Math.ceil(window.innerWidth / 3) + "px";
  }
});
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  &-img {
    width: 100%;
    object-fit: cover;
  }
}
.hishow-mark {
  clip-path: polygon(
    0 0,
    0 100%,
    5% 100%,
    6% 85%,
    7% 85%,
    6.6% 91%,
    7.6% 91%,
    8% 85%,
    9% 85%,
    8% 100%,
    9% 100%,
    9.6% 91%,
    10.6% 91%,
    10% 100%,
    11% 100%,
    11.2% 97%,
    13.2% 97%,
    13.4% 94%,
    11.4% 94%,
    12% 85%,
    15% 85%,
    14.8% 88%,
    12.8% 88%,
    12.6% 91%,
    14.6% 91%,
    14% 100%,
    15% 100%,
    16% 85%,
    17% 85%,
    16.6% 91%,
    18.6% 91%,
    18% 100%,
    19% 100%,
    19.6% 91%,
    22.6% 91%,
    22% 100%,
    23% 100%,
    23.6% 91%,
    24.6% 91%,
    24.2% 97%,
    25.6% 91%,
    26.6% 91%,
    26.2% 97%,
    27.6% 91%,
    28.6% 91%,
    27% 100%,
    25.4% 100%,
    25.8% 94%,
    24.4% 100%,
    21% 100%,
    21.4% 94%,
    20.4% 94%,
    20.2% 97%,
    21.2% 97%,
    21% 100%,
    17% 100%,
    17.4% 94%,
    16.4% 94%,
    16% 100%,
    7% 100%,
    7.4% 94%,
    6.4% 94%,
    6% 100%,
    100% 100%,
    100% 0
  );
}
::v-deep ul.el-carousel__indicators {
  display: none;
}
</style>
