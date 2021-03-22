const express=require('express');
const bodyParser=require('body-parser');
const product=require('./routes/product.route');
const mongoose=require('mongoose');

const app=express();

mongoose.connect("mongodb://localhost/productsDb",{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to the Database');
})
.catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
      });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/products',product);
app.listen(3000, function () {
    console.log("Express server listening on port 3000");
    });