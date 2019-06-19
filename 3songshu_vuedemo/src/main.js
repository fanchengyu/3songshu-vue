import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Observer from "./Observer";
import Vuex from "vuex";
import store from "./store/index";  //导入仓库
Vue.prototype.Observer = Observer;
Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  router,
  store,//注册仓库
  render: h => h(App)
}).$mount('#app')



