import { boot } from 'quasar/wrappers'
import axios from 'axios'
// import mqttjs from 'mqtt'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

// API DONI
const api = axios.create({ baseURL: 'http://192.168.5.46:5050/' })
// const api = axios.create({ baseURL: 'http://192.168.99.46:5050/' })
// const api = axios.create({ baseURL: 'http://192.168.43.172:5050/' })
// END API DONI
// const api = axios.create({ baseURL: 'http://localhost:5050/' })
// const client = mqttjs.connect({ baseURL: 'ws://cloudrmq.pptik.id:15675/ws' })
// const api = axios.create({ baseURL: 'http://192.168.1.37:5050' })
// const api = axios.create({ baseURL: 'http://192.168.119.46:5050' })
// const api = axios.create({ baseURL: 'http://192.168.78.46:5050' })
// const url = 'https://192.168.43.172:5050'
// const api = axios.create({ baseURL: url })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  // app.config.globalProperties.$imgUrl = url
  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
// export { client }
