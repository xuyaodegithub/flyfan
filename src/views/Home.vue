<template>
    <div class="home">
        <img alt="Vue logo" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3925233323,1705701801&fm=26&gp=0.jpg">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <van-button type="warning" @click="warnings()">警告按钮</van-button>
        <van-area :area-list="areaList" />
    </div>
</template>

<script>
    // @ is an alias to /src
    import area from '../utils/area'
    import { Button } from 'vant';
    import { Area } from 'vant';
    import { Toast } from 'vant';
    import HelloWorld from '@/components/HelloWorld.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'home',
        data(){
          return {
              areaList:area,
              imgs:'https://ss0.bom/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2786741331,312930537&fm=26&gp=0.jpg'
          }
        },
        components: {
            HelloWorld,[Button.name]:Button,[Area.name]:Area,
        },
        computed:{
            ...mapState(['aaa'])
        },
        methods:{
            warnings(){
                Toast.loading({
                    mask: true,
                    message: '加载中...',
                    duration:0
                });
                setTimeout(()=>{
                    Toast.clear()
                    alert($('img').attr('src'))
                },5000)
            }
        }
    }
</script>
<style scoped lang="scss">
    $o:orange;
    .van-button--warning{
        background-color:$o ;
    }
</style>
