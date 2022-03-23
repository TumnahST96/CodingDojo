const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost/march_2022_students", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Yo you're connected to the freaking database"))
    .catch(err=>console.log("beep boop bop, db flop", err));