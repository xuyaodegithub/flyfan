<template>
        <div class="userMess">
            <van-tabs v-model="active" title-active-color="#fe7007" color="#fe7007">
                <van-tab title="消息" :name="1"></van-tab>
                <van-tab title="公告" :name="2"></van-tab>
            </van-tabs>
            <van-divider v-if="!dataList.length">暂无数据</van-divider>
        </div>
</template>

<script>
    import { Tab, Tabs, Divider } from 'vant';
    import { userNews } from '@/apis'
    export default {
        name: "index",
        data(){
            return {
                active:1,
                dataList:[]
            }
        },
        components:{
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [Divider.name]:Divider,
        },
        methods:{
            initMsgData(){
                userNews().then(res=>{
                    if(!res.code){
                        this.dataList=res.rows
                    }
                })
            }
        },
        mounted(){
            this.initMsgData()
        }
    }
</script>

<style scoped>
 .userMess{

 }
</style>
