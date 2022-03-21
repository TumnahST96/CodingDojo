const express = require("express");
const app = express();
const port = 8000;

const {faker} = require("./order")

app.get("/api", (req, res)=>{
    res.json({message: "youre in route"});
})

app.get("/api/information", (req, res)=>{
    res.json(new ExtractInfo());
})

app.listen(port, () => console.log(`running on ${port}`))
 