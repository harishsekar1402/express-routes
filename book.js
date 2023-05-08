const express = require('express')
const book = express.Router();
book.get('/',(req,res)=>{
    res.send("This is Booking page")
})

module.exports = book;