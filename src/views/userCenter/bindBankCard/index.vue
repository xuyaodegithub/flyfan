<template>
        <div class="bindBankCard">
            <van-cell-group>
                <van-field
                        v-model="username"
                        label-width="120"
                        clearable
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
                <van-field
                        v-model="yzmNum"
                        type="text"
                        clearable
                        label="图像验证码"
                        placeholder="请输入图像验证码"
                        label-width="120"
                />
            </van-cell-group>
            <div class="wat">
                注意事项：佣金将直接发放到您的借记卡上，请确保卡号等信息准确无误：
            </div>
            <van-button color="linear-gradient(to right, #ff9a67, #ff645f)" round>绑定银行卡</van-button>
        </div>
</template>

<script>
    import { CellGroup, Cell, Field, Button, Toast  } from 'vant';
    export default {
        name: "index",
        data(){
            return {
                username:'',
                idNum:'',
                cardNum:'',
                phone:'',
                yzmNum:'',
            }
        },
        components:{
            [CellGroup.name]:CellGroup,
            [Cell.name]:Cell,
            [Field.name]:Field,
            [Button.name]:Button,
        },
        methods:{},
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
 }
</style>
