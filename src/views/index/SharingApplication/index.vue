<template>
    <div class="SharingApplication">
        <div class="banner">
            <img src="../../../assets/images/shareBanner.png" alt="">
            <div class="posi">
                <h4>{{productMsg.name}}</h4>
                <h3>{{productMsg.edqj}}</h3>
            </div>
        </div>
        <div class="outInfo">
            <div class="info">
                <van-cell-group>
                    <van-field
                            placeholder="请输入申请人姓名"
                            left-icon="manager-o"
                            v-model="username"
                    />
                    <van-field
                            placeholder="请输入身份证号"
                            left-icon="idcard"
                            clearable
                            type="number"
                            v-model="idCard"
                    />
                    <van-field
                            placeholder="请输入手机号"
                            left-icon="phone-o"
                            type="tel"
                            v-model="phone"
                    />
                    <!--<van-field-->
                            <!--placeholder="动态验证码"-->
                            <!--left-icon="comment-circle-o"-->
                            <!--type="number"-->
                            <!--center-->
                            <!--v-model="yzm"-->
                    <!--&gt;-->
                    <!--<van-button slot="button" size="mini" type="primary">获取验证码</van-button>-->
                    <!--</van-field>-->
                </van-cell-group>
                <div class="xy">
                    <van-checkbox v-model="checked" icon-size="0.3rem" checked-color="#fe4a0f">我已阅读并接受<span>《注册协议》</span>
                    </van-checkbox>
                </div>
                <div>
                    <van-button color="linear-gradient(to right, #ff9a67,#ff645f)" @click="userGo()">立即注册</van-button>
                </div>
            </div>
        </div>
        <a class="cancat flex a-i j-b" href="tel:16605813146" >
            <div>
                <img src="../../../assets/images/img_user.png" alt="">
                <span>{{shareInfo.username}}</span>
            </div>
            <div>
                <span>{{shareInfo.phone}}</span>
                <img src="../../../assets/images/img_tel.png" alt="">
            </div>
        </a>
    </div>

</template>

<script>
    import { CellGroup, Cell, Field, Button,Checkbox  } from 'vant';
    import { productDetial, shareUserInfo,userUpdataP } from '@/apis/index'
    export default {
        name: "SharingApplication",
        data(){
            return {
                username:'',
                idCard:'',
                phone:'',
                yzm:'',
                checked:false,
                productMsg:{},
                shareInfo:{}
            }
        },
        computed:{
            produId(){
                return this.$route.query.productid
            },
            sharePhone(){
                return this.$route.query.phone
            }
        },
        components:{
            [CellGroup.name]:CellGroup,
            [Cell.name]:Cell,
            [Field.name]:Field,
            [Button.name]:Button,
            [Checkbox.name]:Checkbox,
        },
        methods:{
            getproductInfo(){
                let data={
                    id:this.produId
                }
                productDetial(data).then(res=>{
                    if(!res.code)this.productMsg=res.msg
                })
            },
            getShareUserInfo(){
                shareUserInfo({phone:this.sharePhone}).then(res=>{
                    if(!res.code)this.shareInfo=res.msg
                })
            },
            userGo(){
                if(!this.username || !this.idCard || !this.phone){
                    this.$toast({message:'请先完善信息',duration:1500})
                    return
                }
                if(this.phone.length!==11){
                    this.$toast({message:'手机号格式不正确',duration:1500})
                    return
                }
                if(!this.checked){
                    this.$toast({message:'请先阅读并勾选注册协议',duration:1500})
                    return
                }
                let data={
                    phone:this.phone,
                    sfz:this.idCard,
                    xm:this.username,
                    productid:this.produId,
                    memberid:this.shareInfo.id
                 }
                userUpdataP(data).then(res=>{
                    if(!res.code){
                        this.$toast({message:'申请成功',duration:1500})
                        setTimeout(()=>{
                            this.$router.replace('/login')
                        },1500)
                    }
                })
            }
        },
        mounted() {
            this.getproductInfo()
            this.getShareUserInfo()
        }
    }
</script>

<style scoped lang="scss">
    $bc: #fe4a0f;
    $fc: #fe7007;
.banner{
    position: relative;
    .posi{
        position: absolute;
        top: .2rem;
        left: 0;
        text-align: center;
        width: 100%;
        font-size: .9rem;
        color: #fff;
        line-height: 1;
        h4{
            margin-bottom: .3rem;
        }
    }
    img{
        display: block;
        width: 100%;
    }
}
.outInfo{
    padding: 0 .25rem;
    margin-top: -1.8rem;
}
.info{
    box-shadow: 0 0 5px #e8f0ff;
    border-radius: .15rem;
    overflow: hidden;
    background-color: #fff;
    .van-cell-group{
        padding-top: .3rem;
        input{
            font-size: .24rem;
        }
        .van-button--primary{
            background-color: rgba(0,0,0,0);
            border: 0;
            border-left: 1px solid #fea412;
            color: #fea412;
            border-radius: 0;
            padding-left: .4rem;
        }
    }
    .xy {
        font-size: .24rem;
        line-height: .64rem;
        padding: .3rem 0 .5rem 0;
        background-color: #fff;
        span {
            color: $fc;
        }
        .van-checkbox {
            justify-content: center;
        }
    }
    & > div:last-child{
        background-color: #fff;
        padding-bottom:.3rem ;
        .van-button{
            width: 60%;
            display: block;
            margin: 0 auto;
            border-radius: .44rem;
        }
    }
}
    .cancat{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: .28rem;
        line-height: 1rem;
        color: #333;
        padding: 0 .8rem;
        background-color: #fff;
        span{
            display: inline-block;
            line-height: .46rem;
        }
        img{
            display: inline-block;
            vertical-align: center;
        }
        img:first-child{
            width: .46rem;
            height: .46rem;
            margin-right: .2rem;
        }
        img:last-child{
            width: .34rem;
            height: .34rem;
            margin-left: .2rem;
            margin-top: -0.1rem;
        }
    }
</style>
