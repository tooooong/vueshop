import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import Newslist from './components/news/Newslist.vue'
import Newsinfo from './components/news/Newsinfo.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/home/newslist',
      name: 'newslist',
      component: Newslist
    },
    {
      path: '/home/newsinfo/:id',
      name: 'newsinfo',
      component: Newsinfo
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
  linkActiveClass: 'mui-active'
})
