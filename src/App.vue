<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Tankest</span>
        <span class="font-weight-light">- per il piccolo Hinkie in ognuno di noi</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
