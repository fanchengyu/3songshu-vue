
<template>
     <a href="#" target="_blank">
                        <img :src=titPic alt>
                    </a>
</template>

<script>
    export default{
        name:"songshuIndexPic",
        props:["titPic"]
    }
</script>

<style scoped>
   img {
        width: 100%;
        height: 2.26rem;
    }
</style>
