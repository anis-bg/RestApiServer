const express = require('express');
const router = express.Router();
const Message=require('../models/Message');

// -------------------------- POST REQUEST -------------------------------
router.post('/', async (req,res) => {
    const message = new Message ({
        fullName: req.body.fullName,
        email: req.body.email,
        text: req.body.message,
        sending_date: Date(),
    });
    try{
        const savedmessage = await message.save();
        res.json(savedmessage);
    }
    catch(err) {  res.json({message: err});  };
});
//------------------------------------------------------------------------
module.exports= router;