const express = require("express");
const router = express.Router();
const bcrypt = require(`bcryptjs`);
require("../DB/conn");
const jwt = require(`jsonwebtoken`);
const User = require("../models/userSchema");
const { response } = require("express");

router.get("/", (req, res) => {
  res.send("Server: Hello World from Router");
});

// using Promises
// router.post('/register',(req,res)=>{

//     const{name,email,phone,work,password,conpassword} = req.body;

//     if(!name|| !email || !phone || !work || !password || !conpassword){
//         return res.status(422).json({ error: 'Please fill all the fields'});
//     }

//     User.findOne({email:email}).then((userExist)=>{
//         if(userExist) {
//            return res.status(422).json({ error: "Email already exists.Please login"})
//         }

//         const user = new User({name,email,phone,work,password,conpassword})

//         user.save().then(()=>{
//            return res.status(201).json({message: "User registered Successfully"})
//         }).catch((err)=>res.status(500).json({error:"Failed to register"}));

//     }).catch(err=>{console.log(err);})

//     // console.log(name);
//     // console.log(email);
//     // res.json({message:req.body});

// })

// Aysnc-Await version
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, conpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !conpassword) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res
        .status(422)
        .json({ error: "Email already exists.Please login" });
    }

    const user = new User({ name, email, phone, work, password, conpassword });

    // Password hashing
    await user.save();
    return res.status(201).json({ message: "User registered Successfully" });
  } catch (err) {
    console.log(err);
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Please fill all the fields" });
    }

    const userLogin = await User.findOne({ email: email });
    //console.log(userLogin);

    if(userLogin){
      const passMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken_mern_pratik",token,{
        expires:new Date(Date.now()+259892000000),
        httpOnly:true
      });

    if (!passMatch) {
      res.status(400).json({ message: "User Login Failed.Corresponding Email & Password didn't match." });
    }
    else{
        res.status(200).json({message:"User logged in Successfully"});
    }
    }
    else{
      res.status(400).json({message:"User Login Failed. Corresponding email & password didn't match."});
    }
    
  } catch (error) {
    console.log(error);
  }
  //   console.log(req.body);
  //   res.json({ message: "login credentials" });
});

module.exports = router;
