<template>
    <div class="productList">
        <div v-for="(item,idx) in dataList" :key="idx">


        </div>
    </div>
</template>

<script>
    import { Tag  } from 'vant';
    export default {
        name: "productList",
        data(){
            return {
                dataList:[
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                    {title:'微业贷',img:'http://bank-mg.dachagui.com/statics/upload/4917/6934/6c8ae030be397ef0a0c1d75c9e9a45df.png',ed:'1w-300w',zd:'0.66%',qixian:'12-36月'},
                ]
            }
        },
        components:{
            [Tag.name]:Tag,
        }
    }
</script>

<style scoped lang="scss">

</style>
