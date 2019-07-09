<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="rule in rules"
            :key="rule"
          >
            <template v-slot:header>
              <div style="font-weight: bold;">{{ rule.title }}</div>
            </template>
            <v-card>
              <v-card-text>{{ rule.description }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Import rules data
import RULES from '../assets/data/rules.json'

export default {
  name: 'Rules',
  data() {
    return {
      rules: RULES
    }
  },
  methods: {},
  created () {},
}
</script>

<style>
</style>
