const mongoose = require('mongoose');
const BabysitterSchema=mongoose.Schema({
        first_name: String,
        last_name: String,
        age: Number,
        birthday: Date,
        email: String,
        password: String,
        address:{
                zip: Number,
                city: String
        },
        gender: String,
        tel: Number,
        description: String,
        certificate:[{
                title: String,
                year: Number,
                description_certif: String
        }],
        avg_stars: Number,
        disponibility: String,
        child_nb_handle: Number,
        exp_years: Number,
        Ratings:[{
                star: Number,
                comment: String,
              //  parent:{type: Schema.ObjectId, ref: 'parent'}
        }],
});
module.exports = mongoose.model('babysitter',BabysitterSchema);