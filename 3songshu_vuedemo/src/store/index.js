import Vue from "vue"

import  Vuex  from "vuex"

//cartInfo 是一个模块

import cartInfo  from  "./modules/cartInfo"

Vue.use(Vuex)

let  store =new Vuex.Store({
    modules:{
        cartInfo
    }
})

export default store




