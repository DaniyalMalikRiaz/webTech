
const express = require('express')
const bodyParser=require('body-parser')


const student = require('./routes/student.route')


const app = express()
//http://localhost:3000/students
app.use('/students', student)

var portNum = 3000
app.listen(3000,()=>[console.log('server is running')])
