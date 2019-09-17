<template>
    <div class="bigAdd">
        <img v-lazy="img" alt="">
        <div class="fixed flex a-i j-b">
            <van-button type="info" round>立即购买</van-button>
            <van-button color="#fe4a0f" round>立即推广</van-button>
        </div>
    </div>
</template>

<script>
    import { Button   } from 'vant';
    export default {
        name: "productList",
        data(){
            return {
                img:'https://kaka-image-bucket.oss-cn-hangzhou.aliyuncs.com/background/longCard/1566896834758.png',
                dataList:[
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                ]
            }
        },
        components:{
            [Button .name]:Button,
        }
    }
</script>

<style scoped lang="scss">
.bigAdd{
    padding: .2rem;
    img{
        display: block;
        margin-bottom: 1.5rem;
    }
    .fixed{
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: #fff;
        width: 100%;
        padding: .2rem;
        .van-button:first-child{
            width: 40%;
        }
        .van-button:last-child{
            margin-left: .3rem;
            flex: 1;
        }
    }
}
</style>
