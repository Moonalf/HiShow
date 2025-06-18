<template>
  <div class="main">
    <div class="gatha">
      我们因戏相识、因戏相知。凡你来过，便成为海中的一滴水、树上的一片叶。
    </div>
    <div
      v-for="(things_per_year, idx) in things"
      :key="things_per_year.year"
      class="things"
    >
      <div class="year-block">
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
    <ShowPreview
      v-if="showPreview"
      :show="showInfo"
      :handle-exit="handleExit"
    ></ShowPreview>
  </div>
</template>

<script setup lang="ts">
import things from "~/assets/things";
import ManagerCard from "~/components/ManagerCard.vue";
import ShowCard from "~/components/ShowCard.vue";
import ShowPreview from "~/components/ShowPreview.vue";

const showPreview = ref(false);
const showInfo = ref<any>(null);
const handleClick = (show: any) => {
  console.log(show.title);
  showInfo.value = show;
  showPreview.value = true;
};
const handleExit = () => {
  showPreview.value = false;
};
</script>

<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: auto;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .year-block {
      margin-top: 4vh;
      width: 100%;
      color: white;
      font-size: 2vh;
      font-weight: bold;
      font-style: italic;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
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
