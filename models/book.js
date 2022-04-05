const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    id: String,
    title: String,
    author: String,
    rating: Number,
    description: String,
    imageUrl: String,
    dateRead: Date
})

module.exports = mongoose.model('Book', bookSchema)