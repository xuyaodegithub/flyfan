<template>
  <div id="app" :style="styles">
    <transition name="fade">
      <router-view class='childView' />
    </transition>
    <tab-bar  v-if="whiteList.indexOf($route.name) > -1"></tab-bar>
  </div>
</template>
<script>
  import tabBar from '@/components/tabbar/index'
  export default {
    name: 'App',
    data(){
      return {
          whiteList: ['首页', '我的代理', '下款记录', '个人中心'],
          styleB:['登录','注册']
      }
    },
      computed: {
          styles() {
              return  this.styleB.includes(this.$route.name) ? {backgroundColor: '#fff'} : {}
          }
      },
    components:{
      tabBar
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height:100%;
}
  .fade-enter-active{
    transform: translateX(100%);
  }
  .fade-leave-active{
    transform: translateX(-100%);
  }
  .childView{
    transition: all .15s;
  }

</style>
