<template>
    <section class="user">
        <div class="flex j-b userinfo a-i">
            <div class="flex a-i">
                <img src="../../assets/images/my.jpg" alt="" class="logo radius50">
                <div>
                   <p>飞奔的蚂蚁</p>
                   <p>ID: 16605813146</p>
                </div>
            </div>
            <div class="mess radius50">
                <img src="../../assets/images/mess.png" alt="">
            </div>
        </div>
        <div class="join">
            <img src="../../assets/images/join2.jpg" alt="">
        </div>
        <div class="tabs flex j-b a-i">
            <div v-for="(item,index) in tabs" :key="index">
                <div class="radius50">
                    <img :src="item.img" alt="">
                </div>
                <p>{{item.title}}</p>
            </div>
        </div>
    </section>
</template>

<script>
    // @ is an alias to /src
    import req from '@/assets/images/ques.png'
    import ser from '@/assets/images/server.png'
    import sea from '@/assets/images/sea.png'
    import sch from '@/assets/images/school.png'
    export default {
        name: 'userCenter',
        data(){
          return {
            tabs:[
                {title:'常见问题',img:req},
                {title:'联系客服',img:ser},
                {title:'查看进度',img:sea},
                {title:'商学院',img:sch},
            ]
          }
        },
        components: {

        },
        computed:{

        },
        methods:{

        }
    }
</script>
<style scoped lang="scss">
.user{
    font-size: .32rem;
    color: #333;
    .userinfo{
        padding: .3rem;
    }
     .logo{
        display: block;
        width: 1.3rem;
        height: 1.3rem;
        margin-right: .3rem;
    }
    .flex p:first-child{
        margin-bottom: 0.2rem;
    }
    .mess{
        padding: .15rem;
        background-color: #efeff1;
        box-shadow: 0 0 .15rem #178bf0 inset;
    }
    .userinfo img:last-child{
        display: block;
        width: .5rem;
    }
    .join{
        padding: .4rem .15rem .5rem;
        img{
            display: block;
        }
    }
    .tabs{
        padding: 0 .3rem;
        font-size: .28rem;
        color: #333;
        text-align: center;
        p{
            margin-top: .15rem;
        }
        & > div > div{
           display: inline-block;
           padding: .15rem;
           box-shadow: 0 0 .2rem #cdcdcd inset;
           img{
               display: block;
               width: .6rem;
               height: .6rem;
           }
        }
    }
}
</style>
