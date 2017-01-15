
var WorkHoursSchema = new MongooseSchema({
  date = new Date(),
  hours = Number
});

module.exports = mongoose.model('WorkHours', WorkHoursSchema);
