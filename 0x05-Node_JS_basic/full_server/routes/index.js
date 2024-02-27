const express = require('express');
const AppCont = require('../controllers/AppController');
const StudentsCont = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', AppCont.getHomepage);
router.get('/students', StudentsCont.getAllStudents);
router.get('/students/:major', StudentsCont.getAllStudentsByMajor);

module.exports = router;
