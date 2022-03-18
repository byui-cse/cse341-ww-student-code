const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    age: Number
})

module.exports = mongoose.model('User', userSchema)