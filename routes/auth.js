const express =require("express")
const User =require('../models/User')
const router=express.Router();
const { validationResult,body } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET="ishija$1"
     
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
const data={
   user:{
      id:user.id
   }
}
var token = jwt.sign(data, JWT_SECRET);   
res.json(token);
}
catch(error){
   console.error(error.message)
   res.status(500).send("Some error occurred");}

}
)
module.exports=router