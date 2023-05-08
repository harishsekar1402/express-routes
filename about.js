const express = require('express')
const about = express.Router();
about.get('/',(req,res)=>{
    res.send("This is About page")
})

module.exports = about;