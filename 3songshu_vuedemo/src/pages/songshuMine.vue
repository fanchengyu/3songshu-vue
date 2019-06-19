<template>
    
<div class="like_body">
    <!-- header部分 -->
    <header>
        <a href="#"><img src="../../public/img/mine/efaf3354ea4fe38801583751df62059d.jpg" alt=""></a>
        <a>{{username}}</a>
        <a href="#">账户管理、收货地址 ></a>
        <div class="mask">
            <a href="#">
                <span>0</span>
                <span>我的收藏夹</span>
            </a>
            <a href="#">
                <span>
                    <i></i>
                    <i>240</i>
                </span>
                <span>
                    我的松鼠币
                </span>
            </a>
        </div>
    </header>

    <!-- 订单部分 -->
    <div class="order_form">
        <router-link :to="path">
            <div>
                <img src="../../public/img/mine/icon-button-order@2x.94521605.png" alt="">
                <p>我的订单</p>
            </div>
            <div>
                <p>查看全部订单</p>
                <span>></span>
            </div>
        </router-link>

    </div>

    <!-- 付款和物流 -->
    <div class="payment_logistics">
        <a href="#" v-for="(item,index) in payment">
            <img :src=item.pic alt="">
            <span>{{item.txt}}</span>
        </a> 
    </div>

    <!-- 优惠券和推荐奖 -->
    <!-- 客服与帮助 -->
    <songshu-mine-list></songshu-mine-list>

    <!-- footer部分 -->
    <songshu-footer></songshu-footer>
</div>
</template>


<script>
import songshuMineList from '../components/songshuMine/songshuMineList';
import songshuFooter from '../components/songshuFooter';
export default {
    name:"songshuMine",
    components:{
        "songshu-mine-list":songshuMineList,
        "songshu-footer":songshuFooter
    },
    data(){
        return{
            payment:[
            {
            pic:"./img/mine/icon-pending-payment@2x.0f90cd10.png",
            txt:"待付款"
            },
            {
            pic:"./img/mine/icon-to-be-shipped@2x.fda0a33e.png",
            txt:"待发货"
            },
            {
            pic:"./img/mine/icon-inbound@2x.6a1cc077.png",
            txt:"待收货"
            },
            {
            pic:"./img/mine/icon-need-remark@2x.da9440cf.png",
            txt:"待评价"
            },
            {
            pic:"./img/mine/icon-after-sale@2x.2f785614.png",
            txt:"退款/售后"
            } 
        ],
        username:"",
            path:'mine'
        }
    },
    created(){
        this.username=localStorage.getItem('username');
    }
}
</script>


<style scoped>
.like_body{
    display:flex;
    height:100%;
    flex-direction:column;
}
header{
    height:5.40rem;
    background: url(../../public/img/mine/user-bg.781439ad.jpg) ;
    background-size:  7.5rem  5.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
header>a{
    font-size:.3rem;
    color:white;
    line-height: .68rem;
}
header img{
    width:1.4rem;
    height:1.4rem;
    border-radius:50%;
}
header>a:first-child{
    width:1.4rem;
    height:1.4rem;
    border-radius:50%;
}
/* header上的遮罩层 */
header .mask{
    position:absolute;
    width:100%;
    display:flex;
    background:url(../../public/img/mine/shu.gif) 50%  50%  no-repeat rgba(0,0,0,0.3);
    height:1rem;
    bottom:0;
    border-bottom:.02rem solid #f9f9f9;
}
.mask>a{
    color:white;
    font-size:.3rem;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width:50%;
}
.mask>a:last-child>span:first-child{
    display:flex;
    align-items: center;
}
.mask>a:last-child>span:first-child>i:first-child{
    display:block;
    width:.28rem;
    height:.28rem;
    background: url(../../public/img/mine/icon-nut-white@2x.844b41a5.png);
}


/* 付款和物流 */
.payment_logistics{
    height:1.36rem;
    display:flex;
    align-items: center;
    justify-content: space-around;
}
.payment_logistics a{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.payment_logistics img{
    width:.46rem;
    height:.36rem;
}
.payment_logistics span{
    color:#999999;
    font-size:.30rem;
    margin-top:.1rem;
}
/* 优惠卷和推荐奖 */
.order_form_last{
    border-bottom:none;
}
/* 帮助与设置 */
.help{
    border-top:.1rem solid #f9f9f9;
    border-bottom:.2rem solid #f9f9f9;
    flex:1;
}
</style>


