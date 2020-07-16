import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  theme: {
    // dark: true,
  },
  iconfont: 'mdi',
}

const vuetify = new Vuetify(opts)

export default vuetify
