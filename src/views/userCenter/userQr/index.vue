<template>
        <div class="qr">
            <img :src="img" alt="">
        </div>
</template>

<script>
    import img from '../../../assets/images/qr.png'
    export default {
        name: "index",
        data(){
            return {
                img
            }
        }
    }
</script>

<style scoped>
 .qr{
     img{
         display: block;
     }
 }
</style>
