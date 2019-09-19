<template>
        <div class="userCommission">
            <van-cell title="条件筛选" is-link arrow-direction="down"  @click="show=true"/>
            <van-dialog
                    v-model="show"
                    title="条件筛选"
                    show-cancel-button
                    confirm-button-color="#ffa012"
                    close-on-popstate
                    @confirm="toSure()"
                    @cancel="show=false"
            >
                <div class="dialogs">
                    <p>佣金来源：</p>
                    <div class="flex a-i ">
                        <van-button :color="firstBtn===idx ? '#fe7007' : '#ada7a7'" size="small" v-for="(item,idx) in fbtns" :key="idx" plain @click="firstBtn=idx">{{item.title}}</van-button>
                    </div>
                    <p>贷款时间：</p>
                    <div class="flex a-i ">
                        <van-button :color="secBtn===idx ? '#fe7007' : '#ada7a7'" size="small" v-for="(item,idx) in sbtns" :key="idx" plain @click="secBtn=idx">{{item.title}}</van-button>
                    </div>
                </div>
            </van-dialog>
            <div class="easy">
                共赚取佣金 <span>0.00 元</span>，已提现(含待审核) <span>0.00 元</span>，剩余未提现金额 <span>0.00 元</span>。
            </div>
            <table>
                <tr>
                    <td>佣金流水号</td>
                    <td>佣金金额</td>
                    <td>来源</td>
                </tr>
            </table>
            <van-divider v-if="!dataList.length">暂无数据</van-divider>
        </div>
</template>

<script>
    import { Button, Toast, Dialog, Cell, Divider } from 'vant';
    export default {
        name: "index",
        data(){
            return {
                show:false,
                fbtns:[
                    {title:'本人',type:0},
                    {title:'一级经理人',type:1},
                    {title:'二级经理人',type:2},
                ],
                sbtns:[
                    {title:'本周',type:0},
                    {title:'本月',type:1},
                    {title:'本季度',type:2},
                    {title:'一年内',type:3},
                ],
                firstBtn:'',
                secBtn:'',
                dataList:[
                ]
            }
        },
        components:{
            [Button.name]:Button,
            [Dialog.Component.name]:Dialog.Component,
            [Cell.name]:Cell,
            [Divider.name]:Divider,
        },
        methods:{
            toSure(){
                console.log(this.firstBtn,this.secBtn)
            }
        }
    }
</script>

<style scoped lang="scss">
 .userCommission{
    padding: .2rem 0 0 0;
     .dialogs{
         padding:.5rem .3rem;
         p{
             font-size: .28rem;
             line-height: .48rem;
             margin-bottom: .2rem;
         }
         p:nth-child(3){
             margin-top: .3rem;
         }
         & >.flex{
             justify-content: space-around;
         }
     }
     .easy{
         font-size: .28rem;
         padding:.2rem .3rem;
         line-height: .48rem;
         span{
             color: #e62c10;
         }
     }
     table{
         border-radius: .2rem;
         margin:0.2rem .2rem .6rem;
         display: block;
         font-size: .24rem;
         color: #333;
         line-height: .48rem;
         text-align: center;
         background-color: #fff;
         tr{
             display: block;
             padding: .1rem 0;
             &:first-child{
                 font-weight: 600;
             }
             td{
                 display: inline-block;
                 width: 33.33%;
             }
         }
     }
 }
</style>
