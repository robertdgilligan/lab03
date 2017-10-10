var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocalUserSchema = new Schema({
  username: String,
  salt: String,
  hash: String
});

var Users = mongoose.model('userauths', localUserSchema);
