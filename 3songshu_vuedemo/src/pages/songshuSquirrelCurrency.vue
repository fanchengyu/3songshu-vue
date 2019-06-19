<template>
    <div class="like_body">
        <!-- header部分 -->
        <header>松鼠币商城</header>
        <div class="grail">
            <!-- 签到部分 -->
            <hgroup>
                <a href="#">
                    <p>我的松鼠币</p>
                    <h2>{{mySquirrelCoins}}</h2>
                    <p>{{isLogin}}</p>
                </a>
                <router-link  :to="path">
                    {{loginAndEarn}}
                </router-link>
                <!-- <a href="#"></a> -->
                <div v-if="flag" class="sign_in">签到</div>
            </hgroup>

            <!-- 购物袋部分 -->
            <figure>
                <a href="#">
                    <i></i>
                    <div>
                        <p>购物袋</p>
                        <p>想要的都在这儿</p>
                    </div>
                </a>
                <a href="#">
                    <i></i>
                    <div>
                        <p>我的兑换</p>
                        <p>查看松鼠币兑换订单</p>
                    </div>
                </a>
            </figure>

            <!-- 兑换中心 -->
            <section>
                <div class="convertion_top">
                    <i></i>
                    <span>兑换中心</span>
                </div>
                <div class="convertion_content">
                    <songshu-squirrel-currency-social :push="goods_squirrel_currency_all"></songshu-squirrel-currency-social>
                </div>
            </section>
            <!-- 新品尝鲜 -->
            <article>
                <div class="fresh_top">
                    <img
                        src="../../public/img/squirrel_currency/59946be4ef6fec8bfd0e072e2c5f364b.jpg"
                        alt
                    >
                </div>
                <div class="fresh_content">
                    <songshu-squirrel-currency-new :push="goods_squirrel_currency_all"></songshu-squirrel-currency-new>
                </div>
            </article>
        </div>

        <!-- footer部分 -->
        <songshu-footer></songshu-footer>
        <!-- 右下角的按钮 -->
        <div class="but_r_b">
            <i class="return_r_b" @click="goTop()"></i>
            <a href="#">
                <i class="shopping_r_b"></i>
            </a>
        </div>
    </div>
</template>

<script>
import songshuSquirrelCurrencySocial from "../components/songshuSquirrelCurrency/songshuSquirrelCurrencySocial";
import songshuSquirrelCurrencyNew from "../components/songshuSquirrelCurrency/songshuSquirrelCurrencyNew";
import songshuFooter from "../components/songshuFooter";
export default {
    name: "songshuSquirrelCurrency",
    components: {
        "songshu-squirrel-currency-social": songshuSquirrelCurrencySocial,
        "songshu-squirrel-currency-new": songshuSquirrelCurrencyNew,
        "songshu-footer": songshuFooter
    },
    data() {
        return {
            goods_squirrel_currency_all: "",
            mySquirrelCoins: 0,
            isLogin: "松鼠好礼等你拿~", //"签到随机奖励 主人快来拼手气吧","连续签到1天 主任明天再来试试运气"
            loginAndEarn: "登录/注册", //赚松鼠币
            flag: false ,//登录之后变为true   签到      已签到
            path:"/login"
        };
    },
    created() {
        fetch("http://localhost:3000/goods/api/goodsSquirrelCurrency").then(
            res => {
                res.json().then(data => {
                    this.goods_squirrel_currency_all = data;
                });
            }
        ),
            this.Observer.$on("getSection", req => {
                this.flag = req;
            });
    },
    methods:{
        goTop(){
            $('.grail').scrollTop(0);
        }
    }
};
</script>
<style scoped>
.like_body {
    height: 100%;
    display: flex;
    flex-direction: column;
}


/* 右下角按钮 */
 /* 与首页不同,有两个按钮 */
  .but_r_b{
    /* display:none; */
    width:.7rem;
    height:1.6rem;
    flex-direction: column;
    justify-content: space-between;
    position:fixed;
    right:.2rem;
    bottom:1.68rem;
}

/* header部分 */
header{
    height:.87rem;
    line-height: .87rem;
    text-align: center;
    border-bottom:1px solid #e4e4e4;
    color:#000000;
    font-size:.34rem;
}
</style>


