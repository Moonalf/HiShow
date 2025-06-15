<template>
  <div class="member-container">
    <div class="poppoer" v-if="word">
      <div class="popper-content">{{ word }}</div>
      <div class="popper-corner-down"></div>
    </div>
    <div class="member-card">
      <img v-if="avatar" :src="avatar" class="member-avatar" alt="" />
      <img
        v-else
        :src="`/HiShow/members/default_member.webp`"
        class="member-avatar"
        alt=""
      />
      <div class="member-text">{{ name }}</div>
      <div v-if="duty.length" class="duties">
        <div v-for="d in duty" class="duty" :style="getStyle(d)" :key="d">
          {{ dutyStyles[d].label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberCard",
  props: {
    avatar: { type: String, default: "" },
    name: { type: String, default: "" },
    word: { type: String, default: "" },
    duty: { type: Array, default: () => [] },
  },
  data() {
    return {
      dutyStyles: [
        {
          label: "· 编剧",
          color: "white",
          backgroundColor: "linear-gradient(90deg, navy 0, black 100%)",
        },
        {
          label: "· 导演",
          color: "white",
          backgroundColor: "linear-gradient(90deg, yellow 0, orange 100%)",
        },
        {
          label: "· 制作",
          color: "white",
          backgroundColor: "linear-gradient(90deg, white 0, dimgrey 100%)",
        },
        {
          label: "· 剧务",
          color: "white",
          backgroundColor: "linear-gradient(90deg, orange 0, brown 100%)",
        },
        {
          label: "· 舞美",
          color: "white",
          backgroundColor: "linear-gradient(90deg, orange 0, red 100%)",
        },
        {
          label: "· 宣发",
          color: "white",
          backgroundColor: "linear-gradient(90deg, pink 0, purple 100%)",
        },
        {
          label: "· 妆造",
          color: "white",
          backgroundColor: "linear-gradient(90deg, white 0, pink 50%)",
        },
        {
          label: "· 中控",
          color: "white",
          backgroundColor: "linear-gradient(90deg, lightgreen 0, green 100%)",
        },
        {
          label: "· 摄影",
          color: "white",
          backgroundColor: "linear-gradient(90deg, skyblue 0, blue 100%)",
        },
      ],
    };
  },
  methods: {
    getStyle(index) {
      return {
        color: this.dutyStyles[index].color,
        background: this.dutyStyles[index].backgroundColor,
      };
    },
  },
};
</script>

<style scoped lang="less">
.member-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.member-container:hover .poppoer {
  opacity: 1;
}
.poppoer {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 90%;
  margin: auto;
  position: absolute;
  z-index: 99;
}
.popper-content {
  padding: 0.3rem;
  width: 100%;
  height: auto;
  min-height: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 1);
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  text-indent: 1rem;
}
.popper-corner-down {
  width: 1rem;
  height: 0.5rem;
  margin-left: 1rem;
  background-color: rgba(255, 255, 255, 1);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}
.member-card {
  margin-top: 2rem;
  border-radius: 0 0 0.8rem 0.8rem;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
}
.member-card:hover {
  cursor: pointer;
  box-shadow: 0 10px 25px 0 grey;
}
.member-avatar {
  width: 100%;
  border-radius: 0.8rem 0.8rem 0 0;
  object-fit: contain;
}
.member-text {
  border-radius: 0 0 0.8rem 0.8rem;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  background-color: white;
}
.duties {
  position: absolute;
  bottom: 12%;
  left: -3%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: auto;
}

.duty {
  width: 3rem;
  margin: 0.1rem 0;
  clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
  text-align: left;
  text-indent: 0.2rem;
  font-weight: bold;
  font-size: 0.8rem;
  // &.mobile {
  //   width: 2rem;
  //   font-size: 0.4rem;
  // }
}
</style>
