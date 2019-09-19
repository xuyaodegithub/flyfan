<template>
        <div class="userBank">
            <h4>已绑定的银行卡，佣金（如有）将发放到该银行卡上：</h4>
           <div class="card">
               <div>姓名：许耀</div>
               <div>银行卡号：622203******3229423</div>
               <van-divider />
               <p>工商银行</p>
           </div>
            <van-button color="#ff9a67" plain @click="cancleCard()">解绑</van-button>
        </div>
</template>

<script>
    import { Divider, Button,Dialog } from 'vant'
    export default {
        name: "index",
        data(){
            return {

            }
        },
        components:{
            [Divider.name]:Divider,
            [Button.name]:Button,
        },
        methods:{
            cancleCard(){
                Dialog.confirm({
                    title: '提示',
                    message: '解绑银行卡后,您将无法将账户余额（如有）提现到银行卡。'
                }).then(() => {
                    this.$toast('解绑成功')
                    // on confirm
                }).catch(() => {
                    this.$toast('已取消')
                    // on cancel
                });
            }
        }
    }
</script>

<style scoped lang="scss">
 .userBank{
     padding: .6rem .4rem;
     font-size: .28rem;
     color: #333;
     h4{
        font-size: .3rem;
        line-height: .5rem;
         color: #333;
         margin-bottom: .5rem;
     }
     .card{
         background: linear-gradient(to right, #ff9a67, #ff645f);
         border-radius: .2rem;
         line-height: .8rem;
         padding: .1rem 0;
         box-shadow: 0 0 .1rem #999;
         & > div{
             text-indent:.8rem ;
         }
         .van-divider{
             margin: 0;
         }
         p:last-child{
             text-align: center;
             line-height: 1rem;
         }
     }
     .van-button{
         width: 2.76rem;
         margin: 1rem auto;
         line-height: .8rem;
         height: .8rem;
         display: block;
     }
 }
</style>
