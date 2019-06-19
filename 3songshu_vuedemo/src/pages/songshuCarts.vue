<template>
    <div class="like_body">
        <!-- header部分 -->
        <header>
            <div class="pre_page" @click="back()"><</div>
            <p>购物车</p>
            <div class="direct" @click="delGoods()">{{deletes}}</div>
        </header>
        <!-- 免运费部分 -->
        <figure>
            <span v-if="totalPrice<39">
                满39元免运费,还差
                <i>{{(39-totalPrice).toFixed(2)}}</i>元
            </span>
            <span v-if="totalPrice>=39">满39元免运费</span>

            <span v-if="totalPrice<39">
                去凑单
                <i class="gt">!</i>
            </span>
            <!-- <span>已免运费<i class="gt">!</i></span> -->
        </figure>
        <!-- 购物车部分 -->
        <songshu-carts-content
            :mycart="mycart"
            @getSingle="getSingle"
            @numPlus="numPlus"
            @numReduce="numReduce"
        ></songshu-carts-content>
        <!-- 结算部分 -->
        <article>
            <div class="check_full">
                <div :class="checkAll?'check checked':'check'" @click="changeColor"></div>
                <span>全选</span>
            </div>
            <div v-if="flagDel" class="check_right">
                <div class="total_prices">
                    <div class="cope_with">
                        应付:
                        <span>{{totalPrice-favorable}}</span>
                    </div>
                    <div class="total_full">
                        总价:
                        <span>{{totalPrice}}</span>
                        优惠:
                        <span>{{favorable}}</span>
                    </div>
                </div>
                <div
                    :style="{background:(totalNum==0?'#cecece':'#77bc1f')}"
                    class="goto_settle"
                    @click="windUp"
                >
                    <span>去结算</span>
                    <span>({{totalNum}})</span>
                </div>
            </div>
            <div v-if="!flagDel" class="check_right">
                <div class="del" @click="deleteGoods()">删除</div>
            </div>
        </article>
        <!-- footer部分 -->
        <songshu-footer :goodsDits="totNumAll"></songshu-footer>
    </div>
</template>

<script>
import songshuCartsContent from "../components/songshuCarts/songshuCartsContent";
import songshuFooter from "../components/songshuFooter";
import {mapGetters} from "vuex"
export default {
    name: "songshuCarts",
    components: {
        "songshu-carts-content": songshuCartsContent,
        "songshu-footer": songshuFooter
    },
    data() {
        return {
            mycart: [],
            checkAll: false,
            favorable: 0,
            deletes: "编辑",
            flagDel: true
        };
    },
    methods: {
        //返回上一页
        back() {
            javascript: history.back(-1);
        },

        //点击全选，实现全选与全不选的切换
        changeColor() {
            this.checkAll = !this.checkAll;
            if (this.checkAll) {
                this.mycart.forEach(function(item, index) {
                    item.checked = true;
                });
            } else {
                this.mycart.forEach(function(item, index) {
                    item.checked = false;
                });
            }
        },

        //子页面触发单选， 都为选择则触发全选， 都为空则触发全不选
        getSingle() {
            let flag = true;
            for (let i = 0; i < this.mycart.length; i++) {
                if (!this.mycart[i].checked) {
                    flag = false;
                    this.checkAll = false;
                }
            }
            if (flag) {
                //单个的全部被选的情况
                this.checkAll = true;
            }
        },

        //点击加号的操作
        numPlus(index) {
            this.mycart[index].productCount++;
        },
        //点击减号的操作
        numReduce(index) {
            if (this.mycart[index].productCount > 1) {
                this.mycart[index].productCount--;
            }
        },

        //结算页面的跳转
        windUp() {
            if (this.checkAll) {
                location.href = "#"; //跳至结算页面
            }
        },

        //切换到删除界面的操作
        delGoods() {
            if (this.deletes == "编辑") {
                this.deletes = "完成";
                this.flagDel = false;
            } else {
                this.deletes = "编辑";
                this.flagDel = true;
            }
        },

        //删除商品的操作
        deleteGoods() {
            let flag = false;
            for (let i = 0; i < this.mycart.length; i++) {
                if (this.mycart[i].checked) {
                    flag = true;
                    this.mycart.splice(i, 1);
                    i--;
                }
            }
            if (flag == false) {
                alert("请选择要删除的商品");
            }
        }
    },
    computed: {
        //总数量的计算(选中状态)
        totalNum() {
            let num = 0;
            for (let i = 0; i < this.mycart.length; i++) {
                if (this.mycart[i].checked) {
                    num += this.mycart[i].productCount;
                }
            }
            return num;
        },

        //所有商品数量的计算
        totNumAll() {
            let num = 0;
            for (let i = 0; i < this.mycart.length; i++) {
                num += this.mycart[i].productCount;
            }
            return num;

        },
        //总价格的计算
        totalPrice() {
            let tot_pri = 0;
            for (let i = 0; i < this.mycart.length; i++) {
                if (this.mycart[i].checked) {
                    tot_pri +=
                        this.mycart[i].productCount * this.mycart[i].price1;
                }
            }
            return tot_pri.toFixed(2);
        },

        //mapGetters,把store中的getters中的事件的结合，map到组件的
        //computed属性上
        //mapGetters会订阅store 的变化
        // ...mapGetters({
        //     mycart:"getCartInfo"
        // })
    },
    watch: {
        mycart: {
            handler(newVal) {
                //改变之后，将值传递给后台
                let obj = { products: newVal, totNum: this.totNumAll };
                fetch("http://localhost:3000/goods/api/myGoods/change", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    body: JSON.stringify(obj)
                }).then(res => {
                    res.json().then(data => {});
                });

                this.Observer.$emit("change", obj);
            },
            deep: true,
            immediate: true
        }
    },

    created() {
        fetch("http://localhost:3000/goods/api/myGoods").then(res => {
            res.json().then(data => {
                this.mycart = data.products;
                this.getSingle(); //获取到数据之后，判断是否为全选状态
            });
        })
            this.Observer.$on("insertCart", req => {
                this.mycart = req.products;
            });
        // this.$store.dispatch("changeCartInfo");
        //
        // console.log(this.mycart);

    },
    beforeDestroy() {}
};
</script>

