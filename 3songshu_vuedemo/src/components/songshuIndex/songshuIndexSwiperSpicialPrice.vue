<template >
    <div class="swiper-container swiper-container_1">
        <div class="swiper-wrapper swiper-wrapper_1">
            <div class="swiper-slide swiper-slide_1" v-for="(item,index) in goodsIndex.special">
                <a href="#">
                    <img :src="item.pic" alt="无法加载该图片">
                    <div>
                        仅剩
                        <i>{{arr[index].totDay}}</i>天
                        <i>{{arr[index].remHour}}</i>小时
                        <i>{{arr[index].remMin}}</i>分
                        <i>{{arr[index].remSec}}</i>秒
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>


<script>
import Swiper from "swiper/dist/js/swiper";
export default {
    name: "songshuIndexSwiperSpacialPrice",
    data() {
        return {
            arr: [
                { totDay: 0, remHour: 0, remMin: 0, remSec: 0 },
                { totDay: 0, remHour: 0, remMin: 0, remSec: 0 },
                { totDay: 0, remHour: 0, remMin: 0, remSec: 0 },
                { totDay: 0, remHour: 0, remMin: 0, remSec: 0 }
            ]
        };
    },
    mounted() {
        // banner部分的轮播图
        setTimeout(
            new Swiper(".swiper-container_1", {
                observer: true, //动态获取资源时，需要加上这一句
                direction: "horizontal", //水平
                loop: false, //循环
                autoplay: {
                    autoplayDisableOnInteraction: false //自动播放不会被滑动停止true
                } 
            }),
            100
        );
    },
    beforeUpdate() {},
    props: ["goodsIndex"],
    created() {
        this.init();
    },
    methods: {
        init() {
            let that = this;
            setInterval(function() {
                that.arr = that.goodsIndex.special.map(function(item, index) {
                    return that.remTime(item.deadlineDate);
                });
            }, 1000);
        },
        remTime(deadline) {
            var deadlineDate = new Date(deadline); //截至日期
            var nowDate = new Date(); //当前日期
            var diffSeconds = parseInt(
                (deadlineDate.getTime() - nowDate.getTime()) / 1000
            );
            //相差的秒数
            var totDay = Math.floor(diffSeconds / (3600 * 24)); //相差的天数，取整
            var remanentTotSec = diffSeconds % (3600 * 24); //剩余的总秒数
            var remHour = Math.floor(remanentTotSec / 3600); //剩余的 时
            var remMin = Math.floor((remanentTotSec % 3600) / 60); //剩余的 分钟
            var remSec = (remanentTotSec % 3600) % 60; //剩余的 秒数
            return { totDay, remHour, remMin, remSec };
        }
    }
};
</script>

<style scoped>
@import "~swiper/dist/css/swiper.css";
/* 中间限时抢购部分 */
.swiper-container_1 {
    width: 100%;
    height: 100%;
}

a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 5.4rem;
    height: 3.74rem;
    margin: 0.1rem 0.15rem 0.3rem;
}

a div {
    position: absolute;
    width: 3.78rem;
    height: 0.46rem;
    border-radius: 0.23rem;
    box-shadow: 0rem 0.03rem 0.01rem 0.01rem #dedede;
    border-bottom: 1px solid #dedede;
    text-align: center;
    line-height: 0.46rem;
    font-size: 0.28rem;
    color: #363636;
    background-color: white;
    left: 50%;
    margin-left: -1.89rem;
    bottom: 0.1rem;
}
</style>
