<template>
        <div class="userBank">
            <h4>已绑定的银行卡，佣金（如有）将发放到该银行卡上：</h4>
           <div class="card">
               <div>姓名：{{userInfoResult.name}}</div>
               <div>银行卡号：{{userInfoResult.yhk | bankFilter}}<!--622203******3229423--></div>
               <van-divider />
               <p>工商银行</p>
           </div>
            <van-button color="#ff9a67" plain @click="cancleCard()">解绑</van-button>
        </div>
</template>

<script>
    import { Divider, Button,Dialog } from 'vant'
    import { mapGetters, mapActions } from 'vuex'
    import { userCancelBank } from '@/apis'
    export default {
        name: "index",
        data(){
            return {

            }
        },
        computed:{
            ...mapGetters(['userInfoResult'])
        },
        components:{
            [Divider.name]:Divider,
            [Button.name]:Button,
        },
        methods:{
            cancleCard(){
                Dialog.confirm({
                    title: '提示',
                    message: '解绑银行卡后,您将无法将账户余额（如有）提现到银行卡。',
                    confirmButtonColor:'#fe7007'
                }).then(() => {
                    userCancelBank().then(res=>{
                        if(!res.code){
                            this.$toast({message:'解绑成功',duration:1500})
                            const _self=this
                            setTimeout(()=>{
                                _self.$router.go(-1)
                            },1500)
                        }
                    })
                    // on confirm
                }).catch(() => {
                    // on cancel
                });
            },
            initBankData(){

            }
        },
        mounted(){

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
