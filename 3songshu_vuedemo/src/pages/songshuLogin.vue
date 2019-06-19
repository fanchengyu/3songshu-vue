<template>
    <!-- header部分 -->
    <div class="like_body">
        <header>
            <span class="back" @click="back()"><</span>
            <span>登录</span>
        </header>

        <!-- banner部分 -->
        <div class="banner">
            <img :src="bgUrl" alt="加载图片失败">
        </div>

        <!-- 登陆输入部分 -->
        <section>
            <div class="telphone">
                <i></i>
                <input type="text" v-model="telNum" @input="reminderInfo()" placeholder="手机号">
            </div>
            <span class="telRem">{{reminder}}</span>
            <div class="password">
                <i></i>
                <input
                    type="password"
                    placeholder="请输入密码"
                    @focus="passWordIn()"
                    @blur="passWordOut()"
                    @input="passReminderInfo()"
                    v-model="passNum"
                >
            </div>
            <span class="telRem">{{reminderPass}}</span>
        </section>

        <!-- 登录按钮部分 -->
        <!-- 剩余全部部分 -->
        <article>
            <div :class="{active:flagTel&&flagPass}" @click="Login()">登陆</div>
            <div class="register_forget">
                <router-link :to="path" tag="span">{{regis}}</router-link>
                <span>忘记密码?</span>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: "songshuLogin",
    data() {
        return {
            path: "/register",
            regis: "快速注册",
            bgUrl: "./img/login/login-pwd-blur.5f488ea3.png",
            telNum: "",
            flagTel: false,
            flagIn: false,
            reminder: "",
            passNum: "",
            flagPass: false,
            reminderPass: ""
        };
    },
    methods: {
        //返回上一级
        back() {
            javascript: history.back(-1);
        },

        //输入密码时，背景图的切换
        passWordIn() {
            this.bgUrl = "./img/login/login-pwd-focus.6ed81267.png";
        },
        passWordOut() {
            this.bgUrl = "./img/login/login-pwd-blur.5f488ea3.png";
        },

        //手机正则判断
        reminderInfo() {
            let regTel = /^1[358]\d{9}$/;
            if (!regTel.test(this.telNum)) {
                this.reminder = "请输入正确的手机号码";
                this.flagTel = false;
            } else {
                this.reminder = "";
                this.flagTel = true;
            }
        },

        //密码正则
        passReminderInfo() {
            let regPass = /^.{6,12}$/;
            if (!regPass.test(this.passNum)) {
                this.reminderPass = "请输入格式正确的密码";
                this.flagPass = false;
            } else {
                this.reminderPass = "";
                this.flagPass = true;
            }
        },
        //登录功能
        Login() {
            if (this.flagTel && this.flagPass) {
                let info = {
                    username: this.telNum,
                    password: this.passNum
                };
                fetch("http://localhost:3000/goods/api/goodsLogin", {
                    method: "post", //传参方式
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    body: JSON.stringify(info) //传的参数
                }).then(res => {
                    res.json().then(data => {
                        console.log(data.state);
                        if (data.state == 0) {
                            alert("亲，用户名或者密码错误");
                        } else {
                            alert("登录成功");
                            localStorage.setItem('username', info.username);
                            // location.href="./mine";
                            this.$router.push("/mine");
                            //将用户名，密码保存至本地
                          
                        }
                    });
                });
            }
        }
    }
};
</script>

<style scoped>
header {
    width: 100%;
    height: 0.88rem;
    display: flex;
    align-items: center;
    font-size: 0.36rem;
    color: black;
}
header > span:first-child {
    margin: 0 2.62rem 0 0.3rem;
}
/* banner部分 */
.banner > img {
    width: 100%;
    height: 200px;
}

/* 登陆输入部分 */
section {
}
section > div {
    height: 0.87rem;
    margin: 0 0.2rem 0 0.2rem;
}
section > div {
    border-bottom: 1px solid #dddddd;
    display: flex;
    align-items: center;
}
section > .password {
    border: none;
}
section i {
    width: 0.34rem;
    height: 0.34rem;
    margin: 0 0.35rem 0 0.15rem;
}
section > .telphone i {
    background: url(../../public/img/login/icon-username@2x.e334a0d2.png)
        no-repeat center;
}
section > .password i {
    background: url(../../public/img/login/icon-password@2x.6a424894.png)
        no-repeat center;
}
section input {
    flex: 1;
    height: 0.48rem;
    background: #e8f0fe;
    border: none;
    outline: none;
    color: #8c8c8c;
    font-size: 0.26rem;
}

.telRem {
    color: red;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.4rem;
}
.like_body .active {
    background: #76bc1e;
}

/* 登录按钮部分 */
article {
    flex: 1;
    background: #f9f9f9;
}
article > div:first-child {
    margin: 0.5rem 0.2rem 0.2rem;
    background: #cecece;
    width: 7.1rem;
    height: 0.82rem;
    line-height: 0.82rem;
    text-align: center;
    color: white;
    font-size: 0.32rem;
    border-radius: 0.08rem;
}
.register_forget {
    display: flex;
    justify-content: space-between;
    color: #262626;
    font-size: 0.28rem;
    margin: 0 0.25rem;
}
</style>


