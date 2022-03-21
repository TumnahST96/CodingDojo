const express = require("express");
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');

const newInfo =  require("./ExtractInfo")
const comp = require("./company")

app.get("/api", (req, res)=>{
    res.json({message: "youre in route"});
})

app.get("/api/information", (req, res)=>{
    res.json(new newInfo());
})
app.get("/api/company", (req, res)=>{
    res.json(new comp());
})

app.listen(port, () => console.log(`running on ${port}`))
 