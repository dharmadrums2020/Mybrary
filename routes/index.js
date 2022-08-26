const express = require('express')
const router = express.Router()
const Book = require('../models/book')
//need to import this router into server.js
router.get('/', async (req, res) => {
    //render the 'middle' part into the boilerplate (<%- body %>)
    let books
    try {
        books = await Book.find().sort({ createAt: 'desc'}).limit(10).exec()
    } catch {
        books = []
    }
    res.render('index', { books: books })
})

//export this router we have created 

module.exports = router