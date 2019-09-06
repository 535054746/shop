// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
// mintUi的使用
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import News from './components/News.vue'
import HelloWorld from './components/HelloWorld.vue'
import Blue from './components/Bule.vue'
import Content from './components/Content.vue'
import Pcont from './components/Pcont.vue'
import News1 from './components/News1.vue'
import Login from './components/denglu.vue'
import User from './components/User.vue'
import UserAdd from './components/User/UserAdd.vue'
import UserList from './components/User/UserList.vue'

// 引入公共css  注意，创建项目的时候必须用scss
import './assets/css/basic.css';

const routes = [
  { path: '/home', component: HelloWorld },
  { path: '/news', component: News },
  { path: '/blue', component: Blue },
  { path: '/content/:aid', component: Content },
  { path: '/pcont', component: Pcont },
  { path: '/news1/:aid', component: News1},
  { path: '/login', component: Login },
  { path: '/user', component: User, children: [{ path: 'userAdd', component: UserAdd }, { path: 'userList', component: UserList }] },
  { path: '*', redirect:'/login'}// 默认跳转到login
]

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
