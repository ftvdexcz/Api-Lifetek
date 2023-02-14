const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be provided!'], 
  },
  sex: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  dob: {
    type: Date
  },
  address: {
    type: String
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
