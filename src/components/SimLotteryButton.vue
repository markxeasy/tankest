<template>
  <v-btn color="warning" class="text-uppercase" v-on:click="simLottery()">simula draft</v-btn>
</template>

<script>
// Import state management methods and store
import { mutations } from "../store/teams";

export default {
  name: 'SimLotteryButton',
  methods: {
    simLottery: mutations.simLottery
  }
}
</script>

<style>
</style>
