// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible';
import Axios from'axios'
import VueAxios from 'vue-axios'
import 'swiper/dist/css/swiper.css';
import {T} from '@/pages/classF/Tool.js'
Vue.prototype.T=T;
Vue.use(VueAxios,Axios);


/*自定义指令

fb:获取焦点与失去焦点
*/
Vue.directive('fb',function(el){
   
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
  		
  }
});





