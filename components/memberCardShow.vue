<template>
    <div>
        <div v-for="row in members" class="member-show-row" :key="row[0].mark">
            <member-card
                v-for="member in row"
                :avatar="member.avatar"
                :name="member.mark"
                :word="member.word"
                :duty="member.duty"
                :key="member.mark"
                class="member"
            ></member-card>
        </div>
    </div>
</template>

<script>
import memberCard from '~/components/memberCard.vue'

export default {
  name: 'MemberCardShow',
  components: { memberCard },
  props: {
    rawMembers: { type: Array, default: () => [] }
  },
  data () {
    return {
      members: [],
      col: 5
    }
  },
  mounted () {
    this.divideMembers()
  },
  methods: {
    divideMembers () {
      let line = []
      for (let i = 0; i < this.rawMembers.length; i++) {
        if (i % this.col === 0 && i > 0) {
          this.members.push(line)
          line = []
          line.push(this.rawMembers[i])
        } else {
          line.push(this.rawMembers[i])
        }
      }
      if (line.length > 0) {
        this.members.push(line)
      }
    }
  }
}
</script>

<style scoped>
.member-show-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 1rem;
}
.member {
  width: 16%;
  margin: 0 2%;
}
</style>
