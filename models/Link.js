const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///// CREATE SCHEmA /////
const LinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Link = mongoose.model('link', LinkSchema);
