<template>
  <v-app>
    <v-app-bar app color="orange">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Tankest</span>
        <span class="font-weight-light hidden-sm-and-down">- Hinkie approved</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

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

            <v-list-item
              v-for="item in items"
              :key="item.title"
              :href="item.link"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
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
