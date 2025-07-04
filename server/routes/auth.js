const express =require("express")
const User =require('../models/User')
const router=express.Router();
const { validationResult,body } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET="ishija$1"
var fetchUser =require('../middleware/fetchUser')
//ROUTE 1:"api/auth/createuser"- Create a user using POST- no login req obviously    

router.post('/createuser',[body('name','Enter a valid name').isLength({min:3}),
                body('email','Enter a valid email').isEmail(),
                body('password','Password must be atleast 3 characters').isLength({min:3})
],async(req,res)=>{
   const errors=validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
   }
   
try{
   const salt=await bcrypt.genSalt(10);
   const secPass=await bcrypt.hash(req.body.password,salt);
   
   const user= await User.create({
      name:req.body.name,
      email:req.body.email,
      password:secPass
});
(console.log("User created successfully"))

const data={
   user:{
      id:user.id
   }
}
const token = jwt.sign(data, JWT_SECRET);   
res.json(token);
}
catch(error){
   console.error(error.message)
   return res.status(500).send("Some error occurred");}

})

//Route 2:"api/auth/login"- Authenticate user using POST - login not reqd beforehand obviously 
router.post('/login',[
   body('email','Enter a valid email').isEmail(),
   body('password','Password cannot be blank').exists()],
   async(req,res)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
return res.status(400).json({errors:errors.array()});
}

const {email,password}=req.body;
try{
   let user=await User.findOne({email});
   if(!user){
     return res.status(400).json({error:"Sorry user does not exist"})
   }
   const passwordCompare=await bcrypt.compare(password, user.password)
   if(!passwordCompare){
      return res.status(400).json({error:"Please enter correct password"})
   }
   const data={
      user:{
         id:user.id
      }
   }
   const token =jwt.sign(data,JWT_SECRET);
   res.json({token})

}
catch(error){
   console.error(error.message)
   return res.status(500).send("Internal Server Error");
}

})

//Route 3: api/auth/profile: Display user details- login required
router.post('/profile',fetchUser,async(req,res)=>{

try{
   userId=req.user.id;
   const user = await User.findById(userId).select("-password");
   res.send(user);
 }
 catch(error){
   console.error(error.message)
   return res.status(500).send("Internal Server Error");
}
})

module.exports=router