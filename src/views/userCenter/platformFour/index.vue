<template>
        <div class="platformFour">
            <van-cell-group>
                <van-field
                        v-model="oldPass"
                        placeholder="原密码"
                        left-icon="closed-eye"
                        type="password"
                />
                <van-field
                        v-model="newPass"
                        placeholder="新密码"
                        left-icon="edit"
                        type="password"
                />
                <van-field
                        :class="{'active' : (newPass===newPass2 && newPass!=='')}"
                        v-model="newPass2"
                        placeholder="确认密码"
                        left-icon="closed-eye"
                        right-icon="smile"
                        type="password"
                />
            </van-cell-group>
            <van-button color="linear-gradient(to right, #ff9a67, #ff645f)"  @click="configm()">提交</van-button>
        </div>
</template>

<script>
    import { Field,Button,CellGroup,Dialog } from 'vant'
    import { userChangePass } from '@/apis'
    export default {
        name: "index",
        data(){
            return {
                oldPass:'',
                newPass:'',
                newPass2:'',
            }
        },
        components:{
            [CellGroup.name]:CellGroup,
            [Field.name]:Field,
            [Button.name]:Button,
            [Dialog.name]:Dialog,
        },
        methods:{
            configm(){
                if(!this.oldPass || !this.newPass || !this.newPass2){
                    this.$toast({message:'密码不可为空',duration:1500})
                    return
                }
                if(this.newPass !== this.newPass2){
                    this.$toast({message:'确认密码不一致',duration:1500})
                    return
                }
                let data={
                    Oldpassword:this.oldPass,
                    Password:this.newPass,
                    Password2:this.newPass2,
                }
                Dialog.confirm({
                    title: '提示',
                    message: '确认要修改密码么？',
                    confirmButtonColor:'#fe7007'
                }).then(() => {
                    userChangePass(data).then(res=>{
                        if(!res.code){
                            this.$toast({message:'修改成功',duration:1500})
                            const _self=this
                            setTimeout(()=>{
                                _self.$router.go(-1)
                            },1500)
                        }
                    })
                }).catch(() => {
                    // on cancel
                });
            }
        }
    }
</script>

<style scoped lang="scss">
 .platformFour{
     padding: .3rem;
     .van-button{
         line-height: .8rem;
         height: .8rem;
         display: block;
         width: 65%;
         border-radius: .4rem;
         margin: 1.5rem auto 0;
     }
 }
</style>
