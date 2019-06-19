<template>
    <div class="special">
        <span></span>
        <span>{{tit}}</span>
    </div>
</template>

<script>
    export  default {
        name:"songshuIndexTitle",
        props:["tit"]
    }
</script>

<style scoped>
    .special {
        display: flex;
        height: 0.73rem;
        background: #f9f9f9;
        align-items: center;
    }
    .special > span:first-child {
        width: 0.24rem;
        height: 0.2rem;
        background: #77bc1f;
        margin-right: 0.12rem;
    }
    .special > span:last-child {
        font-size: 0.24rem;
        color: #262626;
    }
</style>