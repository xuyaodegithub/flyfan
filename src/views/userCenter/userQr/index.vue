<template>
        <div class="qr">
            <img :src="imgUrl" alt="">
        </div>
</template>

<script>
    import { userPutQr } from '@/apis/index'
    import { Toast } from 'vant'
    import img from '../../../assets/images/qr.png'
    export default {
        name: "index",
        data(){
            return {
                imgUrl:'',

            }
        },
        methods:{
            initImg(){
                userPutQr().then(res=>{
                    Toast({type:'loading',message:'图片生成中...',duration:0})
                    if(!res.code){
                        const ewm=res.msg.ewmimg,_self=this
                        let can=document.createElement('canvas')
                        let oImg=new Image()
                        oImg.onload=()=>{
                            can.width=oImg.width;
                            can.height=oImg.height;
                            const ctx=can.getContext('2d');
                            ctx.drawImage(oImg,0,0);
                            let oImg2=new Image();
                            oImg2.crossOrigin = '';
                            oImg2.onload=()=>{
                                ctx.drawImage(oImg2,560,1140,150,150)
                                _self.imgUrl=can.toDataURL()
                                Toast.clear()
                            }
                            oImg2.src=ewm

                        }
                        oImg.src=img
                    }
                })
            }
        },
        mounted(){
            this.initImg()
        }
    }
</script>

<style scoped lang="scss">
 .qr{
     img{
         display: block;
     }
 }
</style>
