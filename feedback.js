const express = require('express')
const feedback = express.Router();
feedback.get('/',(req,res)=>{
    res.send("This is Feedbacks page")
})

module.exports = feedback;