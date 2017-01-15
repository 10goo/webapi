var mongoose = require('mongoose');

var WorkHoursSchema = new mongoose.Schema({
  date : { type: Date, default: Date.now},
  hours : Number
});

module.exports = mongoose.model('WorkHours', WorkHoursSchema);
