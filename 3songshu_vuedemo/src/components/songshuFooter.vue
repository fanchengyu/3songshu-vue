<template>
    <footer>
        <router-link v-for="(item,index) in tabber" :to="item.path">
            <i :style="{backgroundImage:($route.path==item.path?item.pic2:item.pic1)}"></i>
            <span :style="{color:($route.path==item.path?'#77bc1f':'#666')}">{{item.title}}</span>
            <div v-if="index==3" class="num">{{goodsDits||goodsDit}}</div>
        </router-link>
    </footer>
</template>
<script>
export default {
    name: "songshuFooter",
    props: ["goodsDits"],
    data() {
        return {
            tabber: [
                {
                    title: "首页",
                    path: "/",
                    pic1: "url(../img/icon-home@2x.7a254bff.png)", //灰色
                    pic2: "url(../img/icon-home-active@2x.fdcce70a.png)" //绿色
                },
                {
                    title: "分类",
                    path: "/goods_list",
                    pic1: "url(../img/icon-classify@2x.534fd4d1.png)",
                    pic2: "url(../img/icon-classify-active@2x.e357b1e3.png)"
                },
                {
                    title: "松鼠币商城",
                    path: "/squirrel_currency",
                    pic1: "url(../img/icon-privilege@2x.a56a9709.png)",
                    pic2: "url(../img/icon-integral@2x.ba5969d3.png)"
                },
                {
                    title: "购物车",
                    path: "/carts",
                    pic1: "url(../img/icon-cart@2x.2ab995f2.png)",
                    pic2: "url(../img/icon-cart-active@2x.a8df4534.png)"
                },
                {
                    title: "个人中心",
                    path: "/mine",
                    pic1: "url(../img/icon-profile@2x.bad16eb6.png)",
                    pic2: "url(../img/mine/icon-profile-active@2x.90c8d715.png)"
                }
            ],
            currentIndex: "",
            goodsDit: 0,
            vuexGoods: "",
            totNum: 0
        };
    },
    methods: {
        changeColor(item, index) {
            this.currentIndex = index;
        }
    },
    computed: {
        goodsGet() {
            return this.$store.getters.goodsGet;
        }
    },
    watch: {
        goodsDit: {
            handler(newVal) {
                fetch("http://localhost:3000/goods/api/myGoods").then(res => {
                    res.json().then(data => {
                        this.goodsDit = data.totNum;
                    });
                });
            },
            deep: true,
            immediate: true
        }
    },
};
</script>

<style scoped>
a {
    position: relative;
}
i {
    display: block;
    height: 0.48rem;
}
.num {
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 50%;
    background: #f69510;
    color: white;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.38rem;
    position: absolute;
    left: 0.42rem;
    top: -0.08rem;
}
</style>

