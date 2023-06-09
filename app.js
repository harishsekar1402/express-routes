const express = require('express')
const app = express()
const user = require('./user')
const about = require('./about')
const book = require('./book')
const service = require('./services')
const feedback = require('./feedback')

app.get('/',(req,res)=>{
    res.send("This is Home page")
})
app.use('/user',user)
app.use('/about',about)
app.use('/book',book)
app.use('/service',service)
app.use('/feedback',feedback)

app.listen(4500)