<style scoped>
.check {
    width: 0.36rem;
    height: 0.36rem;
    border: 1px solid black;
    border-radius: 50%;
}
.checked {
    border: none;
    background: url(../../public/img/carts/check.gif) 1px 1px;
}
article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.08rem;
    height: 0.9rem;
    border-top: 1px solid #dcdcdc;
}
.like_body {
    height: 100%;
    display: flex;
    flex-direction: column;
}
/* header部分 */
header {
    width: 100%;
    height: 0.86rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    font-size: 0.32rem;
}
header > .pre_page {
    margin-left: 0.24rem;
}
header .direct {
    font-size: 0.26rem;
    margin-right: 0.16rem;
}
/* CSS Document */

/* 圣杯 */
body {
    display: flex;
    flex-direction: column;
}
/* 结算部分 */
.check_full {
    display: flex;
    align-items: center;
}
.check_full > span {
    padding-left: 0.14rem;
}
.check_right {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.total_prices {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.total_prices .cope_with {
    font-size: 0.24rem;
    color: black;
    display: flex;
}
.total_prices .cope_with > span {
    color: #ee2e52;
    padding: 0 0.12rem;
}
.total_full {
    display: flex;
    font-size: 0.24rem;
    color: #999999;
}
.total_full > span {
    padding: 0 0.12rem;
}

.goto_settle {
    margin-left: 0.04rem;
    width: 2.02rem;
    height: 100%;
    background: #77bc1f;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.goto_settle > span:nth-child(1) {
    font-size: 0.36rem;
}
.goto_settle > span:nth-child(2) {
    font-size: 0.24rem;
}

/* 免运费部分 */
figure {
    padding: 0 0.18rem;
    width: 100%;
    height: 0.66rem;
    display: flex;
    justify-content: space-between;
    background: #f9c0cb;
    opacity: 0.6;
    align-items: center;
}
figure > span:first-child {
    color: white;
    font-size: 0.3rem;
}
figure > span:last-child {
    color: black;
    font-size: 0.24rem;
    display: flex;
    align-items: center;
}
figure .gt {
    font-size: 0.22rem;
    line-height: 0.22rem;
    width: 0.24rem;
    height: 0.24rem;
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
}
.del {
    width: 1.28rem;
    border: 0.06rem solid #efb7c4;
    border-radius: 0.06rem;
    text-align: center;
    line-height: 0.48rem;
    color: #efb7c4;
    font-size: 0.24rem;
}
</style>



