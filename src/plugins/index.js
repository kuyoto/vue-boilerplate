// import and initialize global plugins
import eventBus from './event-bus'
import axios from './axios'

export default {
  install(Vue) {
    Vue.use(eventBus)
    Vue.use(axios)
  },
}
