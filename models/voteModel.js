var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/vote',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error',console.error.bind(console,'CONNECTION ERROR!!'));
db.once('open',function(){console.log("CONNECTED!!!!");});

var voteSchema= new mongoose.Schema({
    account:String,
    name:String,
    title:String,
    option:Array,
    postdate:Date
});
voteSchema.set('collection','vote');
var model=mongoose.model('vote',voteSchema);

module.exports=model;