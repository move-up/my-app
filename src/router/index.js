import Vue from 'vue'
import Router from 'vue-router'

//组件开发
import Home from '@/pages/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    { path: '/home', name: 'home', component: Home}
  ]
})