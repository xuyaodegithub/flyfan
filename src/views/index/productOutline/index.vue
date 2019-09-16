<template>
    <div class="dg flex a-i">
        <div v-for="(item,idx) in dataList" :key="item.id">
            <img v-lazy="item.img" alt="">
            <p>{{item.name}}</p>
        </div>
    </div>
</template>

<script>
    import { productBg } from '@/apis/index'
    export default {
        name: "pdf",
        data(){
            return {
                dataList:[

                ]
            }
        },
        methods:{
            initList(){
                productBg().then(res=>{
                    if(!res.code)this.dataList=res.rows
                })
            }
        },
        mounted(){
            this.initList()
        }

    }
</script>

<style scoped lang="scss">
    .dg{
        padding:.4rem;
        font-size: .28rem;
        color: #333;
        flex-wrap: wrap;
        text-align: center;
        & > div{
            background-color: #fff;
            width: 30%;
            padding: .2rem 0 .2rem 0;
            margin:0 5% 5% 0;
            border-radius: .2rem;
            &:nth-child(3n){
                margin-right: 0;
            }
            img{
                display: block;
                width: 1.2rem;
                height: 1.2rem;
                margin:0 auto .1rem;
            }
        }
    }
</style>
