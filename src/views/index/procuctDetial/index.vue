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
                    <div class="val" v-html="itemInfo.sqtj">

                    </div>
                </div>
                <div class="hasTitle">
                    <h4>所需材料</h4>
                    <van-divider />
                    <div class="val" v-html="itemInfo.sxcl">

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
        <div class="qrcode" v-if="show && qrcodemsg">
            <p>客户扫码注册将成为您的客户,</p>
            <p> 客户贷款成功将计入您的业绩。</p>
            <img v-lazy="qrcodemsg" alt="">
            <p>长按上图保存到相册</p>
            <p>将上图发给客户，客户自行扫码申请</p>
        </div>
    </section>
</template>

<script>
    import { Tag,Divider,Icon,Overlay,Toast } from 'vant';
    import { mapGetters } from 'vuex'
    import { productDetial, productQr } from '@/apis/index'
    import { setCanvasText } from '@/utils/index'
    import back from '../../../assets/images/true2.jpg'
    export default {
        name: "productList",
        data(){
            return {
                back,
                msg:[
                    {name:'月费率:',str:'yfl'},
                    {name:'资方前置:',str:'zfqz'},
                    {name:'额度区间:',str:'edqj'},
                    {name:'借款期限:',str:'jkqx'},
                    {name:'还款方式:',str:'hkfs'},
                    {name:'产品区域:',str:'cpqy'},
                    {name:'产品优势:',str:'cpys'},
                    ],
               itemInfo:{
                   //  agreement: "",
                   // cpqy: "上海、咸阳、西安、杭州、石家庄、长沙、太原",
                   // cpys: "额度高、放款快、全线上申请",
                   // edqj: "3-150 万元",
                   // hkfs: "等额本息",
                   // hot: "0",
                   // id: "1",
                   // img: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/bef7a9090e24ce891f24d6dd4045878a_121_121.png",
                   // jiluzt: "0",
                   // jkqx: "12个月 / 24个月 / 36个月",
                   // name: "紫金货币1",
                   // qx: "12-36月",
                   // rank: "100",
                   // sqtj: "一、基本准入条件↵" +
                   //     "1.申请人年龄：22周岁（含）～65周岁(含)↵" +
                   //     "2.申请人本地户籍或外地户籍本地有房产(生产型企业最高授信30万以下可豁免)↵" +
                   //     "3.负债要求：↵" +
                   //     "（1）申请人合作银行不超过5家，弱担保合作银行不超过3家，弱担保负债不超过纳税销售的30%↵" +
                   //     "（2）非银机构合作家数单家机构余额5万以上的不超过1家；单家机构余额5万以下的，合计不超过5万↵" +
                   //     "4.申请人、法人代表及企业近2年征信良好（贷款M1近两年不超2次，信用卡M1近两年不超4次 ↵" +
                   //     "二、企业准入条件↵" +
                   //     "1.企业为生产型/内贸型/服务型企业↵" +
                   //     "2.企业纳税评级为A/B/M级↵" +
                   //     "3.经营要求：↵" +
                   //     "（1）生产型企业：↵" +
                   //     " a.企业纳税满18个月且近一年纳税额不低于1.5万↵" +
                   //     " b.销售额不超过5000万（含），近12个月销售同比下降不超过50% ↵" +
                   //     "（2）内贸型企业：↵" +
                   //     " a.企业成立满3年且纳税满24个月，近一年纳税额不低于1.5万↵" +
                   //     " b.销售额不超过10000万（含），近12个月销售同比下降不超过30% ↵" +
                   //     "（3） 服务型企业：↵" +
                   //     " a.企业纳税满18个月且近一年纳税额不低于1.5万↵" +
                   //     " b.销售额不超过10000万（含），近12个月销售同比下降不超过30% ↵",
                   // sxcl: "1.身份证明：有效期内二代居民身份证↵2.大钱柜税务数据授权↵",
                   //  tag: "利率高",
                   //  time: "2019-09-11 18:31:54",
                   //  yfl: "0.85% - 1.25%",
                   //  yj0: "0.10",
                   //  yj1: "0.05",
                   //  yj2: "0.01",
                   //  zdlv: "3%",
                   //  zfqz: "3%（分3个月收取，前3月每月1%）"
               },
                show:false,
                qrcodemsg: ''
                // qrcodemsg: 'http://bank-marking-sale.dachagui.com/app/modules/MergeImage/dir/10862-16605813146-5d512bfcf7f5fa0b55024f82.jpeg'

            }
        },
        computed:{
            ...mapGetters(['itemMsg']),
            produId(){
                return this.$route.query.id
            }
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
                if(this.qrcodemsg)return;
                let data={
                    id:this.produId
                }
                productQr(data).then(res=>{
                    Toast({type:'loading',message:'图片生成中...',duration:0})
                    const msgInfo=res.msg,_self=this;
                    let oImg=new Image()
                    oImg.src=this.back;
                    oImg.onload=()=>{
                        let can=document.createElement('canvas')
                        can.width=oImg.width
                        can.height=oImg.height
                        let ctx=can.getContext('2d')
                        ctx.drawImage(oImg,0,0)
                        ctx.fillStyle='#fff'
                        ctx.font="72px STHeiTi"
                        const fw= ctx.measureText(msgInfo.name);
                        setCanvasText()
                        ctx.wrapText(msgInfo.name,can.width/2-fw.width/2,130)
                        ctx.font="48px STHeiTi"
                        const fw2=ctx.measureText('最高可贷')
                        ctx.wrapText('最高可贷',can.width/2-fw2.width/2,210)
                        ctx.fillStyle='orange'
                        ctx.font="72px STHeiTi"
                        const fw3=ctx.measureText(msgInfo.money+'万');
                        ctx.wrapText(msgInfo.money+'万',can.width/2-fw3.width/2,300)
                        let oImg2=new Image()
                        oImg2.crossOrigin = '';
                        oImg2.onload=()=>{
                            ctx.drawImage(oImg2,can.width/2-oImg2.width/2,420)
                            ctx.fillStyle='#fff'
                            ctx.font="24px STHeiTi"
                            const fw4=ctx.measureText('扫描二维码，立即申请');
                            ctx.wrapText('扫描二维码，立即申请',can.width/2-fw4.width/2,680)
                            ctx.fillStyle='#fff'
                            ctx.fillRect(50,720,550,80)
                            ctx.fillStyle='#333'
                            ctx.font="28px STHeiTi"
                            const fw5=ctx.measureText(`产品持续下款中,已有${msgInfo.sqrs}人申请`);
                            const fw6=ctx.measureText(`产品持续下款中,已有`);
                            const fw7=ctx.measureText(`产品持续下款中,已有${msgInfo.sqrs}`);
                            ctx.wrapText('产品持续下款中,已有',can.width/2-fw5.width/2-10,770)
                            ctx.fillStyle='red';
                            ctx.font="32px STHeiTi"
                            ctx.wrapText(msgInfo.sqrs,(can.width/2)+fw6.width-(fw5.width/2),770)
                            ctx.fillStyle='#333';
                            ctx.font="28px STHeiTi"
                            ctx.wrapText('人申请',(can.width/2)+fw7.width-(fw5.width/2)+20,770)
                            // let oImg3=new Image()
                            // oImg3.crossOrigin = '';
                            // oImg3.onload=()=>{
                            //     ctx.drawImage(oImg3,can.width/2-25,505,50,50)
                            // }
                            // oImg3.src=msgInfo.productimg
                            _self.qrcodemsg=can.toDataURL()
                            Toast.clear()
                        }
                        oImg2.src=msgInfo.ewmimg

                    }


                })
            },
            getDetial(){
                let data={
                    id:this.produId
                }
                productDetial(data).then(res=>{
                    if(!res.code)this.itemInfo=res.msg
                })
            }
        },
        mounted(){
           this.getDetial()
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
            width: 70%;
            font-size: .28rem;
            line-height: .48rem;
            left: 50%;
            margin-left: -35%;
            top: .6rem;
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
