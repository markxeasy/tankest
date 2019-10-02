<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center class="table-actions">
      <v-flex lg2>
        <v-flex row justify-center>
          <sim-lottery-button></sim-lottery-button>
        </v-flex>
      </v-flex>
      <v-flex lg2>
        <v-flex row justify-center>
          <reset-button></reset-button>
        </v-flex>
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
.table-actions {
  margin-bottom: 2rem;
}
</style>
