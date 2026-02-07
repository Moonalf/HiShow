<template>
  <div class="banner" id="banner">
    <div
      class="banner_wrap ready hishow_mark"
      v-for="(banner, index) in banners"
      :key="'banner-' + banner"
      :id="'banner_' + index"
    >
      <img :src="prefix + banner" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const prefix = import.meta.env.BASE_URL
const banners = [
  'banners/banner_zsjs.webp',
  'banners/banner_konglong.webp',
  'banners/banner_sanmao.webp',
  'banners/banner_swzszd.webp',
  'banners/banner_qinren.webp',
  'banners/banner_12gongmin.webp',
  'banners/banner_xibie.webp',
  'banners/banner_shijian.webp',
  'banners/banner_yybn2.webp',
  'banners/banner_yybn.webp',
]
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
let interval: any = null
let index = 0
onActivated(() => {
  console.log('播放banner')
  const bannerItem = document.getElementById('banner_' + index)
  bannerItem?.classList.remove('ready')
  bannerItem?.classList.add('appear')
  interval = setInterval(() => {
    console.log(index, (index - 1 + banners.length) % banners.length, (index + 1) % banners.length)
    const readyItem = document.getElementById(
      'banner_' + ((index - 1 + banners.length) % banners.length),
    )
    readyItem?.classList.remove('fade')
    readyItem?.classList.add('ready')
    const fadeItem = document.getElementById('banner_' + (index % banners.length))
    fadeItem?.classList.remove('appear')
    fadeItem?.classList.add('fade')
    index = (index + 1) % banners.length
    const appearItem = document.getElementById('banner_' + index)
    appearItem?.classList.remove('ready')
    appearItem?.classList.add('appear')
  }, 3000)
})

onDeactivated(() => {
  console.log('暂停播放banner')
  clearInterval(interval)
})
</script>

<style lang="less" scoped>
.banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: min(100vw, 50vh);
  height: calc(min(100vw, 50vh) / 3);
  .banner_wrap {
    position: absolute;
    top: 0;
    width: min(100vw, 50vh);
    height: 100%;
    transition: left 0.5s ease-in-out;
    img {
      height: 100%;
      object-fit: contain;
    }
    &.ready {
      left: calc(1 * min(100vw, 50vh));
      opacity: 0;
    }
    &.appear {
      left: 0;
      opacity: 1;
    }
    &.fade {
      left: calc(-1 * min(100vw, 50vh));
      opacity: 1;
    }
  }
}
.hishow_mark {
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
</style>
