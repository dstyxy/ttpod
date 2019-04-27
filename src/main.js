import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
Vue.config.productionTip = false

import '@/assets/css/reset.stylus'
import '@/assets/css/main.stylus'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
