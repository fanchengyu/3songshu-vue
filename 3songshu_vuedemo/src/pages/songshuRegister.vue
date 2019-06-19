<template>
    <div class="like_body">
        <!-- header部分 -->
        <header>
            <span v-if="!flagRegister" class="back" @click="goBack()"><</span>
            <span v-if="flagRegister" class="back" @click="goPre()"><</span>
            <span>快速注册</span>
        </header>

        <!-- 手机号和验证码 -->
        <section v-if="!flagRegister">
            <div class="tel">
                <span>手机号</span>
                <input
                    type="text"
                    v-model="telNum"
                    @input="reminderInfo()"
                    @blur="isUserIn()"
                    placeholder="请输入手机号"
                >
            </div>
            <span class="telRem">{{reminder}}</span>
            <div class="verification_code">
                <span>验证码</span>
                <input
                    type="text"
                    v-model="verCode"
                    @input="reminderVerCode()"
                    placeholder="请输入验证码"
                >
                <span class="get_code" @click="getCode()">重新获取验证码</span>
            </div>
            <span class="telRem">{{reminder2}}</span>
            <i>验证码：{{codeByGet}}</i>
            <span @click="nextStyle()" :class="{active:flagTel&&flagCode}">下一步</span>
        </section>

        <section v-if="flagRegister">
            <div class="tel">
                <span>请设置密码</span>
                <input
                    type="password"
                    v-model="passNum"
                    @input="passReminderInfo()"
                    placeholder="请输入密码"
                >
            </div>
            <span class="telRem">{{reminderPass}}</span>
            <span :class="{active:flagPass}" @click="goNext()">下一步</span>
        </section>
    </div>
</template>


<script>
export default {
    name: "songshuRegister",
    data() {
        return {
            telNum: "",
            reminder: "",
            reminder2: "",
            flagTel: false,
            flagCode: false,
            verCode: "",
            codeByGet: "",
            flagRegister: false,
            passNum: "",
            reminderPass: "",
            flagPass: false
        };
    },
    methods: {
        //返回上一页
        goBack() {
            javascript: history.go(-1);
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

        //验证码的判断
        reminderVerCode() {
            if (this.verCode == this.codeByGet) {
                this.flagCode = true;
                this.reminder2 = "";
            } else {
                this.flagCode = false;
                this.reminder2 = "请输入正确的验证码";
            }
        },

        //获取验证码
        getCode() {
            let str = "";
            for (let i = 1; i <= 6; i++) {
                str = str + parseInt(Math.random() * 10);
            }
            this.codeByGet = str;
        },

        //注册页面的跳转-返回第一页
        goPre() {
            this.flagRegister = !this.flagRegister;
        },

         //注册页面的跳转-下一步
        nextStyle() {
            if (this.flagTel && this.flagCode) {
                this.flagRegister = !this.flagRegister;
            }
        },

        //密码正则验证
        passReminderInfo() {
            let regPass = /^.{6,12}$/;
            if (!regPass.test(this.passNum)) {
                this.reminderPass = "请输入正确的密码";
                this.flagPass = false;
            } else {
                this.reminderPass = "";
                this.flagPass = true;
            }
        },

        //判断用户名是否重复
        isUserIn() {
            let info = {
                username: this.telNum
            };
            fetch("http://localhost:3000/goods/api/goodsRegister/isUserIn", {
                method: "post", //传参方式
                headers: {
                    "Content-Type": "application/json" //请求头
                },
                body: JSON.stringify(info) //传的参数
            }).then(res => {
                res.json().then(data => {
                    console.log(data.state);
                    if (data.state == 0) {
                        this.reminder = "亲，这个手机已经注册了，换一个吧";
                        this.flagTel = false;
                    } else {
                        this.reminder = "";
                        this.flagTel = true;
                    }
                });
            });
        },
        //用户名和密码保存
        goNext() {
            if (this.flagPass) {
                let info = {
                    username: this.telNum,
                    password: this.passNum
                };
                fetch("http://localhost:3000/goods/api/goodsRegister/goNext", {
                    method: "post", //传参方式
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    body: JSON.stringify(info) //传的参数
                }).then(res => {
                    res.json().then(data => {
                        if (data.state == 1) {
                            alert("注册成功");
                            location.href = "/login";
                        }
                    });
                });
            }
        }
    },

    created() {
        this.getCode();
    }
};
</script>

<style scoped>
/* header部分 */
header {
    width: 100%;
    height: 0.88rem;
    display: flex;
    align-items: center;
    font-size: 0.36rem;
    color: black;
    border-bottom: 1px solid #e4e4e4;
}
header > span:first-child {
    margin: 0 2.42rem 0 0.3rem;
}

/* 手机号和验证码 */
section {
    border-top: 0.1rem solid #f9f9f9;
}
section div {
    margin: 0 0.2rem;
    height: 0.87rem;
    display: flex;
    align-items: center;
}
section .tel {
    border-bottom: 1px solid #dddddd;
}
section span {
    font-size: 0.32rem;
    color: black;
    margin-right: 0.36rem;
}
section input {
    color: #9d9d9d;
    font-size: 0.24rem;
    border: none;
    outline: none;
}
.tel input {
    flex: 1;
}
.telRem {
    color: red;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.4rem;
}

/* 注册按钮 */
section > span:last-child {
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
.like_body section .active {
    background: #76bc1e;
}

i {
    color: blue;
    text-align: center;
    display: block;
}

.verification_code input {
    width: 3.58rem;
}
section .get_code {
    padding-left: 0.24rem;
    margin-right: 0;
    line-height: 0.87rem;
    color: black;
    border-left: 1px solid #dddddd;
    font-size: 0.26rem;
}

/* 注册按钮 */
article {
    flex: 1;
    background: #f9f9f9;
    text-align: center;
}
.button {
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
</style>


