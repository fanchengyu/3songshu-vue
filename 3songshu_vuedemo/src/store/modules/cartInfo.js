export default {
    state:{
        cartInfo:[]  //创建一个共享的状态
    },
    mutations:{
        //修改状态，给cartInfo赋值
        updateCartInfo(state,data){
            state.cartInfo=data;
        }
    },

    actions:{
        //dispatch 接收组件的dispatch
        changeCartInfo(store,payload){
            fetch("http://localhost:3000/goods/api/myGoods").then(res => {
                res.json().then(data => {
                    store.commit("updateCartInfo",data.products); //提交给mutations数据
                    //这里的第二个参数即就是传递给mutitions里面的第二个参数data
                });
            })
        }
    },
    getters:{
        //事件，用来获取最新的动态
        getCartInfo(state){
            return state.cartInfo;
        }
    }
}


// export default {
//     state:{
//         cartInfo:{}  //创建一个共享的状态
//     },
//     mutations:{
//         //修改状态，把cartinfo进行赋值
//         INITDATA(state,data){
//             console.log("#2 INITDATA")
//             state.cartInfo = data;
//         }
//     },
//     actions:{
//         //dispatch 接收组件 的dispatch
//         INITCART(store,payload){
//             console.log("#1 INITCART")
//             cartApi.getCartByUserId((data)=>{
//                 store.commit("INITDATA",data)
//             })
//         }
//     },
//     getters:{
//         //事件，用来获取最新的状态
//         GETCARTINFO(state){
//             return state.cartInfo
//         }
//     }
// }
