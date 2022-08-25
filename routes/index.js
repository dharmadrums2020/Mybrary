const express = require('express')
const router = express.Router()
//need to import this router into server.js
router.get('/', (req, res) => {
    //render the 'middle' part into the boilerplate (<%- body %>)
    res.render('index')
})

//export this router we have created 

module.exports = router