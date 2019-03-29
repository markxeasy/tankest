<template>
  <v-data-table
    :headers="headers"
    :items="teams"
    class="elevation-1"
  >
    <template v-slot:items="data">
      <td>{{ data.item.name }}</td>
      <td class="text-xs-right">{{ data.item.wins }}</td>
      <td class="text-xs-right">{{ data.item.losses }}</td>
      <td class="text-xs-right">{{ data.item.points }}</td>
      <td class="text-xs-right">{{ data.item.chance }}</td>
    </template>
  </v-data-table>
</template>

<script>
// Import fake team data
import MOCK_TEAMS from '../assets/data/teams.json'

export default {
  name: 'TankTable',
  data () {
    return {
        headers: [
          {
            text: 'Squadra',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Vittorie', value: 'wins' },
          { text: 'Sconfitte', value: 'losses' },
          { text: 'Punti totali', value: 'points' },
          { text: 'Probab. scelta #1', value: 'chance' }
        ],
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
