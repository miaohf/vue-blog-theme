import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@/utils/analytics'
import 'buefy/dist/buefy.css'
import 'reset-css'

import { Navbar, Pagination, Icon } from 'buefy'

Vue.use(Icon)
Vue.use(Navbar)
Vue.use(Pagination)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
