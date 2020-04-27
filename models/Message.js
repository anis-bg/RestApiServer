const mongoose = require('mongoose');
const MessageSchema=mongoose.Schema({
    fullName: String,
    email: String,
    text: String,
    sending_date: Date,
});
module.exports = mongoose.model('message',MessageSchema);