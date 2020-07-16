import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// import the vuetify plugin
import vuetify from '@/plugins/vuetify'
import '@/plugins'
import '@/mixins'

// Vue.use(plugins)

// configure whether to allow vue-devtools inspection
Vue.config.devTools = process.env.NODE_ENV !== 'production'

// suppress all Vue logs and warnings
Vue.config.silent = process.env.NODE_ENV === 'production'

// set this to false to prevent the production tipon Vue startup
Vue.config.productionTip = process.env.NODE_ENV !== 'production'

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
})

app.$mount('#app')
