<template>
  <v-card
    :color="record.color"
    dark
  >
    <v-list-item three-line>
      <v-list-item-content class="align-self-start">
        <v-list-item-title
          class="headline mb-2"
          v-text="record.title"
        ></v-list-item-title>

        <v-list-item-subtitle v-text="record.holder"></v-list-item-subtitle>
        <v-list-item-subtitle v-text="record.value"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        size="125"
        tile
      >
        <v-icon>{{record.icon}}</v-icon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  name: 'RecordCard',
  props: ['record'],
  methods: {},
  created () {},
}
</script>