const express = require('express')
const user = express.Router();
user.get('/',(req,res)=>{
    res.send("This is Users page")
})

module.exports = user;