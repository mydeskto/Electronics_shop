const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	"userName" : {type: String , require : true},
	"email" : { type: String , require:true},
    "password" : {type : String , require: true},
	"createdOn" : {type : Date , default : Date.now} 
});

const userModel = mongoose.model('users' , userSchema);

module.exports = userModel