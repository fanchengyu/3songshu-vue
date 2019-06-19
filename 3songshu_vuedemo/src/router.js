import Vue from 'vue'
import Router from 'vue-router'
//引入页面级组件
import songshuIndex from './pages/songshuIndex'
import songshuGoodsList from './pages/songshuGoodsList'
import songshuSquirrelCurrency from './pages/songshuSquirrelCurrency'
import songshuCarts from './pages/songshuCarts'
import songshuMine from './pages/songshuMine'
import songshuLogin from './pages/songshuLogin'
import songshuRegister from './pages/songshuRegister'
import songshuLittleClass from './pages/songshuLittleClass.vue'
import songshuLeave from './pages/songshuLeave.vue'
import Test from  './pages/Test.vue'


//设置路由
Vue.use(Router)

const router= new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    // linkExactActiveClass:"a",
    routes: [
        {
            path: '/',
            name: 'songshuIndex',
            component: songshuIndex
        },
        {
            path: '/goods_list',
            name: 'songshuGoodsList',
            component: songshuGoodsList
        },
        {
            path: '/squirrel_currency',
            name: 'songshuSquirrelCurrency',
            component: songshuSquirrelCurrency
        },
        {
            path: '/carts',
            name: 'songshuCarts',
            component: songshuCarts
        },
        {
            path: '/mine',
            name: 'songshuMine',
            component: songshuMine
        },
        {
            path: '/login',
            name: 'songshuLogin',
            component: songshuLogin
        },
        {
            path: '/register',
            name: 'songshuRegister',
            component: songshuRegister
        },
        {
            path: '/littleClass/:key',
            name: 'songshuLittleClass',
            component: songshuLittleClass
        },
        {
            path: '/logOut',
            name: 'songshuLeave',
            component: songshuLeave
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '*',  // 匹配没有注册的路由
            redirect: '/home'  //重定向
        },

    ]
});
// 全局路由守卫

router.beforeEach((to, from, next) => {
    // console.log('navigation-guards');
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    const nextRoute = ['/carts', '/mine']
    let isLogin=localStorage.getItem('username'); // 是否登录
    // 未登录状态；当路由到nextRoute指定页时，跳转至login
    if (nextRoute.indexOf(to.path) >= 0) {
        if (!isLogin) {
            router.push({ name: 'songshuLogin' }) //如果没，则跳转至登录页面
        }
    }
    // 已登录状态；当路由到login时，跳转至home
    if (to.path === '/login') {
        if (isLogin) {
            router.push({ name: 'songshuMine' });
        }
    }
    next();
});

export default router;
