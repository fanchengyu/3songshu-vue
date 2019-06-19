<template>
    <div class="new">
        <a href="#" v-for="(item, index) in push.fruit">
            <img :src="item.pic" alt>
            <p>{{item.fruit_name}}</p>
            <p>数量有限,兑完为止</p>
            <div class="fruit_price">
                <span>{{item.fruit_price}}</span>
                <span>+</span>
                <i></i>
                <span>{{item.spend}}</span>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: "songshuSquirrelCurrencyNew",
    props: ["push"]
};
</script>

<style scoped>
.new {
    display: flex;
    flex-wrap: wrap;
}
</style>

