<template>
    <div class="register">
        <img src="../../assets/images/login.png" alt="">
        <div class="input">
            <van-cell-group>
                <van-field v-model="name" placeholder="请输入经理人姓名" :border="false" left-icon="manager" v-if="!type"/>
                <van-field
                        v-model="phone"
                        center
                        clearable
                        placeholder="请输入手机号"
                        :border="false" left-icon="phone"
                >
                    <van-button slot="button" size="small" round>获取验证码</van-button>
                </van-field>
                <van-field v-model="yzm" placeholder="请输入验证码" type="number" :border="false" left-icon="eye"/>
                <van-field v-model="pass" placeholder="请输入8-32位 包含数字字母的密码" type="password" :border="false"
                           left-icon="closed-eye"/>
                <van-field v-model="tjm" placeholder="请输入推荐码（非必填）" type="number" :border="false" left-icon="invition"
                           v-if="!type && !peopleId"/>
                <van-field v-model="partpass" placeholder="请再次输入密码" type="password" :border="false" left-icon="invition"
                           v-if="type"/>
            </van-cell-group>
            <van-button color="#fe4a0f" @click="confire()">{{type ? '立即注册' : '设置新密码'}}</van-button>
            <div class="xy" v-if="!type">
                <van-checkbox v-model="checked" icon-size="0.3rem" checked-color="#fe4a0f">我已阅读并同意<span>《注册协议》</span>
                </van-checkbox>
            </div>
        </div>
        <p class="fei">飞侠君</p>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {CellGroup, Cell, Field, Button, Checkbox, Toast} from 'vant';
    import {userRegister} from '@/apis/index'

    export default {
        name: 'login',
        data() {
            return {
                name: '',
                phone: '',
                pass: '',
                yzm: '',
                tjm: '',
                partpass: '',
                checked: false
            }
        },
        components: {
            [Field.name]: Field,
            [CellGroup.name]: CellGroup,
            [Cell.name]: Cell,
            [Button.name]: Button,
            [Checkbox.name]: Checkbox,
        },
        computed: {
            type() {
                return this.$route.query.type
            },
            peopleId(){
                return this.$route.query.id
            }
        },
        methods: {
            confire() {
                if (this.phone.length !== 11) {
                    Toast('手机号输入有误');
                    return
                }
                if (!this.type) {
                    let data = {
                        username: this.name,
                        phone: this.phone,
                        password: this.pass,
                        phonerandcode: this.yzm,
                        pid: this.peopleId ? this.peopleId : this.tjm
                    };
                    if (!this.name || !this.pass || !this.yzm) {
                        Toast('请先完善信息');
                        return
                    }
                    if(!this.checked){
                        Toast('请先勾选同意注册协议')
                        return
                    }
                    userRegister(data).then(res => {
                        if(!res.code){
                            Toast('注册成功');
                            this.$router.replace('/login')
                        }
                    })
                }else{
                    let data={

                    }
                }
            }
        },
        mounted() {
            console.log(Boolean(this.type))
        }
    }
</script>
<style scoped lang="scss">
    $bc: #fe4a0f;
    $fc: #fe7007;
    .register {
        min-height: 100%;
        .input {
            width: 85%;
            margin: .6rem auto .3rem;
            .van-field {
                line-height: .62rem;
                background-color: #f6f4f5;
                margin-bottom: .2rem;
                padding: .1rem .32rem;
                font-size: .26rem;
                border-radius: .44rem;
                .van-button {
                    background-color: rgba(0, 0, 0, 0);
                    border-color: $fc;
                    color: $fc;
                    height: .5rem;
                    line-height: .5rem;
                }
            }
            .xy {
                font-size: .24rem;
                line-height: .64rem;
                margin-top: .4rem;
                span {
                    color: $fc;
                }
                .van-checkbox {
                    justify-content: center;
                }
            }
        }
        & > .fei {
            text-align: center;
            font-size: .48rem;
            color: #fe7007;
        }
    }
</style>
