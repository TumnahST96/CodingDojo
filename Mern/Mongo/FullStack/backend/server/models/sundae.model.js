const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({

   

    flavor: {
        type: String,
        required: [true, "you need a flavor"],
        minLength: [5, "the flavor has got to be longer"],
        validate:{
            validator: (input) => {
                return !input.toUpperCase().includes("CHOCOLATE")
            },
            message: "death to chocolate"
        }
    }, 
    numScoop: {
        type: Number,
        required: [true, "you need a scoops"],
        max: [15, "that's more than enough, fatass"],
        
    },
    whipped:{
        type: Boolean,
        required: [true, "do u want it whipped or no"],
        
    },
    name: {
        type: String,
            required: [true, "you need a name"],
            minLength: [4, "make a longer name, I at least need 4"],
       
    },
    // toppings: [String]



}, {timeseries: true})

const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae;
