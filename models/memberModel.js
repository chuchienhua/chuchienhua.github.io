// 會員資料庫溝通模組檔
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/vote',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error',console.error.bind(console,'CONNECTION ERROR!!'));
db.once('open',function(){console.log("CONNECTED!!!!");});
var memberSchema = new mongoose.Schema({
    name: String,
    account: String,
    password: String,
    photos:[]
});
memberSchema.set('collation','member');
var model=mongoose.model('member',memberSchema);

module.exports=model;