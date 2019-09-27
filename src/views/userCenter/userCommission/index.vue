<template>
        <div class="userCommission">
            <van-sticky>
                <van-cell title="条件筛选" is-link arrow-direction="down"  @click="show=true"/>
            </van-sticky>
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
                <tr v-for="(item,idx) in dataList" :key="idx">
                    <td>{{item.id}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.title}}</td>
                </tr>
            </table>
            <van-divider v-if="!dataList.length">暂无数据</van-divider>
        </div>
</template>

<script>
    import { Button, Toast, Dialog, Cell, Divider,Sticky } from 'vant';
    import { userDetailCom } from '@/apis'
    import minixs from '@/minixs'
    import { getWeekStartDate,getMonthStartDate,getQuarterStartDate,formatDate } from '@/utils/date.js'
    export default {
        name: "index",
        mixins:[minixs],
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
                ],
                page:1,
                rows:10,
                type:0,
                // begindate:'',
                // enddate:'',
                level:'',
                status:'',
            }
        },
        computed:{
            begindate(){
                console.log(this.secBtn)
                if(this.secBtn==='')return '';
                else if(this.secBtn===0)return getWeekStartDate();
                else if(this.secBtn===1)return getMonthStartDate();
                else if(this.secBtn===2)return getQuarterStartDate();
                else if(this.secBtn===3)return new Date().getFullYear()+'-01-01';
            },
            enddate(){
                if(this.secBtn==='')return '';
                else return formatDate(new Date());
                // else if(this.secBtn===0)return formatDate();
                // else if(this.secBtn===1)return formatDate();
                // else if(this.secBtn===2)return formatDate();
                // else if(this.secBtn===3)return new Date().getFullYear()+'-01-01';
            }
        },
        components:{
            [Button.name]:Button,
            [Dialog.Component.name]:Dialog.Component,
            [Cell.name]:Cell,
            [Divider.name]:Divider,
            [Sticky.name]:Sticky,
        },
        methods:{
            beforeClose(action,done){
               if(action==='confirm'){
                   // console.log(this.firstBtn,this.secBtn)
                   this.dataloading=false;
                   this.stopScoll=false;
                  this.initUserCommition(1)
                   done()
               }else if(action==='overlay') done()
               else{
                   this.firstBtn='';
                   this.secBtn='';
                   done(false)
               }
            },
            initUserCommition(k){
                this.dataloading=true;
                let data={
                    page:this.page,
                    rows:this.rows,
                    type:this.type,
                    begindate:this.begindate,
                    enddate:this.enddate,
                    level:this.firstBtn,
                    // status:this.status,
                }
                console.log(data);
                userDetailCom(data).then(res=>{
                    if(!res.code){
                        if(k===1)this.dataList=res.rows;
                        else this.dataList=[...this.dataList,...res.rows];
                        if(res.rows.length<10) this.stopScoll=true;
                    }
                    this.dataloading=false
                })
            },
        },
        mounted(){
            this.initUserCommition(1)
            window.addEventListener('scroll',this.initscroll)
        },
        destroyed(){
            window.removeEventListener('scroll',this.initscroll)
        }
    }
</script>

<style scoped lang="scss">
 .userCommission{
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
