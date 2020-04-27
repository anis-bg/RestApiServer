const mongoose = require('mongoose');
const ParentSchema=mongoose.Schema({
    first_name: String,
    last_name: String,
   // age: Number,
    email: String,
    password: String,
    adress:{
        zip: Number,
        city: String
    },
    gender: String,
    tel: Number,
    childs:[{
        name_child: String,
        birthday: Date,
        needs: String,
        age_child: Number,
        comment: String
    }]
});

module.exports = mongoose.model('parent',ParentSchema);