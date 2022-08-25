//check if running in production or dev environment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
//require index router ./ relative path
const indexRouter = require('./routes/index')

//configure express apllication ejs is view engine
app.set('view engine','ejs')
//views coming from a views dir. get current dir and append views
app.set('views', __dirname + '/views')

//hook up express layouts. every single file is put inside this, so we do not need to duplicate beginning HTML or headers + footers etc..
app.set('layout', 'layouts/layout')
//tell express we want to use expressLayouts from above(ejs)
app.use(expressLayouts)
//tell express where public files will be
app.use(express.static('public'))


//mongoose lets us work with mongodb v easily
const mongoose = require('mongoose')
//pass a tring for url.. never hard code
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to Mongoose'))
app.use('/', indexRouter)
//listen on a certain port server will tell us what port it is listening to, port 3000 for local
app.listen(process.env.PORT || 3000)
