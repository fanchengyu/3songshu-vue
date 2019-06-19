var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/'; // 配置文件的路径

router.get("/api/goodsClassify", (req, res) => {//获取列表页的数据
    res.json(require("../data/songshuGoods.json"));
});

router.get("/api/goodsSquirrelCurrency", (req, res) => {//获取松鼠币页面的数据
    res.json(require("../data/3songshu_squirrel_currency.json"));
});

router.get("/api/goodsIndex", (req, res) => { //获取首页的数据
    res.json(require("../data/songshuGoods"));
});

router.post("/api/goodsRegister/isUserIn", (req, res) => {//注册功能：判断用户名是否存在
    var params = req.body;
    fs.readFile("./data/user.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象
        //对json对象遍历，看看有没有重复的用户名
        for (var i = 0; i < dataJson.userInfo.length; i++) {
            console.log(params.username);
            if (params.username == dataJson.userInfo[i].username) {
                console.log("重复的用户名");
                res.json({
                    "state": 0
                })
            }
        }
        //将json文件重新写入
        var str = JSON.stringify(dataJson);
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./data/user.json", str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("用户名重复的操作，OK");
        });
    })
});

router.post("/api/goodsRegister/goNext", (req, res) => {//注册功能：将用户名密码保存至json文件
    var params = req.body;
    fs.readFile("./data/user.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象
        dataJson.userInfo.push(params);  //将传来的对象push进json文件
        var str = JSON.stringify(dataJson);
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./data/user.json", str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("用户注册操作，OK");
            res.json({
                "state": 1
            });
        });
    })
});

router.post("/api/goodsLogin", (req, res) => {//登录功能：查看用户的账号密码是否正确
    var params = req.body;
    fs.readFile("./data/user.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象

        //对json对象遍历，看看用户名和密码是否匹配
        let flag=false;
        for (var i = 0; i < dataJson.userInfo.length; i++) {
            console.log(params.username);
            if (params.username == dataJson.userInfo[i].username &&
                params.password == dataJson.userInfo[i].password) {
                    flag=true;
                console.log("成功登录");
                res.json({
                    "state": 1,
                })
            }
        }
        if(flag==false){
            console.log("失败登录");
                res.json({
                    "state": 0
                })
        }
        var str = JSON.stringify(dataJson);
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./data/user.json", str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("用户登录操作，OK");
        });
    })
});

router.get("/api/myGoods", (req, res) => { //页面刷新获取购物车的数据
    res.json(require("../data/myGoods"));
});

router.post("/api/myGoods/change",(req,res)=>{//购物车数据库信息的改变
    var params = req.body;
    fs.readFile("./data/myGoods.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        let str=JSON.stringify(params);
        fs.writeFile("./data/myGoods.json", str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("购物车的增删改查，OK");
            res.json({
                "state": 1
            });
        });
    })
})

router.post("/api/myGoods/insertCart",(req,res)=>{//点击商品，增加到购物车的操作
    var params = req.body;
    fs.readFile("./data/myGoods.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
		
		 var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象
        dataJson.totNum+=params.productCount;
        let flag=false;
        for(let i=0; i< dataJson.products.length; i++){//有相同Id的，在前面的基础上增加
            if(dataJson.products[i].productId== params.productId){
                dataJson.products[i].productCount+=params.productCount;
                flag=true;
            }
        }
        if(!flag){
             dataJson.products.push(params); //将传来的对象push进json文件
        }
        
        var str = JSON.stringify(dataJson);
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./data/myGoods.json", str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("购物车的添加操作，OK");
            res.json(require("../data/myGoods"));
        });
 
    })
})



module.exports = router;
