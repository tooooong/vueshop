import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import Newslist from './components/news/Newslist.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import Photolist from './components/photolist/Photolist.vue'
import Photoinfo from './components/photolist/Photoinfo.vue'
import Goodslist from './components/goods/Goodslist.vue'
import Goodsinfo from './components/goods/Goodsinfo.vue'
import Goodsdetail from './components/goods/Goodsdetail.vue'
import Goodscomment from './components/goods/Goodscomment.vue'

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
    },
    {
      path: '/home/photolist',
      name: 'photolist',
      component: Photolist
    },
    {
      path: '/home/photoinfo/:id',
      name: 'photoinfo',
      component: Photoinfo
    },
    {
      path: '/home/goodslist',
      name: 'goodslist',
      component: Goodslist
    },
    {
      path: '/home/goodsinfo/:id',
      name: 'goodsinfo',
      component: Goodsinfo
    },
    {
      path: '/home/goodsdetail/:id',
      name: 'goodsdetail',
      component: Goodsdetail
    },
    {
      path: '/home/goodscomment',
      name: 'goodscomment',
      component: Goodscomment
    },
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
