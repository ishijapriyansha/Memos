const express =require("express")
const User =require('../models/User')
const router=express.Router();
const { validationResult,body } = require('express-validator');

router.post('/',[body('name','Enter a valid name').isLength({min:3}),
                body('email','Enter a valid email').isEmail(),
                body('password','Password must be atleast 3 characters').isLength({min:3})
],async(req,res)=>{
   const errors=validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
   }
   const user= await User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
}); 
res.json(user);
})
module.exports=router