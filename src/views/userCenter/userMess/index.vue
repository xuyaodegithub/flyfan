<template>
        <div class="userMess">
            <van-tabs v-model="active" title-active-color="#fe7007" color="#fe7007" @change="changeType">
                <van-tab title="消息" :name="1"></van-tab>
                <van-tab title="公告" :name="2"></van-tab>
            </van-tabs>
            <div class="msginfo">
                <van-cell-group>
                    <van-cell :title="item.content" :value="item.addtime" center v-for="(item,idx) in dataList" :key="idx" clickable @click="show=true"/>
                </van-cell-group>
            </div>
            <van-popup v-model="show" round   closeable  close-icon-position="top-left">
                <div class="pups">
                    <h3>大掌柜税贷！新品预告</h3>
                    <div class="content">
                        感兴趣的经理人可以私信客服了解详细情况哦
                        <img src="http://bank-marking-sale.dachagui.com/statics/upload/ueditor/php/upload/image/20190924/1569328481175593.jpg" alt="">
                    </div>
                    <p>大钱柜金科</p>
                    <p>2019-09-14</p>
                </div>
            </van-popup>
            <van-divider v-if="!dataList.length">暂无数据</van-divider>
        </div>
</template>

<script>
    import { Tab, Tabs, Divider,Cell, CellGroup,Popup } from 'vant';
    import { userNews } from '@/apis'
    export default {
        name: "index",
        data(){
            return {
                active:1,
                dataList:[],
                show:false
            }
        },
        components:{
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [Divider.name]:Divider,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup,
            [Popup.name]:Popup,
        },
        methods:{
            initMsgData(){
                let data={
                    type:this.active
                }
                userNews(data).then(res=>{
                    if(!res.code){
                        this.dataList=res.rows
                    }
                })
            },
            changeType(idx,tit){
                this.initMsgData()
            },
        },
        mounted(){
            this.initMsgData()
        }
    }
</script>

<style scoped lang="scss">
 .userMess{
    .msginfo{
        margin-top: .2rem;
    }
     .van-popup--center{
         width: 90%;
         height: 80%;
         padding: .4rem;
         overflow-y: auto;
     }
     .pups{
         h3{
             text-align: center;
         }
         background-color: #fff;
         font-size: .24rem;
         color: #333;
         line-height: .48rem;
         img{
             display: block;
             width: 100%;
             margin: .2rem 0;
         }
         & > p{
             text-align: right;
         }
     }
 }
</style>
