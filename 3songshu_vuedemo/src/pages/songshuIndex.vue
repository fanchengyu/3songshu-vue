<template>
    <!-- header部分 -->
    <div class="like_body">
        <header>
            <a href="/login">
                <img src="../../public/img/icon-scan-black@2x.85b68805.png" alt>
            </a>
            <a href="/login" class="eat_search">好吃的零食都在这~</a>
            <a href="/login">
                <img src="../../public/img/icon-chat-black@2x.a4950c6d.png" alt>
            </a>
        </header>
        <!-- 圣杯布局 -->
        <div class="grail">
            <!-- banner部分 -->
            <!-- 轮播图 -->
            <songshu-index-swiper-banner :goodsIndex="goodsIndex"></songshu-index-swiper-banner>
            <!-- nav部分 -->
            <nav>
                <ul>
                    <li v-for="(item,index) in foodClass" @click="changeNav(item)">
                        <span :class="{nav_active:currentId==item.bigId}">{{item.name}}</span>
                        <img :src="item.gitUrl" alt>
                    </li>
                </ul>
            </nav>
            <!-- section部分 -->
            <section>
                <!-- 八块导航栏对应的八块section -->

                <!-- section 第一板块 推荐 -->
                <div class="eve_section recommend" v-if="currentId=='0'">
                    <!-- 注册享受400元红包 -->
                    <songshu-index-pic :titPic="titPic[0]"></songshu-index-pic>

                    <!-- 两排红色点击按钮 -->
                    <div class="time_be">
                        <a href="#" v-for="(item,index) in redBtn" :key="item.id">
                            <img :src="item.pic" alt="无法加载该图片">
                        </a>
                    </div>
                    <!-- 三条商品展示 -->
                    <div class="new_pro">
                        <a href="#" v-for="(item,index) in goodsIndex.hotProduct" :key="item.id">
                            <img :src="item.pic" alt="无法加载该图片">
                        </a>
                    </div>
                    <!-- 特价专场 -->
                    <songshu-index-title :tit="tit[0]"></songshu-index-title>
                    <!-- 特价专场轮播图 -->
                    <div class="new_banner">
                        <!-- 轮播图 -->
                        <songshu-index-swiper-spicial-price :goodsIndex="goodsIndex"></songshu-index-swiper-spicial-price>
                    </div>
                    <!-- 限时专享 -->
                    <div class="spike">
                        <a class="spike_left" href="#" target="_blank">
                            <p>
                                <i></i>
                                <span>秒杀</span>
                            </p>
                            <p>距离秒杀结束</p>
                            <p>
                                <span> {{day}}</span>天
                                <span> {{hour}}</span>:
                                <span> {{minites}}</span>:
                                <span> {{seconds}}</span>
                            </p>
                        </a>
                        <div class="spike_right">
                            <!-- 轮播图 -->
                            <songshu-index-spike-right :goodsIndex="goodsIndex"></songshu-index-spike-right>
                            <!-- 轮播图 -->
                        </div>
                    </div>
                    <!-- 本周卖的最好的十款零食 -->
                    <songshu-index-title :tit="tit[1]"></songshu-index-title>
                    <div class="this_week">
                        <a href="#" v-for="(item,index) in goodsIndex.thisWeek" :key="item.id">
                            <img :src="item.pic" alt>
                        </a>
                    </div>
                    <!-- 昨日卖的最好的20款商品 -->
                    <!-- <songshu-index-title :tit="tit[2]"></songshu-index-title>
                    <songshu-index-content-eve-body
                        :eve="goodsIndex.menus[1].middleClass[0].products"
                    ></songshu-index-content-eve-body> -->

                    <!-- 大家正在热评的零食 -->
                    <!-- <songshu-index-title :tit="tit[3]"></songshu-index-title>
                    <songshu-index-content-eve-body
                        :eve="goodsIndex.menus[1].middleClass[3].products"
                    ></songshu-index-content-eve-body> -->
                </div>

                <!-- 板块二-七 -->
                <songshu-index-content
                    v-for="(item,index) in goodsIndex.menus"
                    :goods="item"
                    v-if="currentId==item.bigId"
                ></songshu-index-content>
            </section>
        </div>
        <!-- footer部分 --><!--:goodsDits="totNumAll">-->
        <songshu-footer :goodsDits="totNum"> </songshu-footer>
        <!-- 右下角的按钮 -->
        <div class="but_r_b">
            <i class="return_r_b" @click="toTop"></i>
            <a class="serch_a" href="register.html" target="_blank">
                <i class="search_r_b"></i>
            </a>
            <a href="#" target="_blank">
                <i class="shopping_r_b"></i>
            </a>
        </div>
    </div>
</template>


