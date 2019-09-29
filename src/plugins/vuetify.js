import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    iconfont: 'md'
})

const opts = {}

export default new Vuetify(opts)