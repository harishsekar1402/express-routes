const express = require('express')
const service = express.Router();

const listservice =[
    {
        "id" : 1,
        "name" : "Web development"
    },
    {
        "id" : 2,
        "name" : "App development"
    },
    {
        "id" : 3,
        "name" : "Game development"
    },
    {
        "id" : 4,
        "name" : "Service management"
    },
    {
        "id" : 5,
        "name" : "Hardware"
    }
]


service.get('/',(req,res)=>{
    res.send("This is Contacts page")
})
service.get('/:id([0-9]{1})',(req,res)=>{
    const pageid = parseInt(req.params.id);
    const serviceid = listservice.find(serve => serve.id === pageid)
    if(!serviceid){
        res.send("Not")
    }
    else{
        res.send(serviceid.name)
    }
})


module.exports = service;