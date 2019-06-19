<template>
    <div>
        <h2>该页面用于测试</h2>
        <button @click="await()">测试</button>
    </div>

</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "Test",
        created() {
            this.$store.dispatch("changeCartInfo");
        },
        computed:{
            //mapGetters,把store中的getters中的事件的结合，map到组件的
            //computed属性上
            //mapGetters会订阅store 的变化
            ...mapGetters({
                mycart:"getCartInfo"
            })
        },
        methods:{
            await(){
                console.log(this.mycart);
            }
        }


    }
</script>

<style scoped>

</style>