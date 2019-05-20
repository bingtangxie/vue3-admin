import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
import Staff from '@/views/Staff.vue'
import ListUser from '@/views/ListUser.vue'
import FundList from '@/views/FoundList.vue'
import InfoShow from '@/views/InfoShow.vue'
import ChinaTabsList from '@/views/ChinaTabsList.vue'
import ChinaTouziList from '@/views/ChinaTouziList.vue'
import MapList from '@/views/MapList.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path: '/',
     redirect: 'index'
   }, {
     path: '/index',
     name: 'index',
     component: Index,
     children: [
       { path: "", component: Home},
       { path: "/home", name: "home", component: Home },
       { path: "/staff", name: "staff", component: Staff },
       { path: "/listuser", name: "listuser", component: ListUser },
       { path: "/foundlist", name: "fundlist", component: FundList },
       { path: "/Infoshow", name: "Infoshow", component: InfoShow },
       { path:  "/chinaTabsList", name: "ChinaTabsList", component: ChinaTabsList },
       { path: "/chinaTouziList", name: "chinaTouziList", component: ChinaTouziList },
       { path: "/maplist", name: "maplist", component: MapList },
     ]
   },{
     path: '/login',
     name: 'login',
     component: Login,
   }, 
   {
     path: '/register',
     name: 'register',
     component: Register,
   }
  ]
})
