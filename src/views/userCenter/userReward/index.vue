<template>
    <div class="userReward">
        <van-cell title="条件筛选" is-link arrow-direction="down"  @click="show=true"  value="共赚取奖励金30元" value-class="vcolor" />
        <van-dialog
                v-model="show"
                title="条件筛选"
                show-cancel-button
                confirm-button-color="#ffa012"
                close-on-popstate
                close-on-click-overlay
                cancel-button-text="重置"
                :before-close="beforeClose"
        >
            <div class="dialogs">
                <p>获取时间：</p>
                <div class="flex a-i ">
                    <van-button :color="secBtn===idx ? '#fe7007' : '#ada7a7'" size="small" v-for="(item,idx) in sbtns" :key="idx" plain @click="secBtn=idx">{{item.title}}</van-button>
                </div>
            </div>
        </van-dialog>
        <table>
            <tr>
                <td>奖励金流水号</td>
                <td>金额</td>
                <td>来源</td>
            </tr>
        </table>
        <van-divider v-if="!dataList.length">暂无数据</van-divider>
    </div>
</template>

<script>
    import { Button, Toast, Dialog, Cell, Divider } from 'vant';
    import minixs from '@/minixs'
    export default {
        name: "index",
        mixins:[minixs],
        data(){
            return {
                show:false,
                sbtns:[
                    {title:'本周',type:0},
                    {title:'本月',type:1},
                    {title:'本季度',type:2},
                    {title:'一年内',type:3},
                ],
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
            beforeClose(action,done){
                if(action==='confirm'){
                    console.log(this.secBtn)
                    done()
                }else if(action==='overlay') done()
                else{
                    this.secBtn='';
                    done(false)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .userReward{
        .vcolor{
            color: #fea412;
        }
        padding: .2rem 0 0 0;
        .dialogs{
            padding:.5rem .3rem;
            .van-button{
                border: 1px solid #ada7a7;
                border-radius: .3rem;
            }
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
            margin: .3rem .2rem .6rem;
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
