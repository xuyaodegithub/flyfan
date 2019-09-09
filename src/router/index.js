import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routers  = new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue')
    },
    {
      path: '/extension',
      name: '推广',
      component: () => import(/* webpackChunkName: "about" */ '../views/Extension/index.vue')
    },{
      path: '/team',
      name: '团队',
      component: () => import(/* webpackChunkName: "about" */ '../views/team/index.vue')
    },{
      path: '/user',
      name: '我的',
      component: () => import(/* webpackChunkName: "about" */ '../views/userCenter/index.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {//路由切换时滚轮位置//scrollBehavior 方法接收 to 和 from 路由对象。第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    }else{
      // return { x: 0, y:0 }
    }
  }
});
routers.beforeEach ((to,from,next) =>{
  document.title=to.name;
  next()
});
export default routers
