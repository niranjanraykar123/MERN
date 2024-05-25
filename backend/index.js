const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors({credentials:true,origin:'http://localhost:3000'}));

app.use(express.json());
const mongoose=require("mongoose");
const User=require("./models/User");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
const jwt = require('jsonwebtoken');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/blog');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.listen(8000,()=>{
    console.log("Listening");
})
app.post("/register",async (req,res)=>{
  const {username,password}=req.body;
  try{
  const userDoc=await User.create({
    username,
      password:bcrypt.hashSync(password,salt),

  });
  
  res.json(userDoc);
  }
  catch(e){
    res.status(400).json(e);
  }
})
// app.post('/login', async (req,res) => {
//     const {username,password} = req.body;
//     const userDoc = await User.findOne({username});
//     const passOk = bcrypt.compareSync(password, userDoc.password);
//     if (passOk) {
//         // logged in
//         jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
//           if (err) throw err;
//           res.json(token);
//         });
//       } else {
//         res.status(400).json('wrong credentials');
//       }
//   });
app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  });
  