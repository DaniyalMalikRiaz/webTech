var express = require('express')
var Router = express.Router()

//http://localhost:3000/students/
Router.get('/',(req,res)=>{
    res.send('welcome to home page')
})

//http://localhost:3000/students/about
Router.get('/about',(req,res)=>{
    res.send('welcome to about page')
})

module.exports= Router
