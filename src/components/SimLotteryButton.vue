<template>
  <v-btn color="warning" class="text-uppercase" v-on:click="simLottery()">simula draft</v-btn>
</template>

<script>
// Helpers
const lotteryHelper = require('../helpers/lotteryHelper');

export default {
  name: 'SimLotteryButton',
  props: {
      teams: Array
  },
  data () {
    return {}
  },
  methods: {
    simLottery() {
      this.teams = lotteryHelper.doLottery(this.teams);
    }
  }
}
</script>

<style>
</style>
