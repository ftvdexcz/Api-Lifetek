const mongoose = require('mongoose');
const Student = require('../models/studentModel');

module.exports = {
  getAllStudents: async function(req, res){
    const students = await Student.find();

    res.status(200).json({
      status: 'success',
      results: students.length,
      data: {
        students
      }
    });
  },

  
}
