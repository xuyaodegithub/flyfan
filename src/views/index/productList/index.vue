<template>
    <div class="productList">
        <div v-for="(item,idx) in dataList" :key="idx" @click="goDetail(item)">
            <div class="tit_top flex j-b a-i">
                <div>
                    <img v-lazy="item.img" alt="">
                    <span class="tit">{{item.name}}</span>
                    <van-tag plain type="success" v-if="item.rz==1">企业认证</van-tag>
                </div>
                <van-tag color="#f2826a" round >立即推荐</van-tag>
            </div>
            <div class="flex j-b a-i detial">
                <div>
                    <p>{{item.edqj}}</p>
                    <p>额度</p>
                </div>
                <div>
                    <p>{{item.zdlv}}</p>
                    <p>最低利率</p>
                </div>
                <div>
                    <p>{{item.qx}}</p>
                    <p>期限</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import { Tag  } from 'vant';
    import { productList } from '@/apis/index'
    import  minix  from '@/minixs/index'
    export default {
        name: "productList",
        mixins:[minix],
        data(){
            return {
                dataList:[
                    // {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    // {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    // {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    // {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    // {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    // {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                ],
                page:1,
                rows:10
            }
        },
        components:{
            [Tag.name]:Tag,
        },
        methods:{
            initList(){
                let data={
                    page:this.page,
                    rows:this.rows
                }
                productList(data).then(res=>{
                    if(!res.code)this.dataList=res.rows
                })
            },
            goDetail(item){
                this.$store.commit('SET_ITEM_MSG',item)
                this.$router.push(`/detial?id=${item.id}`)
            }
        },
        mounted(){
            this.initList()
        }
    }
</script>

<style scoped lang="scss">
.productList{
    padding: .3rem;
    font-size: .28rem;
    &>div{
        text-align: center;
        background-color: #fff;
        border-radius: .1rem;
        box-shadow: 0 0.05rem 0.1rem rgba(0,0,0,.3);;
        margin-bottom: .3rem;
        .tit_top{
            padding:.15rem .2rem;
            border-bottom: 2px solid #eee;
            img{
                width: .72rem;
                height: .72rem;
                margin-right: .3rem;
            }
            .tit{
                font-weight: 600;
                margin-right: .3rem;
            }
        }
        .detial{
            padding: .3rem .5rem;
            p:first-child{
                color: #fe4a0f;
                margin-bottom: .1rem;
            }
            p:last-child{
                color: rgb(164, 164, 164);
            }
        }
    }
}
</style>
