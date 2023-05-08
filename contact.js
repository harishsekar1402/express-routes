const express = require('express')
const contact = express.Router();
contact.get('/',(req,res)=>{
    res.send("This is Contacts page")
})

module.exports = contact;