const express = require('express');

//! Require Controller
const { addTeacher, getTeacher, getSingleTeacher, updateTeacher, deleteTeacher } = require('../controller/teacher.controller')

let router = express.Router();

//! Route operations
router.post('/addteacher', addTeacher)
router.get('/getteachers', getTeacher)
router.get('/getsingleteacher/:tid', getSingleTeacher)
router.put('/updateteacher/:tid', updateTeacher)
router.delete('/deleteteacher/:tid', deleteTeacher)

module.exports = router;