import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './style/reset.css'
import filters from './filters'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/images/logo.png',
  loading: './assets/images/logo.png',
  attempt: 3
});


Vue.config.productionTip = false;

Object.keys(filters).map(v=>{
  Vue.filter(v,filters[v])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
