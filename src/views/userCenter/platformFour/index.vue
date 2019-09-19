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
    import { Field,Button,CellGroup } from 'vant'
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
        },
        methods:{
            configm(){

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
