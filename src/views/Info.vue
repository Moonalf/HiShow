<template>
  <div class="info_page" ref="infoPageRef">
    <div class="gatha">我们因戏相识、因戏相知。凡你来过，便成为海中的一滴水、树上的一片叶。</div>
    <div v-for="(things_per_year, idx) in things" :key="things_per_year.year" class="things">
      <div class="year_block">
        <div class="line">
          ——————————————————————————————————————————————————————————————————————————————————————————
        </div>
        <div class="year">{{ things_per_year.year }}</div>
      </div>
      <div v-if="things_per_year.managers.length > 5" class="managers">
        <div class="vice">
          <ManagerCard :manager="things_per_year.managers[5]"></ManagerCard>
        </div>
        <div v-if="things_per_year.managers.length > 6" class="vice">
          <ManagerCard :manager="things_per_year.managers[6]"></ManagerCard>
        </div>
        <div v-else class="placeholder"></div>
      </div>
      <div v-if="things_per_year.managers.length > 0" class="managers">
        <div v-if="things_per_year.managers.length > 1" class="vice">
          <ManagerCard :manager="things_per_year.managers[1]"></ManagerCard>
        </div>
        <div v-else class="placeholder"></div>
        <div class="leader">
          <ManagerCard :manager="things_per_year.managers[0]"></ManagerCard>
        </div>
        <div v-if="things_per_year.managers.length > 2" class="vice">
          <ManagerCard :manager="things_per_year.managers[2]"></ManagerCard>
        </div>
        <div v-else class="placeholder"></div>
      </div>
      <div v-if="things_per_year.managers.length > 3" class="managers">
        <div class="vice">
          <ManagerCard :manager="things_per_year.managers[3]"></ManagerCard>
        </div>
        <div v-if="things_per_year.managers.length > 4" class="vice">
          <ManagerCard :manager="things_per_year.managers[4]"></ManagerCard>
        </div>
        <div v-else class="placeholder"></div>
      </div>
      <div
        v-for="(show, idy) in things_per_year.shows"
        :key="things_per_year.year + show.title"
        class="showcard"
      >
        <ShowCard :show="show" @click="() => handleClick(show)"></ShowCard>
      </div>
    </div>
    <ShowPreview v-if="showPreview" :show="showInfo" :handle-exit="handleExit"></ShowPreview>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'InfoPage',
})
import things from '@/utils/things'
import ManagerCard from '@/components/ManagerCard.vue'
import ShowCard from '@/components/ShowCard.vue'
import ShowPreview from '@/components/ShowPreview.vue'

import { ref, reactive } from 'vue'
const showPreview = ref(false)
const showInfo = reactive<any>({})
const infoPageRef = ref<HTMLElement | any>(null)
const scrollTop = ref(0)

import { onActivated, onDeactivated } from 'vue'
onActivated(() => {
  infoPageRef.value.scrollTop = scrollTop.value
  infoPageRef.value.addEventListener('scroll', handleScroll)
})
onDeactivated(() => {
  infoPageRef.value.removeEventListener('scroll', handleScroll)
})
const handleClick = (show: any) => {
  Object.assign(showInfo, show)
  showPreview.value = true
}
const handleExit = () => {
  showPreview.value = false
}
const handleScroll = () => {
  scrollTop.value = infoPageRef.value.scrollTop
}
</script>

<style lang="less" scoped>
.info_page {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .gatha {
    width: 80%;
    font-size: 0.24rem;
    color: black;
    font-style: italic;
    text-align: justify;
    text-indent: 0.4rem;
    margin-top: 0.3rem;
  }
  .things {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .year_block {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      width: 90%;
      margin-top: 0.5rem;
      margin-bottom: 0.1rem;
      color: white;
      font-size: 0.3rem;
      font-weight: bold;
      font-style: italic;
      white-space: nowrap;
      overflow: hidden;
      .year {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        background: white;
        padding: 0 0.2rem;
        color: rgba(128, 0, 128, 1);
        border-radius: 0.1rem;
      }
    }
    .managers {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 0.1rem;
      .leader {
        width: 2rem;
        height: 2rem;
        margin: 0 0.2rem;
      }
      .vice {
        width: 1.6rem;
        height: 1.6rem;
        margin: 0 0.2rem;
      }
      .placeholder {
        width: 1.6rem;
        height: 1.6rem;
        margin: 0 0.2rem;
      }
    }
    .showcard {
      margin-top: 0.1rem;
    }
  }
}
</style>
