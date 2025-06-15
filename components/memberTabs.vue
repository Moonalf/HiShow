<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
      <el-tab-pane label="核心骨干" name="first">
        <div class="title">社长</div>
        <div class="row">
          <member-card
            v-for="p in presidents"
            :avatar="p.avatar"
            :name="p.mark"
            :word="p.word"
            :key="p.mark"
            style="width: 18%"
          ></member-card>
        </div>
        <div class="title">副社长</div>
        <div class="row">
          <member-card
            v-for="vp in vicePresidents"
            :avatar="vp.avatar"
            :name="vp.mark"
            :word="vp.word"
            :key="vp.mark"
            style="width: 18%"
          ></member-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="剧组成员" name="second">
        <div class="statement">{{ statement }}</div>
        <div v-for="group in groups" :key="group.name">
          <div class="title">{{ group.name }}</div>
          <div class="row2">
            <member-card-show :raw-members="group.members"></member-card-show>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import memberCardShow from "./memberCardShow.vue";
import memberCard from "./memberCard.vue";

export default {
  name: "memberTabs",
  components: { memberCard, memberCardShow },
  data() {
    return {
      activeName: "first",
      statement:
        "我们因戏相聚，因戏相知。凡你来过，便成为海中的一滴水、树上的一片叶。",
    };
  },
  props: {
    presidents: { type: Array, default: () => [] },
    vicePresidents: { type: Array, default: () => [] },
    mainMembers: { type: Array, default: () => [] },
    groups: { type: Array, default: () => [] },
  },
  methods: {
    handleClick(tab, event) {},
  },
};
</script>

<style scoped lang="less">
/deep/ .el-tabs__nav-wrap::after {
  display: none;
}
/deep/ .el-tabs__active-bar {
  height: 0.2rem;
  border-radius: 0.1rem;
  background: black;
}
/deep/ .el-tabs__item {
  color: rgba(128, 128, 128, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
}
/deep/ .el-tabs__item:hover {
  color: rgba(128, 128, 128, 1);
}
/deep/ .el-tabs__item.is-active {
  color: black;
}
.title {
  width: 95%;
  text-align: left;
  text-indent: 1rem;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
  border-left: 0.5rem solid black;
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.row2 {
  margin: 0 2%;
}
.statement {
  font-size: 1.2rem;
  text-align: center;
  font-style: italic;
  margin: 3rem 0;
}
</style>