<script>
import songshuIndexSwiperBanner from "../components/songshuIndex/songshuIndexSwiperBanner";
import songshuFooter from "../components/songshuFooter";
import songshuIndexTitle from "../components/songshuIndex/songshuIndexTitle";
import songshuIndexPic from "../components/songshuIndex/songshuIndexPic";
import songshuIndexSwiperSpicialPrice from "../components/songshuIndex/songshuIndexSwiperSpicialPrice";
import songshuIndexSpikeRight from "../components/songshuIndex/songshuIndexSpikeRight";
import songshuIndexContent from "../components/songshuIndex/songshuIndexContent";
import songshuIndexContentEveBody from "../components/songshuIndex/songshuIndexContentEveBody";

export default {
    name: "songshuIndex",
    components: {
        "songshu-footer": songshuFooter,
        "songshu-index-swiper-banner": songshuIndexSwiperBanner,
        "songshu-index-title": songshuIndexTitle,
        "songshu-index-pic": songshuIndexPic,
        "songshu-index-swiper-spicial-price": songshuIndexSwiperSpicialPrice,
        "songshu-index-spike-right": songshuIndexSpikeRight,
        "songshu-index-content": songshuIndexContent,
        "songshu-index-content-eve-body": songshuIndexContentEveBody
    },
    data() {
        return {
            goodsIndex: {},
            foodClass: [
                { name: "推荐", gifUrl: "", bigId: "0" },
                { name: "坚果/炒货", gitUrl: "", bigId: "1" },
                {
                    name: "果干/蜜饯",
                    bigId: "2",
                    gitUrl: "./img/dcbf5ff0a373baf8adc80df2c7ddba73.gif"
                },
                { name: "肉类/熟食", gitUrl: "", bigId: "3" },
                {
                    name: "饼干/鹏华",
                    bigId: "4",
                    gitUrl: "./img/6762bbfa218313c245ffa4eb4b16e6dc.gif"
                },
                { name: "糕点/点心", gitUrl: "", bigId: "5" },
                { name: "冲泡/茶饮", gitUrl: "", bigId: "6" },
                {
                    name: "礼盒/礼品",
                    bigId: "7",
                    gitUrl: "./img/6762bbfa218313c245ffa4eb4b16e6dc.gif"
                }
            ],
            currentName: "推荐",
            currentId: "0",
            redBtn: [
                { pic: "./img/5ff86cf37755868490cd61663bd39e64.gif" },
                { pic: "./img/dc45d10d1848d1165f58dd76f030462d.gif" },
                { pic: "./img/c50630112873bc74eba5e8bfaa060f2d.gif" },
                { pic: "./img/fac9674b7025841a16a0aaf606b08672.jpg" },
                { pic: "./img/19db782610a73688576e9a3033befe4e.gif" },
                { pic: "./img/03f900813ba8e3c7153d97ba0e6f6563.gif" },
                { pic: "./img/a714951e4650c3f455fcfc7dfa7603f3.gif" },
                { pic: "./img/f112f722ef0bcb7f929a8eacedf5053d.jpg" }
            ],
            titPic: [
                "./img/160dbc85da38d1a9718fadf91edb749c.gif",
                "./img/199b81727a1d2f11cba23b46158288e5.jpg",
                "./img/d5a352bd60454a811c21fd0e23c14d21.jpg",
                "./img/25721d35d435fc0c2b5b00e483072c36.jpg",
                "./img/ebff208b318ab7f30909773472feb934.jpg",
                "./img/081e910dc9ae80e220af66095b2a3b56.jpg",
                "./img/bdd9f65c479d9cec3972e84b8ed374ca.jpg",
                "./img/16f84c9656a11ec16d85d65ee3faa64a.jpg"
            ],
            tit: [
                "特价专场",
                "本周卖的最好的10款零食",
                "昨日卖的最好的20款商品",
                "大家正在热评的零食",
                "热卖爆款",
                "带壳坚果",
                "坚果果仁",
                "果干专区",
                "新疆正品",
                "肉食爆款",
                "啃出好味道",
                "牛人牛味",
                "肉脯集散地",
                "海鲜馈赠",
                "明星爆款",
                "缤纷零食",
                "发现好零食",
                "元气早餐",
                "活力下午茶",
                "深夜食堂",
                "森林的礼物",
                "时尚潮礼",
                "热卖爆款",
                "主人最爱"
            ],
            hour:null,
            minites:null,
            seconds:null,
            day:null,
            totNum:''
        }
    },
    created() {
        fetch("http://localhost:3000/goods/api/goodsIndex").then(res => {
            res.json().then(data => {
                this.goodsIndex = data;
            });
        });
        setInterval(this.remTime,1000);
        this.Observer.$on("insertCart", req=>{
             this.totNum=req.totNum;
        });
    },
    methods: {
        changeNav(item) {
            this.currentName = item.currentName;
            this.currentId = item.bigId;
        },
        toTop() {
            $(".grail").scrollTop(0);
        },
        begin() {},
        remTime() {
            var deadlineDate = new Date(this.goodsIndex.seckill); //截至日期
            var nowDate=new Date();//当前日期
            var diffSeconds = parseInt(
                (deadlineDate.getTime() - nowDate.getTime()) / 1000
            );
            //相差的秒数
            var totDay = Math.floor(diffSeconds / (3600 * 24)); //相差的天数，取整
            var remanentTotSec = diffSeconds % (3600 * 24); //剩余的总秒数
            var remHour = Math.floor(remanentTotSec / 3600); //剩余的 时
            var remMin = Math.floor((remanentTotSec % 3600) / 60); //剩余的 分钟
            var remSec = (remanentTotSec % 3600) % 60; //剩余的 秒数
            this.hour= remHour;
            this.minites=remMin;
            this.seconds=remSec;
            this.day=totDay;
            // return { totDay, remHour, remMin, remSec };
        },
    },
};
</script>



