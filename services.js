const express = require('express')
const service = express.Router();

const listservice =[
    {
        "name" : "Web development"
    },
    {
        "name" : "App development"
    },
    {
        "name" : "Game development"
    },
    {
        "name" : "Service management"
    },
    {
        "name" : "Hardware"
    }
]


service.get('/',(req,res)=>{
    res.send("This is Contacts page")
})
service.get('/:id([0-9]{1})',(req,res)=>{
   res.send(req.user.name)
})
service.param('id',(req,res,next,id)=>{
    req.user = listservice[id]
    next();
    console.log(id)
})


module.exports = service;