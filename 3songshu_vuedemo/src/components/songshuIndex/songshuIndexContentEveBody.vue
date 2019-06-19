<template>
    <div class="yesterday">
        <a  v-for="(item,index) in eve" class="banner_new_2 yesterday_eve">
            <img :src="item.productImg1" alt>
            <p>{{item.describe}}</p>
            <p>{{item.productName}}</p>
            <p>
                <span>{{item.price2}}</span>
                <s>{{item.price1}}</s>
            </p>
            <div class="new_right" @click="insertCart(item)"></div>
            <div class="sel_hot"></div>
        </a>
    </div>
</template>

<script>
export default {
    name: "songshuIndexContentEveBody",
    props: ["eve"],
    methods: {
        insertCart(item) {
            fetch("http://localhost:3000/goods/api/myGoods/insertCart", {
                method: "post",
                headers: {
                    "Content-Type": "application/json" //请求头
                },
                body: JSON.stringify(item)
            }).then(res => {
                res.json().then(data => {
                    this.Observer.$emit("insertCart", data);
                    alert("已成功加入购物车")
                });
            });
        }
    }
};
</script>

<style>
.yesterday {
    display: flex;
    flex-wrap: wrap;
    background: #f9f9f9;
    justify-content: space-between;
    overflow-y:auto;
}
.yesterday .yesterday_eve {
    width: 49%;
    background: white;
    margin-bottom: 0.12rem;
    position: relative;
}
.yesterday .yesterday_eve:last-child,
.yesterday .yesterday_eve:nth-last-child(2) {
    margin-bottom: 0;
}
.yesterday_eve > p {
    text-indent: 0.24rem;
    width: 100%;
}
.yesterday_eve > img {
    width: 100%;
}
.yesterday_eve > p:nth-child(2) {
    font-size: 0.24rem;
    color: #262626;
    line-height: 0.4rem;
}
.yesterday_eve > p:nth-child(3) {
    font-size: 0.24rem;
    color: #999999;
    line-height: 0.4rem;
}
.yesterday_eve > p:nth-child(4) {
    display: flex;
    align-items: center;
}
.yesterday_eve > p:nth-child(4) > span {
    color: #ee2e52;
    font-size: 0.3rem;
    margin-right: 0.12rem;
}
.yesterday_eve > p:nth-child(4) > s {
    font-size: 0.24rem;
    color: #999999;
}
.sel_hot {
    background: url(../../../public/img/f67d62e50908ea60e3b76e86b0a7718c.png)
        no-repeat 0px 0px;
    width: 0.82rem;
    background-size: 0.82rem 0.82rem;
    height: 0.82rem;
    position: absolute;
    left: 0;
    top: 0;
}
.new_right {
    width: 0.5rem;
    height: 0.5rem;
    background: url(../../../public/img/icon-add-to-cart-green.cba1771f.png)
        no-repeat;
    position: absolute;
    background-size: 0.5rem 0.4rem;
    right: 0.1rem;
    bottom: 0.03rem;
}
</style>

