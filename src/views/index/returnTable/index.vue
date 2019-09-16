<template>
    <div class="return">
        <table>
            <tr>
                <td>产品名称</td><td>本人返佣</td><td>一级返佣</td><td>二级返佣</td>
            </tr>
            <tr v-for="(item,idx) in dataList" :key="idx">
                <td class="flex a-i"><img :src="item.img" alt="">{{item.name}}</td>
                <td>{{item.yj0}}</td>
                <td>{{item.yj1}}</td>
                <td>{{item.yj2}}</td>
            </tr>
        </table>
        <van-divider v-if="dataList.length<1">暂无数据</van-divider>
        <p>
            一经确认放款成功，佣金实时计算，隔日到账，随时提现。
        </p>
    </div>
</template>

<script>
    import { productList } from '@/apis/index'
    import { Toast, Divider } from 'vant';
    export default {
        name: "pdf",
        data(){
            return {
                dataList:[

                ]
            }
        },
        components:{
            [Divider.name]:Divider
        },
        methods:{
            initTable(){
                productList().then(res=>{
                    if(!res.code)this.dataList=res.rows
                })
            }
        },
        mounted(){
            this.initTable()
        }

    }
</script>

<style scoped lang="scss">
    .return{
        padding: .3rem .3rem .6rem;
        table{
            border-radius: .2rem;
            background-color: #fff;
            font-size: .24rem;
            color: #333;
            display: block;
            text-align: center;
            padding:0.1rem .1rem .2rem 0.1rem;
            tr{
                display: block;
                line-height: .86rem;
                td{
                    display: inline-block;
                    width: 24%;
                }
                td:first-child{
                    width: 28%;
                }
                img{
                    width: .4rem;
                    height: .4rem;
                    margin-right: .15rem;
                }
            }
            tr:first-child{
                font-weight: 600;
                line-height: .8rem;
            }
        }
        & > p{
            font-weight: 600;
            padding: .5rem;
        }
    }
</style>
