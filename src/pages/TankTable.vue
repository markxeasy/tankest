<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-flex lg2>
        <sim-lottery-button v-bind:teams="teams"></sim-lottery-button>
      </v-flex>
      <v-flex lg2>
        <reset-button></reset-button>
      </v-flex>
    </v-layout>
    <data-table v-bind:teams="teams"></data-table>
  </v-container>
</template>

<script>
import DataTable from '../components/DataTable.vue'
import ResetButton from '../components/ResetButton.vue'
import SimLotteryButton from '../components/SimLotteryButton.vue'

// Import fake team data
import MOCK_TEAMS from '../assets/data/teams.json'

// Helpers
const teamHelper = require('../helpers/teamHelper');
const lotteryHelper = require('../helpers/lotteryHelper');

export default {
  name: 'TankTable',
  components: {
    DataTable,
    ResetButton,
    SimLotteryButton
  },
  data () {
    return {
        teams: teamHelper.formatTeams(MOCK_TEAMS)
    }
  },
  methods: {
    prepareTeams(teams) {
      this.teams = lotteryHelper.prepareTeams(teams);
    }
  },
  created () {
    this.prepareTeams(this.teams);
  },
}
</script>

<style>
</style>
