<template>
    <div class="platformThree">
        <div class="texteares">
            <van-field v-model="value" maxlength="200" placeholder="请输入您使用我们的产品时遇到的问题和建议" type="textarea" clearable
                       :autosize="{ maxHeight: 200, minHeight: 150}"/>
            <span>{{value.length}}/200</span>
        </div>
        <van-button color="linear-gradient(to right, #ff9a67, #ff645f)" @click="configm()">提交</van-button>
    </div>
</template>

<script>
    import {Field, Button} from 'vant'
    import {userFeedback} from '@/apis'

    export default {
        name: "index",
        data() {
            return {
                value: ''
            }
        },
        components: {
            [Field.name]: Field,
            [Button.name]: Button,
        },
        methods: {
            configm() {
                if (!this.value) {
                    this.$toast( {message: '内容不可为空', duration: 1500} )
                    return
                }
                let data = {
                    content: this.value
                }
                userFeedback( data ).then( res => {
                    if (!res.code) {
                        this.$toast( {message: '提交成功', duration: 1500} )
                        const _self=this
                        setTimeout(()=>{
                            _self.$router.go(-1)
                        },1500)
                    }
                } )
            }
        }
    }
</script>

<style scoped lang="scss">
    .platformThree {
        padding: .8rem .3rem;

        .texteares {
            position: relative;

            & > span {
                position: absolute;
                bottom: .1rem;
                right: .1rem;
            }
        }

        .van-field {
            box-shadow: 0 0 .1rem rgba(30, 104, 234, 0.1);
            border-radius: .2rem;
        }

        .van-button {
            line-height: .8rem;
            height: .8rem;
            display: block;
            width: 65%;
            border-radius: .4rem;
            margin: 1.5rem auto 0;
        }
    }
</style>
