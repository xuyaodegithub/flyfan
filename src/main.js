import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './style/public.css'
import filters from './filters'
import VueLazyload from 'vue-lazyload'
import './assets/iconfont/iconfont.css'
import jsdk from 'weixin-js-sdk';


Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/images/logo.png',
  loading: './assets/images/logo.png',
  attempt: 3
});


Vue.config.productionTip = false;
Vue.prototype.$wx=jsdk
Object.keys(filters).map(v=>{
  Vue.filter(v,filters[v])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
