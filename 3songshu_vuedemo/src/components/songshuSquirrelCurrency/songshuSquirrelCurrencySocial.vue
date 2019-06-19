<template>
    <div class="like_content">
        <a href="#" v-for="(item, index) in push.coupon">
            <img
                src="../../../public/img/squirrel_currency/39e6e2951070da227b21fdd04fb153a1.jpg"
                alt
            >
            <h2>{{item.content}}</h2>
            <p>{{item.limit}}</p>
            <div class="spend">
                <i></i>
                <span>{{item.spend}}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "songshuSquirrelCurrencySocial",
    props: ["push"]
};
</script>

<style scoped>
.like_content {
    background: #f9f9f9;
    display: flex;
    flex-wrap: wrap;
}
.like_content h2 {
    font-size: 0.28rem;
}
</style>


