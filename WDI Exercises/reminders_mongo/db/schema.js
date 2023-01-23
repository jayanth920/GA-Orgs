var mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var ReminderSchema = new Schema({
  body: String
})

var AuthorSchema = new Schema({
  name: String,
  reminders: [ReminderSchema]
})


var AuthorModel = mongoose.model("Author", AuthorSchema)
var ReminderModel = mongoose.model("Reminder", ReminderSchema)
