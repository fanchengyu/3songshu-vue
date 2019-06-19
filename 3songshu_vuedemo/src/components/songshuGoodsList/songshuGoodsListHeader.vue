<template>
  <!-- header部分 -->
  <header>
    <span :class="{active:flag==true}" @click="changeColorC()">分类</span>
    <span :class="{active:flag==false}" @click="changeColorF()">发现</span>
    <a href="login.html">
      <i></i>
    </a>
  </header>
</template>
<script>
export default {
  name: "songshuGoodsListHeader",
  data() {
    return {
      flag: true
    };
  },
  methods: {
    changeColorC() {
      (this.flag = true), this.Observer.$emit("getSection", this.flag);
    },
    changeColorF() {
      (this.flag = false), this.Observer.$emit("getSection", this.flag);
    }
  }
};
</script>

<style scoped>
header{
    display:flex;
    justify-content: center;
    align-items: center;
    position:relative;
    height:.87rem;
    border-bottom:1px solid #e4e4e4;
}
header span{
    color:#000000;
    font-size:.36rem;
}
header span:nth-child(1){
    margin-right:1.78rem;
}
header .active{
    color:#77bc1f;
}
header i{
    background: url(../../../public/img/icon-categories-search@2x.1bfb7350.png) 0px  0px no-repeat ;
    background-size:.36rem .36rem;
    width:.36rem;
    height:.36rem;
    position:absolute;
    right:.36rem;;
    top:.26rem;
}
</style>


