const express = require('express');
const router = express.Router();
const Parent=require('../models/Parent');

// -------------------------- POST REQUEST -------------------------------
router.post('/', async (req,res) => {
    const parent = new Parent ({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
       // age:req.body.age, (ki t7ot el birthday fel form l age taw tit7at automatiquement)
        address: {
            zip: req.body.ZIP,
            city: req.body.city,
        },
        password:req.body.password,
        email:req.body.email,
        gender:req.body.gender,
      //  birthday:req.body.birthday,
        tel:req.body.phoneNumber,
    });
    try{
        const savedparent = await parent.save();
        res.json(savedparent);
       }
    catch(err) {  res.json({message: err});  };

});

module.exports= router;