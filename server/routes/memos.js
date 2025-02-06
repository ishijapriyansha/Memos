const express = require("express")
const router = express.Router();
const fetchUser = require("../middleware/fetchUser")
const Memos = require("../models/Memos")
const { body, validationResult } = require('express-validator');
const { findByIdAndDelete } = require("../models/User");
//Route 1: /api/memos/fetchallmemos:uses GET request to fetch all memos
router.get('/fetchallmemos', fetchUser, async (req, res) => {
    try {
        const memos = await Memos.find({ user: req.user.id })
        res.json(memos);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})
router.post('/addmemo', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 5 }),
    body('description', 'Description should have min 5 characters').isLength({ min: 5 }),],

    async (req, res) => {
        try {
            const { title, description, tag } = req.body
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const memo = new Memos({
                title, description, tag, user: req.user.id
            })
            const savedMemo = await memo.save()
            res.json(savedMemo)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


    //update a memo. login needed.

    router.put('/updatememo/:id', fetchUser, async (req , res)=>{
        try {
        const {title, description, tag} = req.body
        const newMemo={};
        if(title){ newMemo.title=title}
        if(description){ newMemo.description=description}
        if(tag){newMemo.tag=tag}


        //req.params only works with route parameters defined with : in the route path.
        //req.params is an object in Express that stores route parameters from a URL. These parameters are part of the URL path, and are used to capture dynamic values.
        let memo= await Memos.findById(req.params.id);
        if(!memo) {return res.status(404).send("Not found")}
        //to ensure somebody is not trying to edit memos on some other user's account
        if(memo.user.toString()!=req.user.id){return res.status(401).send("Not allowed!") }

        memo= await Memos.findByIdAndUpdate(req.params.id, {$set: newMemo}, {new:true})
        res.json({memo});
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

    router.delete('/deletememo/:id',fetchUser, async (req,res)=>{
        try{

        
        let memo= await Memos.findById(req.params.id);
        if(!memo) {return res.status(404).send("Not found")}
        if(memo.user.toString()!=req.user.id){return res.status(401).send("Not allowed!") }
        memo= await Memos.findByIdAndDelete(req.params.id)
        res.json({"Success":"Memo deleted", memo:memo});  //memo:memo= "memo":memo or {memo} 
        }
        catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

module.exports = router