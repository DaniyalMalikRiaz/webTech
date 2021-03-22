var express = require('express')
var r1 = require('./RouteMod')
var app = express()


app.route('/books')
.get(function(req,res){
    res.send('get a book')
})


.put(function(req,res){
    res.send('update a book')
})


.post(function(req,res){
    res.send('add a book')
})

app.use('/students',r1)


var server=app.listen(3000,()=>{console.log("server is running url   http://localhost:3000/books")})
