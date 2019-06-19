<template>
    <div class="like_body">
        <header class="one">
            <div class="pre_page" @click="back()"><</div>
            <p>设置</p>
        </header>

        <header class="two">
           <p>关于三只松鼠</p>
            <p>4.0.0 > </p>
        </header>

        <article>
            <div  @click="logOut()">退出当前账号</div>
        </article>
    </div>

</template>

<script>
    export default {
        name: "songshuLeave",
        data(){
            return{

            }
        },
        methods:{
            back(){
                history.go(-1);
            },
            logOut(){
                localStorage.removeItem('username');
                this.$router.push("/mine");
            }
        }
    }
</script>

<style scoped>
    .like_body{
        background:#f9f9f9;
        position:relative;
        height:100%;
    }
    /* header部分 */
    header {
        background:white;
        width: 100%;
        height: 0.86rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;
        font-size: 0.32rem;
    }
    header > .pre_page {
        margin-left: 0.24rem;
    }
    .one{
        margin-bottom:.2rem;
    }
    .one p{
        margin-right:45%;
    }
    .two p{
        padding:0 .4rem;
    }

    article > div:first-child {
        margin: 0.5rem 0.2rem 0.2rem;
        background: #76bc1e;
        width: 7.1rem;
        height: 0.82rem;
        line-height: 0.82rem;
        text-align: center;
        color: white;
        font-size: 0.32rem;
        border-radius: 0.08rem;
        position:absolute;
        bottom:.72rem;
    }
</style>