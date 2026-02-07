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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 85vh;
  padding-bottom: 7vh;
  overflow-x: hidden;
  overflow-y: auto;

  .gatha {
    width: 80%;
    font-size: 1.5vh;
    color: black;
    font-style: italic;
    text-align: justify;
    text-indent: 3vh;
    margin-top: 3vh;
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
      margin-top: 4vh;
      width: 90%;
      color: white;
      font-size: 2vh;
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
        padding: 0 1vh;
        color: rgba(128, 0, 128, 1);
        border-radius: 1vh;
      }
    }
    .managers {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .leader {
        width: 12vh;
        height: 12vh;
        margin: 1vh;
      }
      .vice {
        width: 10vh;
        height: 10vh;
        margin: 1vh;
      }
      .placeholder {
        width: 10vh;
        height: 10vh;
        margin: 1vh;
      }
    }
    .showcard {
      margin: 0.5vh 0;
    }
  }
}
</style>
