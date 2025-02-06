const express = require("express")
const router = express.Router();
const fetchUser = require("../middleware/fetchUser")
const Memos = require("../models/Memos")
const { body, validationResult } = require('express-validator')
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

module.exports = router