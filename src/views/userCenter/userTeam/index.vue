<template>
        <div class="userTeam">
            <div class="flex j-b a-i tab">
                <div :class="{'active' : type===idx}" @click="changeTab(idx)" v-for="(item,idx) in tabs" :key="idx">
                    <p>{{item.tyep===1 ? '一级经理人' : '二级经理人'}}</p>
                    <p>人数：{{item.num}}</p>
                    <p>带来佣金：{{item.money}}</p>
                    <van-icon name="checked" v-if="type===idx" />
                </div>
            </div>
            <table>
                <tr>
                    <td>姓名</td>
                    <td>手机号</td>
                    <td>本人创造佣金</td>
                    <td>加入日期</td>
                    <td>{{this.type ? '上级' : '下级'}}</td>
                </tr>
                <tr v-for="(item,idx) in dataList" :key="idx">
                    <td>{{item.name}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.self}}</td>
                    <td>{{item.data}}</td>
                    <td>{{item.xia}}</td>
                </tr>
            </table>
            <van-divider :style="{ color: '#fe4a0f', borderColor: '#fe4a0f', padding: '0 16px' }" v-if="!dataList.length">
                暂无数据
            </van-divider>
        </div>
</template>

<script>
    import { Icon,Divider } from 'vant';
    export default {
        name: "index",
        data(){
            return {
                type:0,
                tabs:[
                    {tyep:1,num:0,money:0},
                    {tyep:2,num:0,money:0},
                ],
                dataList:[
                    {name:'张三',phone:'16612340589',self:'124892',data:'2019-10-25',xia:'600'},
                    {name:'张三李四',phone:'16612340589',self:'124892',data:'2019-10-25',xia:'600'},
                    {name:'张三',phone:'16612340589',self:'124892',data:'2019-10-25',xia:'600'},
                    {name:'张三',phone:'16612340589',self:'124892',data:'2019-10-25',xia:'600'},
                    {name:'张三',phone:'16612340589',self:'124892',data:'2019-10-25',xia:'600000'},
                ]
            }
        },
        components:{
            [Icon.name]:Icon,
            [Divider.name]:Divider,
        },
        methods:{
            changeTab(v){
               this.type=v
            }
        }
    }
</script>

<style scoped lang="scss">
 .userTeam{
    .tab{
        font-size: .28rem;
        line-height: .48rem;
        color: #fff;
        text-align: center;
        & > div.active{
            background: linear-gradient(#fecb1a, #fea412);
        }
        & > div{
            position: relative;
            background-color: #b8b8b8;
            padding: .2rem;
            flex: 1;
            p:nth-child(2){
                margin: .1rem 0;
            }
            .van-icon{
                position: absolute;
                top: 0;
                right: 0;
                font-size: .32rem;
                color: red;
            }
          }
    }
     table{
         display: block;
         font-size: .24rem;
         color:#333;
         background-color: #fff;
         text-align: center;
         padding: .2rem;
         tr:first-child{
             font-weight: 600;
         }
         td{
             display: inline-block;
         }
         td:first-child{
             width: 15%;
         }
         td:nth-child(2){
             width: 25%;
         }
         td:nth-child(3){
             width: 23%;
         }
         td:nth-child(4){
             width: 23%;
         }
         td:nth-child(5){
             width: 14%;
         }
         tr{
             display: block;
             padding: .2rem 0;
         }
     }
 }
</style>
