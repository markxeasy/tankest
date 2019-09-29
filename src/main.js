import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app')