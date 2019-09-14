<template>
    <div class="Record">
        <van-tabs v-model="activeName"  type="card"  @change="changTab" sticky color="#fe4a0f">
            <van-tab title="自身" name="1"></van-tab>
            <van-tab title="一" name="2"></van-tab>
            <van-tab title="二" name="3"></van-tab>
            <van-tab title="三" name="4"></van-tab>
            <van-tab title="四" name="5"></van-tab>
            <van-tab title="..." name="6"></van-tab>
        </van-tabs>
        <div class="tables">
            <div class="head flex">
                <span>归属者</span>
                <span>归属者手机号</span>
                <span>客户姓名</span>
                <span>申请时间</span>
                <span>生效时间</span>
                <span>手机号</span>
                <span>下款额度</span>
                <span>预计佣金</span>
                <span>申请渠道名</span>
            </div>
            <h4>下款客户数：<span>{{dataList.length}}</span></h4>
            <div class="head flex" v-for="(item,idx) in dataList">
                <span>{{item.memberusername}}</span>
                <span>{{item.memberphone}}</span>
                <span>{{item.username}}</span>
                <span>{{item.addtime}}</span>
                <span>{{item.dealtime}}</span>
                <span>{{item.phone}}</span>
                <span>{{item.money}}</span>
                <span>{{item.yjyj}}</span>
                <span>宜人贷</span>
            </div>
            <van-divider :style="{ color: '#fe4a0f', borderColor: '#fe4a0f', padding: '0 16px' }" v-if="dataList.length<1">
                暂无数据
            </van-divider>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import { Tab, Tabs, Toast, Divider  } from 'vant';
    import { userRecord } from '@/apis/index'

    export default {
        name: 'Extension',
        data(){
            return {
                activeName:'1',
                dataList:[],
                page:1,
                rows:10,
                stopScoll:false,
                dataloading:false,
            }
        },
        components: {
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [Toast.name]:Toast,
            [Divider .name]:Divider ,
        },
        computed:{

        },
        methods:{
            changTab(idx,tit){
                this.userRecordList(1)
            },
            userRecordList(k){
                this.dataloading=true
                let data={
                    depth:this.activeName,
                    page:this.page,
                    rows:this.rows
                }
                userRecord(data).then(res=>{
                    if(!res.code){
                        if(k===1)this.dataList=res.rows;
                       else this.dataList=[...this.dataList,...res.rows];
                        if(res.rows.length<10)this.stopScoll=true;
                    }
                    this.dataloading=false
                })
            },
            scrollTo(){
                console.log(111)
                if(this.stopScoll || this.dataloading)return;
                const scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
                const clientH=document.documentElement.clientHeight;
                const pageH=document.body.scrollHeight || document.documentElement.scrollHeight;
                if(scrollTop+clientH>pageH-20){
                    this.page+=1;
                    this.userRecordList(2)
                }
            }
        },
        mounted(){
            this.userRecordList(1)
            window.addEventListener('scroll',this.scrollTo)
        }
    }
</script>
<style scoped lang="scss">
    .Record{
        .van-tabs--card{
            padding-top: 0;
        }
        .tables{
            padding: 0.3rem .2rem;
            margin-top: .3rem;
            font-size: .24rem;
            line-height: .5rem;
            text-align: center;
            .head{
                &:nth-child(2n-1){
                    background-color: #efdbb2;
                }
                flex-wrap: wrap;
                border-left: 1px solid #fe4a0f;
                border-top: 1px solid #fe4a0f;
                margin-bottom: .1rem;
                span{
                    border-bottom: 1px solid #fe4a0f;
                    border-right: 1px solid #fe4a0f;
                    width: 33.33%;
                }
                span:nth-child(1),span:nth-child(2){
                    width: 50%;
                }
                span:last-child{
                    width: 100%;
                }
            }
            h4{
                text-align: left;
                line-height: .9rem;
                font-size: .28rem;
                font-weight: 500;
                span{
                    color:#fe4a0f;
                }
            }
        }
    }

</style>
