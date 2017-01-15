var mongoose = require('mongoose');

var MidbSchema = new mongoose.Schema({
  name : String,
  email : String
});

module.exports = mongoose.model('Midb', MidbSchema );
