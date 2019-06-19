<template>
    <article>
        <div class="eve_article" v-for="(item,index) in getGoodsList" v-if="key_name_now==item.bigId" >
            <songshu-goods-list-classify-right-each :getGoodsList="item.middleClass"></songshu-goods-list-classify-right-each>
        </div>
    </article>
</template>


<script>
import songshuGoodsListClassifyRightEach from "./songshuGoodsListClassifyRightEach"
export default {
    name:"songshuGoodsListClassifyRight",
    components:{
        "songshu-goods-list-classify-right-each":songshuGoodsListClassifyRightEach
    },
    data(){
        return{
           key_name_now:"1",
        }
    },
    props:['getGoodsList'],
    created(){
         this.Observer.$on("getBigId", req => {
        this.key_name_now=req;
      });
    }
    }
</script>

<style scoped>
   article{
    flex:1;
    overflow-y:auto;
    height:100%;
}
</style>