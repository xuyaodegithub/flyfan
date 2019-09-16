<template>
    <section class="procuctDetial">
        <div class="item">
            <div class="head">
                <img :src="itemInfo.img" alt="">
                <span>{{itemInfo.name}}</span>
            </div>
            <div class="content">
                <div class="notitle">
                    <div v-for="(item,idx) in msg" :key="idx" class="flex j-b ">
                        <span>{{item.name}}</span>
                        <span>{{itemInfo[item.str]}}</span>
                    </div>
                </div>
                <div class="hasTitle">
                    <h4>申请条件</h4>
                    <van-divider />
                    <div class="val" v-html="getCl(itemInfo.sqtj)">

                    </div>
                </div>
                <div class="hasTitle">
                    <h4>所需材料</h4>
                    <van-divider />
                    <div class="val" v-html="getCl(itemInfo.sxcl)">

                    </div>
                </div>
            </div>
        </div>
        <div class="fixed" @click="getqrCode()">
            <van-icon name="qr" />
            推荐贷款
        </div>
        <van-overlay
                :show="show"
                @click="show = false"
        />
        <div class="qrcode" v-if="show">
            <p>客户扫码注册将成为您的客户,</p>
            <p> 客户贷款成功将计入您的业绩。</p>
            <img v-lazy="qrcodemsg" alt="">
            <p>长按上图保存到相册</p>
            <p>将上图发给客户，客户自行扫码申请</p>
        </div>
    </section>
</template>

<script>
    import { Tag,Divider,Icon,Overlay } from 'vant';
    import { mapGetters } from 'vuex'
    export default {
        name: "productList",
        data(){
            return {
                msg:[
                    {name:'月费率:',str:'yfl'},
                    {name:'资方前置:',str:'zfqz'},
                    {name:'额度区间:',str:'edqj'},
                    {name:'借款期限:',str:'jkqx'},
                    {name:'还款方式:',str:'hkfs'},
                    {name:'产品区域:',str:'cpqy'},
                    {name:'产品优势:',str:'cpys'},
                    ],
               itemInfo:{agreement: "",
                   cpqy: "上海、咸阳、西安、杭州、石家庄、长沙、太原",
                   cpys: "额度高、放款快、全线上申请",
                   edqj: "3-150 万元",
                   hkfs: "等额本息",
                   hot: "0",
                   id: "1",
                   img: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/bef7a9090e24ce891f24d6dd4045878a_121_121.png",
                   jiluzt: "0",
                   jkqx: "12个月 / 24个月 / 36个月",
                   name: "紫金货币1",
                   qx: "12-36月",
                   rank: "100",
                   sqtj: "一、基本准入条件↵" +
                       "1.申请人年龄：22周岁（含）～65周岁(含)↵" +
                       "2.申请人本地户籍或外地户籍本地有房产(生产型企业最高授信30万以下可豁免)↵" +
                       "3.负债要求：↵" +
                       "（1）申请人合作银行不超过5家，弱担保合作银行不超过3家，弱担保负债不超过纳税销售的30%↵" +
                       "（2）非银机构合作家数单家机构余额5万以上的不超过1家；单家机构余额5万以下的，合计不超过5万↵" +
                       "4.申请人、法人代表及企业近2年征信良好（贷款M1近两年不超2次，信用卡M1近两年不超4次 ↵" +
                       "二、企业准入条件↵" +
                       "1.企业为生产型/内贸型/服务型企业↵" +
                       "2.企业纳税评级为A/B/M级↵" +
                       "3.经营要求：↵" +
                       "（1）生产型企业：↵" +
                       " a.企业纳税满18个月且近一年纳税额不低于1.5万↵" +
                       " b.销售额不超过5000万（含），近12个月销售同比下降不超过50% ↵" +
                       "（2）内贸型企业：↵" +
                       " a.企业成立满3年且纳税满24个月，近一年纳税额不低于1.5万↵" +
                       " b.销售额不超过10000万（含），近12个月销售同比下降不超过30% ↵" +
                       "（3） 服务型企业：↵" +
                       " a.企业纳税满18个月且近一年纳税额不低于1.5万↵" +
                       " b.销售额不超过10000万（含），近12个月销售同比下降不超过30% ↵",
                   sxcl: "1.身份证明：有效期内二代居民身份证↵2.大钱柜税务数据授权↵",
                    tag: "利率高",
                    time: "2019-09-11 18:31:54",
                    yfl: "0.85% - 1.25%",
                    yj0: "0.10",
                    yj1: "0.05",
                    yj2: "0.01",
                    zdlv: "3%",
                    zfqz: "3%（分3个月收取，前3月每月1%）"},
                show:false,
                qrcodemsg: 'http://bank-marking-sale.dachagui.com/app/modules/MergeImage/dir/10862-16605813146-5d512bfcf7f5fa0b55024f82.jpeg'

            }
        },
        computed:{
            ...mapGetters(['itemMsg'])
        },
        components:{
            [Tag.name]:Tag,
            [Divider.name]:Divider,
            [Icon.name]:Icon,
            [Overlay .name]:Overlay,
        },
        methods:{
            getCl(val){
                return val.replace(/↵/g,'\<br\>')
            },
            getqrCode(){
                this.show=true
            }
        },
        mounted(){
            console.log(this.itemMsg)
        }
    }
</script>

<style scoped lang="scss">
    .procuctDetial{
        padding: .3rem .3rem 1.5rem;
        .item{
            background-color: #fff;
            border-radius: .2rem;
            box-shadow: 0 0.05rem 0.1rem rgba(0,0,0,.3);
        }
        .head{
            font-size: .26rem;
            color: #333;
            padding: .2rem .3rem;
            font-weight: 600;
            border-bottom: 1px solid #e1e1e1;
            img{
                display: inline-block;
                width: .8rem;
                height: .8rem;
                margin-right: .2rem;
            }
        }
        .content{
            font-size: .24rem;
            color: #333;
            line-height: .32rem;
            .notitle{
                padding: .3rem .6rem;
            }
           .notitle  span:first-child{
               width: 1.4rem;
           }
            .notitle  span:last-child{
                flex: 1;
            }
            .notitle  span{
                padding: .1rem 0;

            }
            .hasTitle{
                padding: .3rem;
                h4{
                    border-left: .1rem solid #fe4a0f;
                    text-indent: 1em;
                }
                .val{
                    padding:0 .3rem ;
                    line-height: .45rem;
                }
            }
        }
        .fixed{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
            line-height: .8rem;
            font-size: .32rem;
            background-color: #fe4a0f;
            color: #fff;
            .van-icon{
                font-size: .6rem;
                vertical-align: middle;
            }
        }
        .qrcode{
            position: fixed;
            width: 65%;
            font-size: .28rem;
            line-height: .48rem;
            left: 50%;
            margin-left: -32.5%;
            top: .2rem;
            color: #fff;
            z-index: 2;
            text-align: center;
            img{
                display: block;
                margin: .2rem 0;
            }
            p:nth-last-child(2){
                color: red;
            }
        }
    }
</style>
