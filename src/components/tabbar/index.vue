<template>
    <div class="tab">
        <van-tabbar
                route
                v-model="active"
                active-color="#DC1234"
                inactive-color="#333"
                :z-index="99"
        >
            <van-tabbar-item icon="icon iconfont icon-shouye" to="/" replace>首页</van-tabbar-item>
            <van-tabbar-item icon="icon iconfont icon-tuiguang" to="/extension" replace>我的客户</van-tabbar-item>
            <van-tabbar-item icon="icon iconfont icon-tuandui" to="/team" replace>我的进度</van-tabbar-item>
            <van-tabbar-item icon="icon iconfont icon-wode" to="/user" replace>个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { Tabbar, TabbarItem } from 'vant';

    export default {
        name: 'tabbar',
        data(){
          return {
              active:0
          }
        },
        components: {
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem,
        },
        computed:{

        },
        methods:{

        }
    }
</script>
<style scoped lang="scss">

</style>
