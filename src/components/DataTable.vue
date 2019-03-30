<template>
  <v-data-table
    :headers="headers"
    :items="teams"
    :rows-per-page-items="pageItems"
    class="elevation-1"
  >
    <template v-slot:items="data">
      <td>{{ data.item.pick }}</td>
      <td class="text-xs-middle">{{ data.item.name }}</td>
      <td class="text-xs-right">{{ data.item.wins }}</td>
      <td class="text-xs-right">{{ data.item.losses }}</td>
      <td class="text-xs-right">{{ data.item.points }}</td>
      <td class="text-xs-right">{{ data.item.chance }}%</td>
    </template>
  </v-data-table>
</template>

<script>


export default {
  name: 'DataTable',
  props: {
      teams: Object
  },
  data () {
    return {
        headers: [
          {
            text: 'Scelta',
            align: 'left',
            sortable: true,
            value: 'pick'
          },
          {
            text: 'Squadra',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { 
            text: 'Vittorie', 
            align: 'right',
            sortable: true,
            value: 'wins' 
          },
          { 
            text: 'Sconfitte', 
            align: 'right',
            sortable: true,
            value: 'losses' 
          },
          { 
            text: 'Punti totali',
            align: 'right',
            sortable: true,
            value: 'points' 
          },
          { 
            text: 'Probab. scelta #1',
            align: 'right',
            sortable: true, 
            value: 'chance' 
          }
        ],
        pageItems: [20]
    }
  }
}
</script>

<style>
</style>