<style scoped>
.like_body {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.grail {
    flex: 1;
    overflow-y: auto;
}
header {
    z-index: 2;
    background: white;
    height: 0.7rem;
    width: 100%;
    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
}
header img {
    width: 0.4rem;
    height: 0.4rem;
    margin: 0 0.2rem;
}
header .eat_search {
    flex: 1;
    height: 0.4rem;
    background: url(../../public/img/icon-search-black@2x.d236cbe5.png) 0.12rem
        0.08rem no-repeat #e8ecef;
    border-radius: 0.06rem;
    background-size: 0.25rem 0.25rem;
    line-height: 0.4rem;
    text-indent: 0.5rem;
}

/* nav部分 */
nav {
    top: 0;
    left: 0;
    background: white;
}
nav > ul {
    display: -webkit-flex;
    -webkit-flex-wrap: nowrap;
    overflow-x: auto;
    height: 0.8rem;
    border-bottom: 0.1rem solid #f9f9f9;
}
nav > ul > li {
    display: -webkit-flex;
    -webkit-flex-shrink: 0;
    padding: 0 0.16rem;
    font-size: 0.24rem;
    color: #262626;
    position: relative;
    line-height: 0.8rem;
    /* background-image: url(../../public/img/li.gif);
    background-position: */
}
nav > ul > li > img {
    width: 0.28rem;
    height: 0.28rem;
    position: absolute;
    right: -0.02rem;
    top: 0.04rem;
}

li > .nav_active {
    border-bottom: 0.04rem solid #77bc1f;
}
/* section部分 */
section {
    overflow-y: auto;
}
/* 八块导航栏对应的八块section */

/* 两排红色按钮 */
.time_be > a > img {
}
.time_be {
    flex-wrap: wrap;
    display: -webkit-flex;
    -webkit-justify-content: center;
}
/* 三条商品展示 */
.new_pro {
    border-top: 0.1rem solid #f9f9f9;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
}
.new_pro > a {
    width: 33.33%;
}
.new_pro > a > img {
    width: 100%;
}
/* 特价专场 */

/* 特价专场轮播图 */
.new_banner {
    height: 4.16rem;
    border-bottom: 0.1rem solid #f9f9f9;
}

/* 限时专享 */
.spike {
    height: 3.03rem;
    display: flex;
}
.spike > .spike_left {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(../../public/img/icon-index-flash-sale@2x.1b7597b2.png) left
        top no-repeat;
}
.spike_left > p:first-child {
    display: flex;
}
.spike_left > p:first-child > i {
    width: 0.4rem;
    height: 0.4rem;
    background: url(../../public/img/icon-flash-sale@2x.b8fa8377.png) no-repeat;
    background-size: 0.4rem 0.4rem;
}
.spike_left > p:first-child > span {
    font-size: 0.4rem;
    color: #ef3e60;
}
.spike_left > p:nth-child(2) {
    color: #262626;
    font-size: 0.24rem;
    line-height: 0.5rem;
}
.spike_left > p:last-child {
    display: flex;
    font-size: 0.32rem;
    font-weight: 900;
}
/* 限时专享轮播图 */
.spike > .spike_right {
    width: 40%;
    display: flex;
    overflow-x: auto;
}

/* 本周卖的最好的TOP10 */
.this_week {
}
.this_week > a > img {
    width: 100%;
}
/* 昨日卖的最好的20件 */

/* 热评的食物 */
.hot_eve .comment {
    font-size: 0.24rem;
    color: #777777;
    /* display: flex; */
    line-height: 0.58rem;
    border-top: 1px solid #dddddd;
    text-indent: 0.12rem;
}
.comment > i:first-child {
    color: #8bc640;
}
.hot_eve .new_right {
    top: 4.32rem;
}
</style>

