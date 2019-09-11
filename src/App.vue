<template>
  <div id="app">
    <transition name="fade">
      <router-view class='childView' />
    </transition>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
  import tabBar from '@/components/tabbar/index'
  export default {
    name: 'App',
    data(){
      return {

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
