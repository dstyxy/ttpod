import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

import main from '@/components/main.vue'

let router = new Router({
  routes:[
    {
      path:'/',
      component:main
    }
  ]
})


export default router