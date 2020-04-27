const express = require('express');
const router = express.Router();
const Babysitter=require('../models/Babysitter');

// -------------------------- GET REQUEST : returns all babysiters -------------------------------
router.get('/search', async (req, res) => {
    try{
         const babysitters = await Babysitter.find();
         res.json(babysitters);
    }
    catch(err) { res.json({ message: err }); }
});
// -----------------------------------------------------------------------------------------------

// -------------------------- POST REQUEST -------------------------------
router.post('/', async (req,res) => {
const babysitter = new Babysitter ({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            age:req.body.age,
            address: {
                zip: req.body.ZIP,
                city: req.body.city,
            },
            password:req.body.password,
            email:req.body.email,
            gender:req.body.gender,
            birthday:req.body.birthday,
            tel:req.body.phoneNumber,
            description:"",
            avg_stars: 0,
            disponibility:"",
            child_nb_handle: 0,
            exp_years:0,
        });
    try{
        const savedbabysitter = await babysitter.save();
        res.json(savedbabysitter);
    }
    catch(err) {  res.json({message: err});  };
});
//------------------------------------------------------------------------
module.exports= router;