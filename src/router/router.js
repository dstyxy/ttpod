import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

import Main from '@/components/Main.vue'

let router = new Router({
  routes:[
    {
      path:'/',
      component:Main
    }
  ]
})


export default router