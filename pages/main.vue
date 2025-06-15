<template>
  <div class="main">
    <div
      v-for="(things_per_year, idx) in things"
      :key="things_per_year.year"
      class="things"
    >
      <div class="year">
        <div class="line">——————</div>
        <div>{{ things_per_year.year }}</div>
        <div class="line">——————</div>
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
  .things {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .year {
      margin-top: 4vh;
      width: 100%;
      color: white;
      font-size: 2vh;
      font-weight: bold;
      font-style: italic;
      display: flex;
      flex-direction: row;
      justify-content: center;
      white-space: nowrap;
      .line {
        text-align: center;
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
