//會員後端API檔案
var express = require('express');
var memberModel=require('../models/memberModel.js');
var router=express.Router();

//為來與會員功能相關的API程式碼會在此新增
router.post('/register',function(req,res){
    var newmember = new memberModel({
        name: req.body.name,
        account: req.body.account,
        password: req.body.password,
        photo:[]
    });
    memberModel.countDocuments({account: req.body.account},function(err, data){  //透過模組中的count() 找出會員帳號欄位account 比對是否有重複的資料
            if(data>0){
                res.json({"status":1, "msg":"帳號已被註冊!"});
            }
            else{
                newmember.save(function (err, data){
                    if(err) {
                        res.json({"status":1, "msg":"error"});
                    }
                    else{
                        res.json({"status":0, "msg":"success", "data":data});
                    }
                });
            }
        });
});

//登入api
router.post('/login',function(req,res){
    memberModel.findOne({
        account: req.body.account,
        password: req.body.password
    },function(err,data){
      if(data == null){
          res.json({"status":1, "msg":"帳號密碼錯誤!!"});
      }
      else{
          if(!err) {
              res.json({"status":0, "msg":"success","data":data});
          }
      }
    });
});

//修改密碼api
router.post('/changePass',function(req,res){
    memberModel.findOne({account:req.body.account, password:req.body.oldPass},function(err,data){
        if(data == null){
            res.json({"status":1,"msg":"舊密碼輸入錯誤!"});
        }
        else{
            data.password=req.body.newPass;
            data.save(function(err){
                if(err){
                    res.json({"status":1,"msg":"error"});
                }
                else{
                    res.json({"status":0,"msg":"success"});
                }
            });
        }
    });
});


module.exports=router;
