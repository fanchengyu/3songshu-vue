<template>
    <div class="favorable">
        <div class="order_form" v-for="(item,index) in info_eve">
            <router-link :to="item.path">
                <div>
                    <img :src=item.pic alt>
                    <p>{{item.main}}</p>
                </div>
                <div >
                    <p>{{item.assist}}</p>
                    <span>></span>
                </div>
            </router-link>

        </div>
    </div>
</template>
<script>
export default {
    name: "songshuMineList",
    data() {
        return {
            info_eve: [
                {
                    pic: "./img/mine/icon-button-coupons@2x.ebeebeeb.png",
                    main: "我的优惠券",
                    assist: "7张",
                    path:"/login"
                },
                {
                    pic: "./img/mine/icon-button-recommended@2x.fe5b1976.png",
                    main: "推荐有奖",
                    assist: "",
                    path:"/login"
                },
                {
                    pic: "./img/mine/icon-button-service@2x.6e3737ce.png",
                    main: "在线客服",
                    assist: "",
                    path:"/login"
                },
                {
                    pic: "./img/mine/icon-button-help@2x.bdd2505d.png",
                    main: "帮助与反馈",
                    assist: "",
                    path:"/login"
                },
                {
                    pic: "./img/mine/icon-button-setting@2x.ba292163.png",
                    main: "设置",
                    assist: "关于我们",
                    path:"/logOut"
                }
            ]
        };
    }
};
</script>

<style  scoped>
    .favorable{
        flex:1;
    }
    .order_form a{
        width:100%;
        display:flex;
        justify-content: space-between;
    }

    /* 订单部分 */
    .order_form{
        width:100%;
        height:.88rem;
        margin-left:.2rem;
        border-bottom:1px solid #dddddd;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .order_form>a>div{
        display:flex;
    }

    .order_form img{
        width:.46rem;
        height:.46rem;
        margin-right:.24rem;
    }

    .order_form>a>div:first-child p{
        color:black;
        font-size:.32rem;
    }
    .order_form>a>div:last-child>p{
        color:#999999;
        font-size:.3rem;

    }
    .order_form>a>div:last-child>span{
        color:#999999;
        font-size:.32rem;
        padding:0 .26rem;
    }

</style>
