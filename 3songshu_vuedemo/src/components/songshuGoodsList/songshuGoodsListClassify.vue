<template>
        <!-- 分类部分 -->
         <section class="classification">
             <songshu-goods-list-classify-left :getGoodsList="getGoodsList.menus" ></songshu-goods-list-classify-left>
             <songshu-goods-list-classify-right :getGoodsList="getGoodsList.menus"></songshu-goods-list-classify-right>
         </section>
</template>


<script>
import songshuGoodsListClassifyLeft from "./songshuGoodsListClassifyLeft"
import songshuGoodsListClassifyRight from "./songshuGoodsListClassifyRight"
export default {
    name:"songshuGoodsListClassify",
    components:{
        "songshu-goods-list-classify-left":songshuGoodsListClassifyLeft,
        "songshu-goods-list-classify-right":songshuGoodsListClassifyRight
    },
    data(){
        return{
            flag:true
        }
    },
    props:['getGoodsList'],
    created(){
        this.Observer.$on("getSection",req=>{
            this.flag=req;
        })
    }
}
</script>

<style scoped>
section{
    flex:1;
    display:flex;
}
</style>
