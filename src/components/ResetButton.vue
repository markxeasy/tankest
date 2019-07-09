<template>
  <v-btn class="text-uppercase" v-on:click="resetTeams()">reset</v-btn>
</template>

<script>
// Import state management methods and store
import { mutations } from "../store/teams";

export default {
  name: 'ResetButton',
  methods: {
    resetTeams: mutations.resetTeams
  }
}
</script>

<style>
</style>
