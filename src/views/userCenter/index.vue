<template>
    <section class="user">
        <div class="flex j-b userinfo a-i" :style="{background: `url(${headerBack}) no-repeat center`}">
            <div class="flex a-i">
                <div class="logo flex a-i">
                    <img src="http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaEIXlLl85lF4fzgzCicZBbRJxHVvoxNrCzO80xoKhuicT4g88FNbJVQIZDkekqLK5s6cweLhDSrLJQ5g/132"
                         alt="">
                    <img src="../../assets/images/header_border1.png" alt="">
                </div>
                <div class="name">
                    <p>飞奔的蚂蚁</p>
                    <p :style="backstyle">青铜会员</p>
                    <p>推广码：ec76d2</p>
                </div>
                <div>查看升级进度</div>
            </div>
        </div>
        <div class="list flex j-b a-i">

        </div>
    </section>
</template>

<script>
    // @ is an alias to /src
    import back from '@/assets/images/header_bg1.png'
    import headerBack from '@/assets/images/banner.png'
    export default {
        name: 'userCenter',
        data() {
            return {
                headerBack,
                backstyle: {
                    backgroundImage: `url(${back})`,
                    backgroundRepeat: 'noRepeat',
                    backgroundSize:'cover'
                },
                selfMoney:[
                    {title:'余额',num:'0元'},
                    {title:'待审',num:'0元'},
                    {title:'已提',num:'0元'},
                    {title:'我的钱包',num:'0元'},
                ]
            }
        },
        components: {},
        computed: {},
        methods: {}
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
    }
</style>
