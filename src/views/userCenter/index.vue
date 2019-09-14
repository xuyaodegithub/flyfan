<template>
    <section class="user">
        <div class="flex j-b userinfo a-i" :style="{background: `url(${headerBack}) no-repeat center`}">
            <div class="flex a-i relat">
                <div class="logo flex a-i">
                    <img :src="userMsg.headimg ? userMsg.headimg : 'http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaEIXlLl85lF4fzgzCicZBbRJxHVvoxNrCzO80xoKhuicT4g88FNbJVQIZDkekqLK5s6cweLhDSrLJQ5g/132'"
                         alt="">
                    <img src="../../assets/images/header_border1.png" alt="">
                </div>
                <div class="name">
                    <p>{{userMsg.username}}</p>
                    <p :style="backstyle">{{userMsg.vipdesc}}</p>
                    <p>推广码：{{userMsg.tgm}}</p>
                </div>
                <div class="jindu">查看升级进度</div>
            </div>
        </div>
        <div class="list flex j-b a-i">
            <div v-for="(item,index) in selfMoney" :key="index">
                <p>{{userMsg[item.str]}}</p>
                <p>{{item.title}}</p>
            </div>
            <div>
                <!--<van-icon name="balance-pay" />-->
                <img src="../../assets/images/my_packets.png" alt="">
                <p>我的钱包</p>
            </div>
        </div>
        <div class="gnbtn">
            <h3>我的服务</h3>
            <div class="server">
                <van-grid :column-num="3">
                    <van-grid-item
                            v-for="(item,index) in server"
                            :key="index"
                    >
                        <img :src="item.img" alt="">
                        <p>{{item.title}}</p>
                    </van-grid-item>
                </van-grid>
            </div>
            <h3>平台服务</h3>
            <div class="server">
                <van-grid :column-num="3">
                    <van-grid-item
                            v-for="(item,index) in pserver"
                            :key="index"
                    >
                        <img :src="item.img" alt="">
                        <p>{{item.title}}</p>
                    </van-grid-item>
                </van-grid>
            </div>
        </div>
    </section>
</template>

<script>
    // @ is an alias to /src
    import { Icon , Toast, Grid, GridItem  } from 'vant';
    import back from '@/assets/images/header_bg1.png'
    import headerBack from '@/assets/images/banner.png'
    import { userInfo } from '@/apis/index'
    import s1 from '@/assets/images/server1.png'
    import s2 from '@/assets/images/server2.png'
    import s3 from '@/assets/images/server3.png'
    import s4 from '@/assets/images/server4.png'
    import s5 from '@/assets/images/server5.png'
    import s6 from '@/assets/images/server6.png'
    import s21 from '@/assets/images/server21.png'
    import s22 from '@/assets/images/server22.png'
    import s23 from '@/assets/images/server23.png'
    import s24 from '@/assets/images/server24.png'
    import s25 from '@/assets/images/server25.png'
    export default {
        name: 'userCenter',
        data() {
            return {
                userMsg:{},
                headerBack,
                backstyle: {
                    backgroundImage: `url(${back})`,
                    backgroundRepeat: 'noRepeat',
                    backgroundSize:'cover'
                },
                selfMoney:[
                    {title:'余额',str:'zhhuye'},
                    {title:'待审',str:'kngzye'},
                    {title:'已提',str:'yitiye'},
                ],
                server:[
                    {title:'推广二维码',img:s1},
                    {title:'我的团队',img:s2},
                    {title:'我的银行卡',img:s3},
                    {title:'我的佣金',img:s4},
                    {title:'拉新奖励',img:s5},
                    {title:'我的消息',img:s6},
                ],
                pserver:[
                    {title:'佣金表',img:s21},
                    {title:'新手须知',img:s22},
                    {title:'意见反馈',img:s23},
                    {title:'修改密码',img:s24},
                    {title:'退出',img:s25},
                ]
            }
        },
        components: {
            [Icon.name]:Icon,
            [Grid.name]:Grid,
            [GridItem.name]:GridItem,
        },
        computed: {},
        methods: {},
        mounted(){
            userInfo().then(res=>{
                if(!res.code)this.userMsg=res.msg
            })
        }
    }
</script>
<style scoped lang="scss">
    .user {
        font-size: .32rem;
        color: #333;
        .userinfo {
            padding:0 .3rem;
            height: 3.2rem;
            color: #fff;
            background-size: cover;
            position: relative;
        }
        .logo {
            justify-content: center;
            width: 1.5rem;
            height: 1.5rem;
            margin-right: .3rem;
            position: relative;
            img {
                display: block;
                width: 90%;
                &:first-child {
                    border-radius: .2rem;
                }
                &:last-child {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }
        .name {
            font-size: .36rem;
            p:nth-child(2) {
                font-size: .28rem;
                width: 2.12rem;
                text-align: center;
                padding-left: .2rem;
                margin: .1rem 0;
            }
            p:last-child {
                font-size: .24rem;
            }
        }
        .jindu{
            font-size: .28rem;
            line-height: .58rem;
            position: absolute;
            width: 2.28rem;
            right: 0;
            top: 50%;
            margin-top: -0.29rem;
            background-color: rgba(0,0,0,.3);
            text-align: center;
            border-top-left-radius: 0.29rem;
            border-bottom-left-radius: 0.29rem;
            padding-left: .1rem;
        }
        .list{
            text-align: center;
            margin: 0 auto;
            width: 90%;
            background-color: #fff;
            padding: .3rem .4rem;
            font-size: .28rem;
            border-radius: .2rem;
            position: relative;
            margin-top: -.5rem;
            box-shadow: 0 0 .1rem #eee ;
            p:first-child{
                color: #e62c10;
                margin-bottom: .15rem;
            }
            img{
                margin-bottom: .15rem;
                width: .46rem;
            }
        }
        .gnbtn{
            width: 90%;
            margin: 0 auto .8rem;
            font-size: .24rem;
            h3{
                font-size: .28rem;
                font-weight: 400;
                margin: .2rem auto;
                border-left: 4px solid #e62c10;
                line-height: 1;
                text-indent: 1em;
            }
            .server{
                border-radius: .2rem;
                overflow: hidden;
                img{
                    width: .68rem;
                    height: .68rem;
                    margin-bottom: .15rem;
                }
            }
        }
    }
</style>
