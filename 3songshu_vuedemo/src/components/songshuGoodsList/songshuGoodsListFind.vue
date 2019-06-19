<template>
    <section class="find_something">
        <a href="#" target="_blank" v-for="(item,index) in getGoodsList.find">
            <img :src=item.pic>
        </a>
    </section>
</template>


<script>
export default {
     name:"songshuGoodsListFind",
     props:['getGoodsList'],
}
</script>

<style scoped>
    section{
    flex:1;
    display:flex;
}
</style>