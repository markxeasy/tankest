<template>
  <v-app>
    <v-toolbar app color="orange">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Tankest</span>
        <span class="font-weight-light hidden-sm-and-down">- Hinkie approved</span>
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
        <v-navigation-drawer
          v-model="drawer"
          :mini-variant="mini"
          absolute
          dark
          temporary
        >
          <v-list class="pt-0" dense>
            <v-divider light></v-divider>

            <v-list-tile
              v-for="item in items"
              :key="item.title"
              :href="item.link"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
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
      drawer: null,
        items: [
          { title: 'Draft', icon: 'table_chart', link: '/' },
          { title: 'Regole', icon: 'playlist_add_check', link: '/regolamento' },
          { title: 'Hall of Fame', icon: 'star', link: '/hof' }
        ],
        mini: false,
        right: null
    }
  }
}
</script>
