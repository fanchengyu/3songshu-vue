<template>
    <section>
        <a href="#" v-for="(item,index) in mycart" class="eve_goods">
            <div :class="item.checked?'check checked':'check'" @click="changeColor(item)"></div>
            <img :src="item.productImg1" alt>
            <div class="g_details">
                <span>{{item.productName}}</span>
                <span>{{item.price1}}</span>
                <div class="computed">
                    <span @click.prevent.stop="reduce(index)">-</span>
                    <input type="text" v-model="item.productCount">
                    <span @click.prevent.stop="plus(index)">+</span>
                </div>
            </div>
            <p>{{item.describe}}</p>
        </a>
    </section>
</template>

<script>
export default {
    name: "songshuCartsContent",
    props: ["mycart"],
    data() {
        return {
            flagCheck: true
        };
    },
    created(){
      
    },
    methods: {
        changeColor(item) {
            item.checked = !item.checked;
            this.$emit("getSingle");
        },
        plus(index) {
            this.$emit("numPlus",index)
        },
        reduce(index) {
            this.$emit("numReduce",index)
        }
    }
};
</script>

<style scoped>
/* 购物车部分 */
section {
    widows: 100%;
    background: #f9f9f9;
    flex: 1;
    overflow-y: auto;
}
section .eve_goods {
    width: 100%;
    display: flex;
    padding: 0 0.18rem 0 0.08rem;
    align-items: center;
    height: 1.8rem;
    margin-bottom: 0.1rem;
    position: relative;
    background: white;
}
.check {
    width: 0.36rem;
    height: 0.36rem;
    border: 1px solid black;
    border-radius: 50%;
}
.checked {
    border: none;
    background: url(../../../public/img/carts/check.gif) 1px 1px;
}
.eve_goods img {
    width: 1.36rem;
    height: 1.36rem;
    border: 0.02rem solid #dddddd;
    border-radius: 0.06rem;
    margin: 0 0.2rem;
}
.g_details > span:first-child {
    color: black;
    font-size: 0.28rem;
}
.g_details > span:nth-child(2) {
    font-size: 0.28rem;
    color: #ee2e52;
    line-height: 0.5rem;
}
.g_details > .computed {
    width: 1.92rem;
    height: 0.42rem;
    border: 0.02rem solid #dddddd;
    border-radius: 0.05rem;
    line-height: 0.42rem;
    display: flex;
    text-align: center;
    font-size: 0.22rem;
    color: black;
}
.computed > span {
    width: 0.54rem;
}
.computed > span:first-child {
    border-right: 0.02rem solid #dddddd;
}
.computed > span:last-child {
    border-left: 0.02rem solid #dddddd;
}
.computed > input {
    text-align: center;
    font-size: 0.22rem;
    color: black;
    width: 0.8rem;
    outline: none;
    border: none;
}
.eve_goods p {
    color: #999999;
    font-size: 0.24rem;
    position: absolute;
    top: 0.3rem;
    right: 0.2rem;
}

/* footer当前的选中状态 */
footer .cards > i {
    background-image: url(../../../public/img/icon-cart-active@2x.a8df4534.png);
}
footer .cards > span {
    color: #77bc1f;
}
</style>


