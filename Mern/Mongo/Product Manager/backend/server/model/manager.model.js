const mongoose = require("mongoose");

const ManagerSchema = new mongoose.Schema({

   

    title: {
        type: String,
        required: [true, "you need a title"],
        minLength: [4, "the title has got to be longer"],
        // validate:{
        //     validator: (input) => {
        //         return !input.toUpperCase().includes("CHOCOLATE")
        //     },
        //     message: "death to chocolate"
        // }
    }, 
    price: {
        type: Number,
        required: [true, "you need to name a price point"],
        min: [5, "what product is that cheap"],
        
    },
    
    description: {
        type: String,
            required: [true, "give us a little description, dearie"],
            minLength: [10, "don't be lazy. explain what this is..."],
       
    },
    // toppings: [String]



}, {timeseries: true})

const Manager = mongoose.model("Manager", ManagerSchema);

module.exports = Manager;
