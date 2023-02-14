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

  getStudent: async function(req, res){
    try{
      const student = await Student.findById(req.params.id);

      res.status(200).json({
        status: 'success',
        data: {
          student
        }
      });
    }catch(error){
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  },

  updateStudent: async function(req, res){
    try{
      const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // return new document after update
        runValidators: true,
      });
      if (!updatedStudent) {
        throw new Error('Id not found');
      }
      res.status(200).json({
        status: 'success',
        data: {
          student: updatedStudent
        }
      });
    }catch(error){
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  },

  deleteStudent: async function(req, res){
    try{
      const student = await Student.findByIdAndDelete(req.params.id);
      if (!student) {
        throw new Error('Id not found');
      }
      res.status(204).json({
        status: 'success',
        data: null,
      });
    }catch(error){
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  },
}
