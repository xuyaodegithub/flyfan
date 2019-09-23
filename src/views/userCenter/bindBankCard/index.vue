<template>
        <div class="bindBankCard">
            <van-cell-group>
                <van-field
                        v-model="username"
                        label-width="120"
                        label="姓名"
                        placeholder="请输入您的姓名"
                        @click-right-icon="$toast('question')"
                />
                <van-field
                        v-model="idNum"
                        type="number"
                        clearable
                        label="身份证号"
                        placeholder="请输入您的身份证号"
                        label-width="120"
                />
                <van-field
                        v-model="cardNum"
                        type="number"
                        clearable
                        label="银行卡号"
                        placeholder="请输入您的银行卡号"
                        label-width="120"
                />
                <van-field
                        v-model="phone"
                        type="tel"
                        clearable
                        label="银行预留手机号"
                        placeholder="请输入银行预留手机号"
                        label-width="120"
                />
                <!--<van-field-->
                        <!--v-model="yzmNum"-->
                        <!--type="text"-->
                        <!--center-->
                        <!--label="图像验证码"-->
                        <!--placeholder="请输入图像验证码"-->
                        <!--label-width="120"-->
                <!--&gt;-->
                    <!--<img src="../../../assets/images/verify.png" slot="button" alt="" class="slotImg">-->
                <!--</van-field>-->
            </van-cell-group>
            <div class="wat">
                注意事项：佣金将直接发放到您的借记卡上，请确保卡号等信息准确无误：
            </div>
            <van-dialog
                    v-model="show"
                    title="请输入短信验证码"
                    confirm-button-color="#ffa012"
            >
                <div class="filed">
                    <van-field v-model="value" placeholder="请输入验证码" />
                </div>
            </van-dialog>
            <van-button color="linear-gradient(to right, #ff9a67, #ff645f)" round @click="pouppA()">绑定银行卡</van-button>
        </div>
</template>

<script>
    import { CellGroup, Cell, Field, Button, Dialog  } from 'vant';
    import { userBindCard } from '@/apis'
    export default {
        name: "index",
        data(){
            return {
                username:'',
                idNum:'',
                cardNum:'',
                phone:'',
                yzmNum:'',
                show:false,
                value:''
            }
        },
        components:{
            [CellGroup.name]:CellGroup,
            [Cell.name]:Cell,
            [Field.name]:Field,
            [Button.name]:Button,
            [Dialog.Component.name]:Dialog.Component,
        },
        methods:{
            pouppA(){
                // this.show=true
                if(!this.username || !this.idNum || !this.cardNum || !this.phone){
                    this.$toast({message:'内容不可为空',duration:1500})
                    return
                }
                if(this.phone.length!==11){
                    this.$toast({message:'手机号格式不正确',duration:1500})
                    return
                }
                if(this.idNum.length!==15 && this.idNum.length!==18 ){
                    this.$toast({message:'身份证格式不正确',duration:1500})
                    return
                }
                let data={
                    xm:this.username,
                    sfz:this.idNum,
                    yhk:this.cardNum,
                    phone:this.phone,
                }
                userBindCard(data).then(res=>{
                    if(!res.code){
                        this.$toast({message:'绑定成功',duration:1500})
                        const _self=this
                        setTimeout(()=>{
                            _self.$router.go(-1)
                        },1500)
                    }
                })
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="scss">
 .bindBankCard{
    padding: .2rem .3rem;
     .van-cell-group{
         padding: .2rem 0 .5rem 0;
         margin-top: .3rem;
         border-radius: .3rem;
         overflow: hidden;
         box-shadow: 0 0 .1rem #ebedf0;
     }
     .wat{
         padding: .5rem;
         font-size: .28rem;
         line-height: .42rem;
     }
     & > .van-button{
         width: 65%;
         display: block;
         margin: 1rem auto 0;
     }
     .filed{
         width: 60%;
         margin: 0.3rem auto;
         border: 1px solid #ebedf0;
         border-radius: .34rem;
         overflow: hidden;
         .van-cell {
             padding: 5px 16px;
         }
     }
 }
</style>
