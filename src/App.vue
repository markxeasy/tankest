<template>
  <v-app>
    <v-toolbar app color="orange">
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Tankest</span>
        <span class="font-weight-light">- per il piccolo Hinkie in ognuno di noi</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      //
    }
  }
}
</script>
