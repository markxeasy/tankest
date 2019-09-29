<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panels popout>
            <v-expansion-panel 
              v-for="rule in rules"
              :key="rule.title"
            >
              <v-expansion-panel-header>
                {{ rule.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ rule.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
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
