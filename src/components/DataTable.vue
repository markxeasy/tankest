<template>
  <v-data-table
    :headers="headers"
    :items="teams"
    :rows-per-page-items="pageItems"
    class="elevation-1"
  >
    <template v-slot:items="data">
      <td>{{ data.item.pick }}</td>
      <td class="text-xs-middle column-narrow">{{ data.item.name }}</td>
      <td class="text-xs-left text-lg-right column-narrow">{{ (data.item.chance * 100) }}%</td>
      <td class="text-xs-left text-lg-right column-narrow">{{ data.item.wins }}</td>
      <td class="text-xs-left text-lg-right column-narrow">{{ data.item.losses }}</td>
      <td class="text-xs-left text-lg-right column-narrow">{{ data.item.points }}</td>
    </template>
  </v-data-table>
</template>

<script>
// Import state management methods and store
import { store } from "../store/teams";

export default {
  name: 'DataTable',
  computed: {
    teams() {
        return store.teams;
    }
  },
  data () {
    return {
        headers: [
          {
            text: 'Pick',
            align: 'left',
            sortable: true,
            value: 'pick',
            class: 'column-narrow'
          },
          {
            text: 'Squadra',
            align: 'left',
            sortable: false,
            value: 'name',
            class: 'column-narrow'
          },
          { 
            text: ' Prob. pick #1',
            align: 'left',
            sortable: true, 
            value: 'chance',
            class: 'column-narrow'
          },
          { 
            text: 'Vittorie', 
            align: 'left',
            sortable: true,
            value: 'wins',
            class: 'column-narrow'
          },
          { 
            text: 'Sconfitte', 
            align: 'left',
            sortable: true,
            value: 'losses',
            class: 'column-narrow'
          },
          { 
            text: 'Punti totali',
            align: 'left',
            sortable: true,
            value: 'points',
            class: 'column-narrow'
          }
        ],
        pageItems: [20]
    }
  }
}
</script>

<style>
.column-narrow {
  padding: 1.5rem !important;
}
</style>
