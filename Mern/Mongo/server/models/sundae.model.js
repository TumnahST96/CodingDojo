const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({

    flavor: String, 
    numScoop: Number,
    whipped: Boolean,
    name: String,
    toppings: [String]


})

const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae;
