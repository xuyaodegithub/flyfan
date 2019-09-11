<template>
    <div class="home">
        <van-swipe :autoplay="4000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <van-notice-bar
                scrollable
                :text="msg"
                left-icon="volume-o"
        />
        <div class="flex a-i btns">
            <div v-for="(item,index) in btns">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
            </div>
        </div>
        <div class="hots">
            <div class="title flex a-i">
                <span></span>
                <p>热门推荐</p>
                <img src="../../assets/images/icon_hot.png" alt="">
            </div>
            <div class="product">
                <div v-for="(item,index) in productList" :key="index">
                    <div class="p_title flex j-b a-i">
                        <span>{{item.title}}</span>
                        <div>
                            <van-tag color="#f2826a" plain v-for="(val,key) in item.tags" :key="key">{{val}}</van-tag>
                        </div>
                    </div>
                    <div class="flex a-i j-b content">
                        <div class="posi">
                            <img :src="item.img" alt="">
                            <van-icon name="fire" />
                        </div>
                        <div>
                            <p class="ed">{{item.price}}</p>
                            <p>额度范围</p>
                        </div>
                        <div>
                            <p>{{item.ll}}</p>
                            <p>最低利率</p>
                        </div>
                        <div>
                            <p>{{item.data}}</p>
                            <p>期限</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="move">
                更多优质产品 》
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { Swipe, SwipeItem, NoticeBar, Tag, Icon  } from 'vant';
    import hot1 from '@/assets/images/hot.png'
    import hot2 from '@/assets/images/hot2.png'
    import hot3 from '@/assets/images/hot3.png'
    import hot4 from '@/assets/images/hot4.png'
    import { indexData } from '@/apis/index'
    export default {
        name: 'index',
        data(){
          return {
              images: [
                  'http://bank-marking-sale.dachagui.com/statics/loan_new/images/index/banner2.jpg',
                  'http://bank-marking-sale.dachagui.com/statics/loan_new/images/index/banner1.png'
              ],
              msg:'公告：百万现金奖励，5%超高三级返佣超高三级返佣',
              btns:[
                  {title:'产品列表',img:hot1},
                  {title:'产品大纲',img:hot2},
                  {title:'返佣表',img:hot3},
                  {title:'大银加系统',img:hot4},
              ],
              productList:[
                  {
                      title:'企税贷',
                      tags:['线上申请','审批快','额度高'],
                      img:'http://bank-mg.dachagui.com/statics/upload/7704/6932/6a55dbb0a18a59df979b0b4d3de8cfcf.png',
                      price:'3w-150w',
                      ll:'0.85%',
                      data:'12-36期'
                  }, {
                      title:'企税贷',
                      tags:['线上申请','审批快','额度高'],
                      img:'http://bank-mg.dachagui.com/statics/upload/7704/6932/6a55dbb0a18a59df979b0b4d3de8cfcf.png',
                      price:'3w-150w',
                      ll:'0.85%',
                      data:'12-36期'
                  }, {
                      title:'企税贷',
                      tags:['线上申请','审批快','额度高'],
                      img:'http://bank-mg.dachagui.com/statics/upload/7704/6932/6a55dbb0a18a59df979b0b4d3de8cfcf.png',
                      price:'3w-150w',
                      ll:'0.85%',
                      data:'12-36期'
                  },
              ]
          }
        },
        mounted(){
            this.initData()
            // console.log(this.$wx)
        },
        components: {
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [NoticeBar.name]:NoticeBar,
        [Tag.name]:Tag,
        [Icon.name]:Icon,
        },
        computed:{

        },
        methods:{
            initData(){
                let data={
                    c:'ajax',
                    a:'query',
                    table:'product',
                }
                indexData(data).then(res=>{

                })
            }
        }
    }
</script>
<style scoped lang="scss">
.btns{
    background-color: #fff;
    padding: .2rem 0;
    justify-content: space-around;
    text-align: center;
    font-size: .26rem;
    margin-bottom: .2rem;
    img{
        display: block;
        width: 1rem;
        margin: 0 auto .15rem;
    }
}
    .hots{
        padding-bottom: 2rem;
        .title{
            background-color: #fff;
            border-bottom: .04rem solid #F6F6F6;
            font-size: .26rem;
            color: #333;
            line-height: .32rem;
            padding: .15rem 0;
            p{
                margin-left: .3rem;
                border-left: 0.08rem solid #e62c10;
                padding-left: .2rem;
            }
            img{
                height: .24rem;
                width: .24rem;
                margin-left: .15rem;
            }
        }
        .product{
            font-size: .26rem;
            color: #333;
            & > div{
                /*padding: 0.15rem .2rem .15rem 0.3rem;*/
                background-color: #fff;
                border-bottom: .04rem solid #F6F6F6;
                .p_title{
                    padding: .2rem .2rem .2rem 0.3rem;
                    .van-tag{
                        margin: 0 .1rem;
                    }
                }
                .content{
                    padding: .2rem .4rem .2rem 0.4rem;
                    text-align: center;
                    font-size: .32rem;
                    img{
                        display: block;
                        width: .8rem;
                    }
                    p:first-child{
                        margin-bottom: .15rem;
                    }
                    p:last-child{
                        font-size: .2rem;
                        color: #a4a4a4;
                    }
                    .ed{
                        color: #fe4a0f;
                    }
                }
            }
            .posi{
                position: relative;
                i{
                    position: absolute;
                    top: -0.15rem;
                    right: -0.15rem;
                    color: #e62c10;
                    font-size: .28rem;
                }
            }
        }
        .move{
            background-color: #fff;
            text-align: center;
            font-size: .28rem;
            line-height: .64rem;
        }
    }
</style>
