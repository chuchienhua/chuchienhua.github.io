var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/vote',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error',console.error.bind(console,'CONNECTION ERROR!!'));
db.once('open',function(){console.log("CONNECTED!!!!");});

var articleSchema =new mongoose.Schema({
    account:String,
    name:String,
    type:String,
    title:String,
    content:String,
    like:Array,
    comment:Array,
    postdate:Date
});

articleSchema.set('collection','article');
var model=mongoose.model('article',articleSchema);

module.exports=model;