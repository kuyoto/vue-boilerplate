import axios from 'axios'
import store from '@/store'

axios.defaults.baseURl = process.env.VUE_APP_API_LOCATION
axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch('auth/logout')
    }

    return Promise.reject(error)
  }
)

export default {
  install(Vue) {
    Vue.prototype.$http = axios
  },
}
