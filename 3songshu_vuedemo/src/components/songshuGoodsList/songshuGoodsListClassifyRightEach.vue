<template>
  <div class="goodsEach">
    <router-link class="goods_eve" v-for="(item,index) in getGoodsList" :to="path+'/'+item.middleId">
      <img :src="item.middleImg" alt>
      <span>{{item.middleName}}</span>
    </router-link>
  </div>
</template>


<script>
export default {
    name: "songshuGoodsListClassifyRightEach",
    data(){
      return{
       path:'/littleClass'
      }
    },
    props: ["getGoodsList"],
    created() {
  }
};
</script>

<style scoped>
.goodsEach {
  flex-wrap: wrap;
  flex-shrink: 1;
  display: flex;
}
</style>