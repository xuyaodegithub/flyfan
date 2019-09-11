<template>
    <section class="user">
        <div class="flex j-b userinfo a-i">
            <div class="flex a-i">
                <div class="logo">
                    <img src="http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaEIXlLl85lF4fzgzCicZBbRJxHVvoxNrCzO80xoKhuicT4g88FNbJVQIZDkekqLK5s6cweLhDSrLJQ5g/132" alt="">
                    <img src="../../assets/images/header_border1.png" alt="">
                </div>
                <div class="name">
                   <p>飞奔的蚂蚁</p>
                   <p>青铜会员</p>
                   <p>推广码：ec76d2</p>
                </div>
                <div>查看升级进度</div>
            </div>
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
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .3rem;
         position: relative;
         img{
             display: block;
             width: 100%;
             &:first-child{
                 border-radius: .2rem;
             }
             &:last-child{
                 position: absolute;
                 top: 0;
                 left: 0;
             }
         }
    }
    .name{
        font-size: .36rem;
        color: #333;
        p:nth-child(2){
            font-size: .28rem;
        }
        p:last-child{
            font-size: .24rem;
        }
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
