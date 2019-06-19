<template>
    <div class="like_body">
        <header>
            <a class="back" @click="back"><</a>
            <a href="/login" class="eat_search">好吃的零食都在这~</a>
            <a href="/login" class="search">搜索</a>
        </header>
        <songshu-index-content-eve-body :eve="info_Img"></songshu-index-content-eve-body>
    </div>
</template>

<script>
import songshuIndexContentEveBody from "../components/songshuIndex/songshuIndexContentEveBody";

export default {
    name: "songshuLittleClass",
    components: {
        "songshu-index-content-eve-body": songshuIndexContentEveBody
    },
    data() {
        return {
            info_Img: "",
        }
    },
    methods: {
        back() {
            history.go(-1);
        }
    },
    created() {
        fetch("http://localhost:3000/goods/api/goodsIndex").then(res => {
            res.json().then(data => {
                for (let i = 0; i < data.menus.length; i++) {
                    for (let j = 0; j < data.menus[i].middleClass.length; j++) {
                        if (
                            data.menus[i].middleClass[j].middleId ==
                            this.$route.params.key
                        ) {
                             this.info_Img= data.menus[i].middleClass[j].products;
                        }
                    }
                }
            });
        });
    },
};
</script>

<style scoped>
header {
    z-index: 2;
    background: white;
    height: 1rem;
    width: 100%;
    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
}
header img {
    width: 0.4rem;
    height: 0.6rem;
    margin: 0 0.2rem;
}
header .back {
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.36rem;
}
header .eat_search {
    flex: 1;
    height: 0.6rem;
    background: url(../../public/img/icon-search-black@2x.d236cbe5.png) 0.08rem
        0.14rem no-repeat #e8ecef;
    border-radius: 0.06rem;
    background-size: 0.25rem 0.25rem;
    line-height: 0.6rem;
    text-indent: 0.5rem;
}
.search {
    margin: 0 0.2rem;
}
.like_body{
    display:flex;
    flex-direction: column;
    height:100%;
}
songshu-index-content-eve-body{
    overflow-y: auto;
}
</style>


