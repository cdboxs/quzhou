import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Childlist from '@/pages/home/Childlist'
import Childinfo from '@/pages/home/Childinfo'
import About from '@/pages/about/About'
import Special from '@/pages/special/Special'
import Sinfo from '@/pages/special/Sinfo'
import News from '@/pages/news/News'
import NewsInfo from '@/pages/news/NewsInfo'
import Report from '@/pages/special/Report'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
			path:'/about',
			name:'About',
			component:About
    },
    {
      path:'/news',
      name:'News',
      component:News
    },
		{
		  path:'/newsinfo',
		  name:'NewsInfo',
		  component:NewsInfo
		},
    {
      path:'/special',
      name:'Special',
      component:Special
    },
    {
      path:'/sinfo',
      name:'Sinfo',
      component:Sinfo
    },
    {
      path:'/report',
      name:'Report',
      component:Report
    },
    {
      path:'/childlist',
      name:'Childlist',
      component:Childlist
    },
    {
      path:'/childinfo',
      name:'Childinfo',
      component:Childinfo
    }
  ]
})
