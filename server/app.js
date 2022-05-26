const mongoose = require('mongoose');
const dotenv =require('dotenv');
const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');

dotenv.config({path:'./config.env'});
require('./DB/conn'); //connection establishment

app.use(express.json());

// const User = require('./models/userSchema');
const PORT = process.env.PORT;

app.use(require('./router/auth'));      //Linking Router files

// Middleware
const middleware=(req,res,next)=>{
    console.log("Middleware is working");
    next();
}


// app.get('/',(req,res)=>{
//     res.send("Server: Hello World");

// });

app.get('/about',middleware,(req,res)=>{
    console.log("About is working");
    res.send("Server: Hello User from About page");
});

app.get('/contact',(req,res)=>{
    // res.cookie("test",'pratik');
    res.send("Server: Hello User form contact page");
});

app.get('/login',(req,res)=>{
    res.send("Server: Hello User,Please login with your credentials.");
});

app.get('/register',(req,res)=>{
    res.send("Server: Hello User ,Please register yourself. If done already please login using your credentials");
});

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});