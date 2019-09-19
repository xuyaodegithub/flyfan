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
      path: '/login',
      name: '登录',
      component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
    },
    {
      path: '/register',
      name: '注册',
      component: () => import(/* webpackChunkName: "register" */ '../views/register/index.vue')
    },
    {
      path: '/myAgent',
      name: '我的代理',
      component: () => import(/* webpackChunkName: "Extension" */ '../views/myAgent/index.vue')
    },{
      path: '/Record',
      name: '下款记录',
      component: () => import(/* webpackChunkName: "team" */ '../views/Record/index.vue')
    },{
      path: '/user',
      name: '个人中心',
      component: () => import(/* webpackChunkName: "userCenter" */ '../views/userCenter/index.vue')
    },{
      path: '/productList',
      name: '产品列表',
      component: () => import(/* webpackChunkName: "productList" */ '../views/index/productList/index.vue')
    },{
      path: '/productOutline',
      name: '产品大纲',
      component: () => import(/* webpackChunkName: "productOutline" */ '../views/index/productOutline/index.vue')
    },{
      path: '/returnTable',
      name: '返佣表',
      component: () => import(/* webpackChunkName: "returnTable" */ '../views/index/returnTable/index.vue')
    },{
      path: '/bigAdd',
      name: '大银加系统',
      component: () => import(/* webpackChunkName: "bigAdd" */ '../views/index/bigAdd/index.vue')
    },{
      path: '/detial',
      name: '商品详情',
      component: () => import(/* webpackChunkName: "productDetial" */ '../views/index/procuctDetial/index.vue')
    },{
      path: '/userWallet',
      name: '我的钱包',
      component: () => import(/* webpackChunkName: "userWallet" */ '../views/userCenter/userWallet/index.vue')
    },{
      path: '/Income_details',
      name: '收入明细',
      component: () => import(/* webpackChunkName: "userWallet" */ '../views/userCenter/userWallet/Income_details.vue')
    },{
      path: '/Presentation_details',
      name: '提现明细',
      component: () => import(/* webpackChunkName: "userWallet" */ '../views/userCenter/userWallet/Presentation_details.vue')
    },{
      path: '/userQr',
      name: '推广二维码',
      component: () => import(/* webpackChunkName: "userQr" */ '../views/userCenter/userQr/index.vue')
    },{
      path: '/userTeam',
      name: '我的团队',
      component: () => import(/* webpackChunkName: "userTeam" */ '../views/userCenter/userTeam/index.vue')
    },{
      path: '/userBank',
      name: '我的银行卡',
      component: () => import(/* webpackChunkName: "userBank" */ '../views/userCenter/userBank/index.vue')
    },{
      path: '/userCommission',
      name: '我的佣金',
      component: () => import(/* webpackChunkName: "userCommission" */ '../views/userCenter/userCommission/index.vue')
    },{
      path: '/userReward',
      name: '拉新奖励',
      component: () => import(/* webpackChunkName: "userReward" */ '../views/userCenter/userReward/index.vue')
    },{
      path: '/userMess',
      name: '我的消息',
      component: () => import(/* webpackChunkName: "userMess" */ '../views/userCenter/userMess/index.vue')
    },{
      path: '/bindBankCard',
      name: '绑定银行卡',
      component: () => import(/* webpackChunkName: "bindBankCard" */ '../views/userCenter/bindBankCard/index.vue')
    },{
      path: '/platformTwo',
      name: '新手须知',
      component: () => import(/* webpackChunkName: "platformTwo" */ '../views/userCenter/platformTwo/index.vue')
    },{
      path: '/platformThree',
      name: '意见反馈',
      component: () => import(/* webpackChunkName: "platformThree" */ '../views/userCenter/platformThree/index.vue')
    },{
      path: '/platformFour',
      name: '修改密码',
      component: () => import(/* webpackChunkName: "platformFour" */ '../views/userCenter/platformFour/index.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {//路由切换时滚轮位置//scrollBehavior 方法接收 to 和 from 路由对象。第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    }else{
      return { x: 0, y:0 }
    }
  }
});
routers.beforeEach ((to,from,next) =>{
  document.title=to.name;
  next()
});
export default routers
