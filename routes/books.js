const express = require('express');
const router = express.Router();
const Book = require('../models/book')
module.exports = router; 

router.get('/', (req, res, next) => {
    Book.find().then(books => {
        res.status(200).json(books)
    }).catch(err => {
        res.status(500).json({message: 'an error occurred', error: err})
    })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    console.log(id)
    Book.findById(id).then(book => {
        res.status(200).json(book)
    }).catch(err => {
        res.status(500).json({message: 'could not get book', error: err})
    })
})

router.post('/', (req, res, next) => {
    const book = new Book({
        title: req.body.title || 'Untitled',
        author: req.body.author || 'Anonymous',
        rating: req.body.rating || 0,
        description: req.body.description || '',
        imageUrl: req.body.imageUrl || '',
        dateRead: req.body.dateRead || ''
    })

    book.save().then(book => {
        res.status(201).json({
            message: "book added successfully",
            book: book
        })
    }).catch(err => {
        res.status(500).json({
            message: 'could not post book',
            error: err
        })
    })

})

router.put('/:id', (req, res, next) => {
    Book.findOne({ _id: req.params.id }).then(book => {
        book.title = req.body.title || '';
        book.author = req.body.author || '';
        book.rating = req.body.rating;
        book.description = req.body.description || '';
        book.imageUrl = req.body.imageUrl || '';
        book.dateRead = req.body.dateRead || '';

        Book.updateOne({ _id: req.params.id }, book).then(result => {
            res.status(204).json({
                message: 'Book updated successfully',
            })
        }).catch(error => {
            res.status(500).json({
                message: 'An error occurred',
                error: error
            });
        });
    }).catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'Book not found',
            error: { message: 'Book not found' }
        })
    })
})

router.delete('/:id', (req, res, next) => {
    Book.findOne({ _id: req.params.id }).then(book => {
        
        Book.deleteOne({ _id: req.params.id }).then(result => {

            res.status(204).json({
                message: "Book deleted successfully",
                 result: result
            })
        }).catch(err => {
            res.status(500).json({
                message: 'An error occurred',
                error: err
            })
        })
    }).catch(err => {
        res.status(500).json({
            message: 'Book not found',
            error: { message: 'Book not found' }
        })
    })
})