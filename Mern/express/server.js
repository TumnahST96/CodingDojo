const express = require ("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api", (req, res)=>{
    console.log("trying to talk to database");
    res.json({message:"here is your response, sir"});
})

app.get("/api/other", (req, res)=>{
    console.log("trying to talk to other database");
    res.json(["here is your response 0", "how u doing sir", new Date().getTime()]);
})

app.get("/api/repeat/:word", (req, res)=>{
    console.log("trying to talk to other database");
    res.json({message:`here is your repwATD WORD, sir: ${req.params.word}`});
})

app.post("/api/repeat", (req, res) =>{
    console.log("talking in post request");
    res.json(req.body);
})

app.listen(port, ()=>console.log(`Running on port ${port} is a new way I like to be!!!`));
