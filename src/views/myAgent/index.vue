<template>
    <div class="agent">
        <van-tabs v-model="activeName"  type="card"  @change="changTab" sticky color="#fe4a0f">
            <van-tab title="自身" name="1"></van-tab>
            <van-tab title="一" name="2"></van-tab>
            <van-tab title="二" name="3"></van-tab>
            <van-tab title="三" name="4"></van-tab>
            <van-tab title="四" name="5"></van-tab>
            <van-tab title="..." name="6"></van-tab>
        </van-tabs>
        <div class="a_title">
            <div class="a_tags j-b flex">
                <span>级别</span><span>人数</span><span>战绩</span>
            </div>
            <div class="flex a_val j-b">
                <span>{{+activeName-1}}</span><span>{{allpeople}}</span><span>{{allprice}}</span>
            </div>
        </div>
        <div class="tables">
            <table>
                <tr>
                    <td>姓名</td>
                    <td>手机号</td>
                    <td>总战绩</td>
                    <td>时间</td>
                </tr>
                <tr v-for="(item,idx) in dataList" :key="idx">
                    <td>{{item.username}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.yeji}}</td>
                    <td>{{item.addtime}}</td>
                </tr>
            </table>
            <van-divider :style="{ color: '#fe4a0f', borderColor: '#fe4a0f', padding: '0 16px' }" v-if="dataList.length<1">
                暂无数据
            </van-divider>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import { Tab, Tabs, Toast, Divider } from 'vant';
    import { userAgent } from '@/apis/index'

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
              allpeople:0,
              allprice:0
          }
        },
        components: {
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [Toast.name]:Toast,
            [Divider.name]:Divider,
        },
        computed:{

        },
        methods:{
            changTab(idx,tit){
                this.userAgentList(1)
            },
            userAgentList(k){
                this.dataloading=true
                let data={
                    depth:this.activeName,
                    page:this.page,
                    rows:this.rows
                }
                userAgent(data).then(res=>{
                    if(!res.code){
                        if(k===1){
                            this.allpeople=res.total
                            this.allprice=res.zyj
                            this.dataList=res.rows;
                        } else this.dataList=[...this.dataList,...res.rows];
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
                    this.userAgentList(2)
                }
            }
        },
        mounted(){
            this.userAgentList(1)
            window.addEventListener('scroll',this.scrollTo)
        }
    }
</script>
<style scoped lang="scss">
    .agent{
        .van-tabs--card{
            padding-top: 0;
        }
        .a_title{
            padding: 0 .3rem;
            font-size: .36rem;
            color: #333;
            text-align: center;
            margin-top: .3rem;
            border-radius: .6rem;
            overflow: hidden;
            .flex{
                background-color: #fff;
                padding: 0.2rem 0;
                span{
                    width: 30%;
                }
                span:last-child{
                    flex: 1;
                }
                &:first-child{
                    border-bottom: 2px solid #fe4a0f;
                }
            }
        }
        .tables{
            padding: 0.3rem .2rem;
            margin-top: .3rem;
        }
        table{
            display: block;
            background-color: #fff;
            font-size: .24rem;
            line-height: .64rem;
            text-align: center;
            padding: .2rem 0;
            tr{
                display: block;
                border-bottom: 2px solid #fe4a0f;
                td{
                    display: inline-block;
                    width: 22%;
                }
                td:last-child{
                    width: 34%;
                    font-size: .1rem;
                }
            }
        }
    }

</style>
