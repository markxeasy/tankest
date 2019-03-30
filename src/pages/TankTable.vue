<template>
  <data-table v-bind:teams="teams"></data-table>
</template>

<script>
import DataTable from '../components/DataTable.vue'
import ResetButton from '../components/ResetButton.vue'
import SimLotteryButton from '../components/SimLotteryButton.vue'

// Import fake team data
import MOCK_TEAMS from '../assets/data/teams.json'

export default {
  name: 'TankTable',
  components: {
    DataTable,
    ResetButton,
    SimLotteryButton
  },
  data () {
    return {
        teams: MOCK_TEAMS
    }
  },
  methods: {
    calcFirstPickChance (teams) {}
  },
  created () {
    this.calcFirstPickChance(this.teams);
  },
}
</script>

<style>
</style>
