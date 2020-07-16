// the store of the application
// http://vuex.vuejs.org/en/index.html
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// import the modules
import * as modules from './modules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

export default store
