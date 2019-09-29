<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-flex xs12 md6 lg6 v-for="(record, i) in records" :key="i">
        <record-card v-bind:record="record"></record-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RecordCard from '../components/RecordCard.vue';
import RECORDS from '../assets/data/records.json';

export default {
  name: 'HallOfFame',
  components: {
    RecordCard
  },
  data() {
    return {
      records: RECORDS
    }
  },
  methods: {},
  created () {},
}
</script>

<style>
</style>
