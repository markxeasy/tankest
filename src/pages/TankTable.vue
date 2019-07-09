<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-flex lg2>
        <sim-lottery-button></sim-lottery-button>
      </v-flex>
      <v-flex lg2>
        <reset-button></reset-button>
      </v-flex>
    </v-layout>
    <data-table></data-table>
  </v-container>
</template>

<script>
import DataTable from '../components/DataTable.vue'
import ResetButton from '../components/ResetButton.vue'
import SimLotteryButton from '../components/SimLotteryButton.vue'


export default {
  name: 'TankTable',
  components: {
    DataTable,
    ResetButton,
    SimLotteryButton
  },
  methods: {},
  created () {},
}
</script>

<style>
</style>
