const Router = require('express');
const studentController = require('../controllers/studentController');

const router = Router();

router.route('/')
.get(studentController.getAllStudents)
.post(studentController.createStudent);

router.route('/:id')
.get(studentController.getStudent)
.patch(studentController.updateStudent)
.delete(studentController.deleteStudent)

module.exports = router;