/* jshint esversion: 8 */
import Vue from 'vue'
import Router from 'vue-router'
import myContract from '@/components/contract'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myContract',
      component: myContract
    }
  ]
})
