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

  createStudent: async function(req, res){
    try{
      const student = await Student.create(req.body);

      res.status(201).json({
        status: 'success',
        data: {
          student,
        },
      });
    }catch(error){
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  },
}
