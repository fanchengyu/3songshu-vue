<template>
    <div class="swiper-container swiper-container_2">
        <div class="swiper-wrapper swiper-wrapper_2">
            <div
                v-for="(item, index ) in goodsIndex.spikeRight"
                :key="item.id"
                class="swiper-slide swiper-slide_2"
            >
                <a href="#" class="banner_new_2">
                    <img :src="item.pic" alt="无法加载在图片">
                    <p>{{item.name}}</p>
                    <p>
                        <span>{{item.currentPrice}}</span>
                        <s>{{item.prePrice}}</s>
                    </p>
                    <div class="new_right"></div>
                </a>
            </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination swiper-pagination_2"></div>
    </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper";
export default {
    name: "songshuIndexSpikeRight",
    mounted() {
        // banner部分的轮播图
        new Swiper(".swiper-container_2", {
            observer: true, //动态获取资源时，需要加上这一句
            direction: "horizontal", //水平
            loop: false, //循环
            autoplay: {
                autoplayDisableOnInteraction: false //自动播放不会被滑动停止true
            }, //自动播放
            pagination: {
                el: ".swiper-pagination_0"
            }
        });
    },
    props: ["goodsIndex"]
};
</script>

<style scoped>
.banner_new_2 {
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.banner_new_2 {
    position: relative;
}

.banner_new_2 > p:nth-child(2) {
    font-size: 0.24rem;
    color: #262626;
    line-height: 0.4rem;
}
.banner_new_2 > p:nth-child(3) {
    display: flex;
    align-items: center;
}
.banner_new_2 > p:nth-child(3) > span {
    color: #ee2e52;
    font-size: 0.3rem;
    margin-right: 0.12rem;
}
.banner_new_2 > p:nth-child(3) > s {
    font-size: 0.24rem;
    color: #999999;
}
img {
    width: 1.64rem;
    margin: 0 0.4rem;
}
.swiper-container_2 {
    width: 100%;
    height: 100%;
}

</style>