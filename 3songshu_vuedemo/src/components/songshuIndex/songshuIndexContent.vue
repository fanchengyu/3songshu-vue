<template>
        <div class="eve_section" >
            <songshu-index-pic :titPic="goods.bigImg"></songshu-index-pic>
            <songshu-index-content-eve v-for="(item1,index1) in goods.middleClass" :product="item1"></songshu-index-content-eve>
        </div>
</template>

<script>
import songshuIndexPic from "./songshuIndexPic";
import songshuIndexContentEve from "./songshuIndexContentEve";
export default {
    name: "songshuIndexContent",
    components: {
        "songshu-index-pic": songshuIndexPic,
        "songshu-index-content-eve": songshuIndexContentEve
    },
    data() {
        return {
            currentName: ""
        };
    },
    props: ["goods"]
};
</script>
<style scoped>

</style>

