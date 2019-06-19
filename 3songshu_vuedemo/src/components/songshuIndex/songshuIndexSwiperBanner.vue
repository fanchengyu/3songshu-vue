<template >
    <div class="swiper-container swiper-container_0">
        <div class="swiper-wrapper swiper-wrapper_0">
            <div class="swiper-slide swiper-slide_0" v-for="(item,index) in goodsIndex.swiperTop">
                <a
                    href="http://m.3songshu.com/#/tabs/index/article?id=100116412&title=%E6%9D%BE%E9%BC%A0%E6%96%B0%E4%BA%BA%E4%B8%93%E5%8C%BA"
                >
                    <img :src=item.pic alt>
                </a>
            </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination swiper-pagination_0"></div>
    </div>
</template>


<script>
    import Swiper from 'swiper/dist/js/swiper';
    export default {
        name: "songshuIndexSwiperBanner",
        mounted() {
            // banner部分的轮播图
            new Swiper(".swiper-container_0", {
                observer:true , //动态获取资源时，需要加上这一句
                direction: "horizontal",//水平
                // loop:true, //循环
                autoplay:{
                    autoplayDisableOnInteraction:false, //自动播放不会被滑动停止true
                }, //自动播放
                // 如果需要分页器
                pagination: {
                    el: ".swiper-pagination_0"
                },
            });
        },
        props:["goodsIndex"],
       
    };
</script>

<style >
@import "~swiper/dist/css/swiper.css";
/* banner部分 */
.swiper-container_0 {
    width: 7.5rem;
    height: 4.65rem;
}
.swiper-slide_0 img {
    width: 7.5rem;
    height: 4.65rem;
}

.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin:0 .04rem;
}

.swiper-pagination-bullet{
width: .18rem;
height: .04rem;
display: inline-block;
border-radius: .02rem;
background: white;
opacity: 0.2;
}

.swiper-pagination-bullet-active {
    opacity: 1;
    background: white;
}
.swiper-container_0 .swiper-pagination-bullets {
    bottom: 10px;
    left: 3.13rem;
    width: 100%;
}
</style>




