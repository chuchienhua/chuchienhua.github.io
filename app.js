
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//var mongoose= require('mongoose');
//const { isBuffer } = require('util');
//mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true});
//var db=mongoose.connection;
//db.on('error', console.error.bind(console,'connection error:'));
//db.once('open', function(){console.log("connected!!!!");});
//var testSchema= new mongoose.Schema({
  //id:Number,
  //name:String});
//testSchema.set('Collection','test');
//var testModel =mongoose.model('test',testSchema);

//var content=new testModel({id:1,name:'Eddie'});   新增
//content.save(function(err){
 // if(err) console.log(err);
 // else console.log('Success!!!')});

// testModel.find(function(err,data){              查詢
  // if(err) console.log(err);
  // console.log(data);});

//testModel.update({id:1},{name:"eddie lena"},function(err){   刪除
  //if(err) console.log(err)
 // console.log('更新成功');});

 //testModel.remove({id:1,name:"eddie lena"},function(err){   刪除
 // if(err)console.log(err)
 // console.log('刪除成功');});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
//改成true 才能傳送複合型態資料 如:陣列型態
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var memberRouter=require('./routes/memberApi'); //聲明物件 要放置在上面中間件後面
app.use('/member',memberRouter);
app.use('/public',express.static('public')); //運用static 將public 目錄對外開放 讓城市透過參數存取目錄中的靜態檔案

var voteRouter=require('./routes/voteApi'); //投票的api
app.use('/vote',voteRouter);

var albumRouter=require('./routes/albumApi'); // 相簿的api
app.use('/album',albumRouter);

var blogRouter=require('./routes/blogApi');
app.use('/blog',blogRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
