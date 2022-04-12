const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    imageUrl: {type: String},
 });
 
 module.exports = mongoose.model('Contact', contactSchema);