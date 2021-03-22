const express = require('express')
const { nextTick } = require('process')
var app = express()

//http://localhost:3000/
app.get('/', (req,res)=>{
    res.send('hello class')
})

//http://localhost:3000/books
app.get('/books', (req,res)=>{
    res.send('welcome to the books section')
})

//http://localhost:3000/Students/:studentid/Books/:bookid
app.get('/Students/:studentid/Books/:bookid', (req,res)=>{
    res.send(req.params)
    next()
}, (req,res)=>{
    res.send('printinf the message call back # 2')
}

)

var server=app.listen(3000,()=>{
    console.log("server is running at 3000")
})