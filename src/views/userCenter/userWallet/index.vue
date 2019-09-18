<template>
        <div class="userWallet">
            <div class="yellow">
                <div class="top">
                    <span>{{userInfoResult.zhhuye}}</span>元
                    <p>可提现金额</p>
                </div>
                <div class="flex a-i">
                  <div class="left">
                      <p><span>{{userInfoResult.kngzye}}</span>元</p>
                      <p>审核中金额</p>
                  </div>
                  <div class="right">
                      <p><span>{{userInfoResult.yitiye}}</span>元</p>
                      <p>已提现金额</p>
                  </div>
                </div>
            </div>
            <div class="tixian">
                <van-button :color="btnOpen ? '#fe7007' : '#ccc'" round>提现</van-button>
            </div>
            <div class="otherBtn flex j-b">
                <van-button color="#fe6d68" plain size="small">收人明细</van-button>
                <van-button color="#fe6d68" plain  size="small">提现明细</van-button>
            </div>
        </div>
</template>

<script>
    import {Button, Toast  } from 'vant';
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "index",
        data(){
            return {
                btnOpen:true
            }
        },
        components:{
            [Button.name]:Button,
            [Toast.name]:Toast,
        },
        computed:{
            ...mapGetters(['userInfoResult'])
        }
    }
</script>

<style scoped lang="scss">
 .userWallet{
     padding: .6rem .3rem;
     .yellow{
         color: #9d7440;
         background-color:#d8b476 ;
         padding-top: 0.2rem;
         text-align: center;
         font-size: .32rem;
         border-radius: .2rem;
         .top{
             line-height: 1rem;
             border-bottom: 2px solid #ecd8b4;
             p{
                 line-height: 1;
                 font-size: .24rem;
                 font-weight: 600;
                 margin-bottom: .2rem;
             }
             span{
                 font-size: .64rem;
             }
         }
         & > .flex{
             padding: .4rem 0;
             font-size: .24rem;
             line-height:.36rem;
             & > div:first-child{
                 border-right: 2px solid #ecd8b4;
             }
             & > div{
                 flex: 1;
                 p:first-child{
                     line-height: .6rem;
                 }
             }
             span{
                 font-size: .4rem;
             }
         }
     }
     .tixian{
         .van-button{
             display: block;
             width: 70%;
             margin: 0.6rem auto .4rem;
             height: .8rem;
             line-height: .8rem;
         }
     }
     .otherBtn{
         width: 65%;
         margin:0 auto;
         .van-button{
             line-height: .48rem;
             height: .48rem;
         }
     }
 }
</style>
