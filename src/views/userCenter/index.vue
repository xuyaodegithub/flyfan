<template>
    <section class="user">
        <div class="flex j-b userinfo a-i" :style="{background: `url(${headerBack}) no-repeat center`}">
            <div class="flex a-i relat">
                <div class="logo flex a-i">
                    <img :src="userInfoResult.headimg ? userInfoResult.headimg : imguser"
                         alt="">
                    <img src="../../assets/images/header_border1.png" alt="">
                </div>
                <div class="name">
                    <p>{{userInfoResult.username}}</p>
                    <p :style="backstyle">{{userInfoResult.vipdesc}}</p>
                    <p>推广码：{{userInfoResult.tgm}}</p>
                </div>
                <div class="jindu">查看升级进度</div>
            </div>
        </div>
        <div class="list">
            <div class="flex a-i j-b month">
                <div class="left">
                    <h4>本月业绩</h4>
                    <span>{{userInfoResult.byyj}}</span>
                </div>
                    <van-button round color="linear-gradient(to right, #fe7007, #fe4a0f)" sizes="small">查看详情</van-button>
            </div>
            <van-divider />
            <div class=" flex j-b a-i">
                <div v-for="(item,index) in selfMoney" :key="index">
                    <p>{{userInfoResult[item.str]}}</p>
                    <p>{{item.title}}</p>
                </div>
                <div @click="$router.push('/userWallet')">
                    <!--<van-icon name="balance-pay" />-->
                    <img src="../../assets/images/my_packets.png" alt="">
                    <p>我的钱包</p>
                </div>
            </div>
        </div>
        <div class="gnbtn">
            <h3>我的服务</h3>
            <div class="server">
                <van-grid :column-num="3">
                    <van-grid-item
                            @click="choseUserServer(item)"
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
                            @click="choseUserServer(item)"
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
    import { Icon , Toast, Grid, GridItem, Button,Divider,Dialog  } from 'vant';
    import { mapGetters, mapActions } from 'vuex'
    import back from '@/assets/images/header_bg1.png'
    import headerBack from '@/assets/images/banner.png'
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
    import imguser from '@/assets/images/img_user.png'
    import { userLogout } from '@/apis/index'
    export default {
        name: 'userCenter',
        data() {
            return {
                imguser,
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
                    {title:'推广二维码',img:s1,url:'/userQr'},
                    {title:'我的团队',img:s2,url:'/userTeam'},
                    {title:'我的银行卡',img:s3,url:'/userBank'},
                    {title:'我的佣金',img:s4,url:'/userCommission'},
                    {title:'拉新奖励',img:s5,url:'/userReward'},
                    {title:'我的消息',img:s6,url:'/userMess'},
                ],
                pserver:[
                    {title:'佣金表',img:s21,url:'/returnTable'},
                    {title:'新手须知',img:s22,url:'/platformTwo'},
                    {title:'意见反馈',img:s23,url:'/platformThree'},
                    {title:'修改密码',img:s24,url:'/platformFour'},
                    {title:'退出',img:s25,url:''},
                ]
            }
        },
        components: {
            [Icon.name]:Icon,
            [Grid.name]:Grid,
            [GridItem.name]:GridItem,
            [Button.name]:Button,
            [Divider.name]:Divider ,
            [Dialog .name]:Dialog  ,
        },
        computed: {
            ...mapGetters(['userInfoResult'])
        },
        methods: {
            ...mapActions(['userInfoAction']),
            choseUserServer(item){
                if(item.url==='/userBank' && !this.userInfoResult.yhk){
                   this.$router.push('/bindBankCard')
                    return
                }
                if(item.url)this.$router.push(item.url);
                else{
                    Dialog.confirm({
                        title: '提示',
                        message: '确认要退出么？',
                        confirmButtonColor:'#fe7007'
                    }).then(() => {
                        userLogout().then(res=>{
                            if(!res.code)this.$router.replace('/login')
                        })
                    }).catch(() => {
                        // on cancel
                    });

                }

            }
        },
        mounted(){
         this.userInfoAction()
        }
    }
</script>
<style scoped lang="scss">
    .user {
        padding-bottom: 1.2rem;
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
            .month{
                padding:0 .25rem 0;
                .left > span{
                    display: inline-block;
                    color: #e62c10;
                    margin-top: .15rem;
                }
                .van-button{
                    height: .6rem;
                    line-height: .6rem;
                }
            }
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
