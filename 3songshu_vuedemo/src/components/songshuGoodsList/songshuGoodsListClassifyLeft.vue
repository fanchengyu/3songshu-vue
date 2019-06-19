<template>
    <aside>
        <div
            :class="{active:currentName==item.bigName}"
            @click="changeColor(item,index)"
            v-for="(item,index) in getGoodsList"
        >{{item.bigName}}</div>
    </aside>
</template>

<script>
export default {
    name: "songshuGoodsListClassifyLeft",
    props:['getGoodsList'],
    data() {
        return {
            currentName: "坚果炒货"
        };
    },
    created() {},
    methods: {
        changeColor(item, index) {
            this.currentName = item.bigName;
            if (index == 1) {
                $("aside").scrollTop(146);
            }
            if (index > 1) {
                $("aside").scrollTop(292);
            }
            this.Observer.$emit("getBigId", item.bigId);
        }
    }
};
</script>

<style scoped>
</style>