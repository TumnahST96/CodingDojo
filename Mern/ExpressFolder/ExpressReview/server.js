const express = require  ("express");

const app = express ();
const port = 8000;
const { faker } = require('@faker-js/faker');
const Order = require("./order")



app.get("/api/fake", (req, res)=>{
    const response = {
        name:faker.name.findName(),
        
        
    }
    res.json(response);
})

app.get("/api/order", (req, res)=>{
    
    res.json(new Order ());
})

app.listen(port, ()=>console.log(`running on port ${port}, hell yeah`))