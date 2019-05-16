const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StaffSchema = new Schema({
  name: {
    type: String,
		required: true
  },
  gender: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  hobbies: {
    type: String
  },
  wedded: {
    type: String,
  },
  birthday: {
		type: String,
  },
  address: {
		type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Staff = mongoose.model("staff", StaffSchema);