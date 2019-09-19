<template>
    <div class="login">
        <img src="../../assets/images/login.png" alt="">
        <div class="input">
            <van-cell-group>
                <van-field v-model="phone" placeholder="请输入手机号" type="tel" :border="false" left-icon="phone"/>
                <van-field v-model="pass" placeholder="请输入密码" type="password" :border="false" left-icon="closed-eye"/>
            </van-cell-group>
            <van-button color="#fe4a0f" @click="login()">登录</van-button>
            <div class="flex j-b a-i">
                <span @click="goresgister()">立即注册</span>
                <span @click="goresgister(1)">忘记密码</span>
            </div>
        </div>
        <p class="fei">飞侠君</p>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { CellGroup, Cell, Field, Button, Toast  } from 'vant';
    import {userLogin} from '@/apis/index'
    export default {
        name: 'login',
        data(){
          return {
              phone:'',
              pass:'',
          }
        },
        components: {
            [Field.name]:Field,
            [CellGroup.name]:CellGroup,
            [Cell.name]:Cell,
            [Button.name]:Button,
        },
        computed:{

        },
        methods:{
            goresgister(key){
                let url=key ? `/register?type=${key}` : '/register'
                this.$router.push(url)
            },
            login(){
                let data={
                    phone:this.phone,
                    password:this.pass,
                }
                if(!this.phone || !this.pass){
                    Toast({forbidClick:true,duration:1500,message:'手机号或密码不可为空'})
                    return
                }
                userLogin(data).then(res=>{
                    if(!res.code)this.$router.replace('/')
                })
            }
        }
    }
</script>
<style scoped lang="scss">
    .login{
        min-height:100%;
        .input{
            width: 85%;
            margin: .6rem auto;
            .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
                border: none;
            }
            .van-field{
                line-height: .88rem;
                background-color: #f6f4f5;
                padding: 0 .32rem;
                margin-bottom: .2rem;
                font-size: .32rem;
                border-radius: .44rem;
            }
            .flex{
                width: 70%;
                margin: 0 auto;
                margin-top: .3rem;
                font-size: .28rem;
                color:#fe7007 ;
            }
        }
        &>.fei{
            text-align: center;
            font-size: .48rem;
            color: #fe7007;
            position: fixed;
            bottom: 1rem;
            width: 100%;
        }
    }
</style>
