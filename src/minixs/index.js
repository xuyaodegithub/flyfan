const mixins={
    data(){
        return {
            stopScoll:false,
            dataloading:false
        }
    },
    methods:{
        initscroll(page,callback){
            console.log(this.page)
            if(this.stopScoll || this.dataloading)return;
            const scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
            const clientH=document.documentElement.clientHeight;
            const pageH=document.body.scrollHeight || document.documentElement.scrollHeight;
            if(scrollTop+clientH>pageH-20){
                this.page+=1;
                this.initUserCommition(2)
            }
        }
    },
    mounted(){

    },
    created(){

    },
}
export default mixins
