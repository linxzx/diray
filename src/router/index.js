/*
 * @Date: 2020-08-27 11:06:44
 * @LastEditors: 清茶袅袅落子声
 * @LastEditTime: 2020-09-25 17:46:11
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import WaterDrops from '@/components/WaterDrops'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/WaterDrops',
      name: 'WaterDrops',
      component: WaterDrops
    },
  ]
})
