const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({

   

    name: {
        type: String,
        required: [true, "you need a name"],
        minLength: [5, "the name has got to be longer"],
        validate:{
            validator: (input) => {
                return !input.toUpperCase().includes("CHOCOLATE")
            },
            message: "death to chocolate"
        }
    }, 
    image: {
        type: String,
        required: [true, "you need a image"],
        
    },
    treasure: {
        type: Number,
        required: [true, "you need a treasure"],
        min: [1, "1's the very leasst u should have"],
        
    },
    phrase: {
        type: String,
            required: [true, "gimme a catchphrase"],
            minLength: [4, "make a longer name, I at least need 4"],
       
    },
    position: {
        type: String,
            required: [true, "Select one of the options"],
            // validate:{
            //     validator: (input) => {
            //         return !input.toUpperCase().includes("FIRST MATE","QUARTER MASTER", "BOATSWAIN", "POWDER MONKEY" )
            //     },
            //     message: "YOU CAN ONLY SELECT ONE FROM THE OPTIONS"
            // }
       
    },
    pegLeg:{
        type: Boolean,
        required: [true, "do u want peg or no"],
        
    },
    eyePatch:{
        type: Boolean,
        required: [true, "an eye patch, si?"],
        
    },
    hook:{
        type: Boolean,
        required: [true, "hook or hand?"],
        
    },
    
    // toppings: [String]



}, {timeseries: true})

const Pirate = mongoose.model("pirate", PirateSchema);

module.exports = Pirate;
