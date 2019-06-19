<template>
    <div>
        <songshu-index-title :tit="product.middleName"></songshu-index-title>
        <songshu-index-content-eve-body  :eve="product.products"></songshu-index-content-eve-body>
    </div>
</template>


<script>
import songshuIndexTitle from './songshuIndexTitle'
import songshuIndexContentEveBody from './songshuIndexContentEveBody'
export default {
    name:"songshuIndexContentEve",
    components:{
        "songshu-index-title":songshuIndexTitle,
        "songshu-index-content-eve-body":songshuIndexContentEveBody
    },
    props:["product"]
}
</script>

<style>

</style>
