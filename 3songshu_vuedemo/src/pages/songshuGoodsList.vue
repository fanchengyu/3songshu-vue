<template>
    <div class="like_body">
        <songshu-goods-list-header></songshu-goods-list-header>
        <songshu-goods-list-classify v-if="flag" :getGoodsList="goods_classify_all"></songshu-goods-list-classify>
        <songshu-goods-list-find  v-if="!flag" :getGoodsList="goods_classify_all"></songshu-goods-list-find>
        <songshu-footer></songshu-footer>
        <songshu-goods-list-more></songshu-goods-list-more>
    </div></template>

<script>
import songshuGoodsListHeader from "../components/songshuGoodsList/songshuGoodsListHeader"
import songshuGoodsListClassify from "../components/songshuGoodsList/songshuGoodsListClassify"
import songshuGoodsListFind from "../components/songshuGoodsList/songshuGoodsListFind"
import songshuFooter from "../components/songshuFooter"
import songshuGoodsListMore from "../components/songshuGoodsList/songshuGoodsListMore"

export default {
    name:"songshuGoodsList",
    components:{
        "songshu-goods-list-header":songshuGoodsListHeader,
        "songshu-goods-list-classify":songshuGoodsListClassify,
        "songshu-goods-list-find":songshuGoodsListFind,
        "songshu-footer":songshuFooter,
        "songshu-goods-list-more":songshuGoodsListMore
    },
    data(){
        return{
            goods_classify_all:"",
            flag:true
        }
    },
    created(){
        fetch('http://localhost:3000/goods/api/goodsClassify').then(res=>{
            res.json().then(data=>{
               this.goods_classify_all=data;
            })
        })
         this.Observer.$on("getSection",req=>{
             this.flag=req;
         })
    },
   
}
</script>

<style scoped>
.like_body{
    height:100%;
    display:flex;
    flex-direction:column;
}

/* 右下角按钮 */
 /* 与首页不同,仅有商品按钮 */
body .but_r_b{
    display:flex;
    width:.7rem;
    height:.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position:fixed;
    right:.2rem;
    bottom:1.68rem;
}
</style>


