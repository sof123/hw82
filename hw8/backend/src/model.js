// this is model.js


var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username:String,
  hash:String,
  salt:String
})

var profileSchema = new mongoose.Schema({
  username:String,
  status:String,
  followedBy:[],
  following:[],
  zipcode:String,
  email:String,
  avatar:String,
  dob:String,
  headline:String
})
var articleSchema = new mongoose.Schema({
  id:String,
  author:String,
  body: String,
  date: String,
  comments:String

})
exports.User = mongoose.model('users', userSchema)
exports.Profile = mongoose.model('profiles', profileSchema)
exports.Article = mongoose.model('articles', articleSchema)
