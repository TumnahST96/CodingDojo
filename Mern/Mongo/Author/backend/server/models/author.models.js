const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({

   

    name: {
        type: String,
        required: [true, "you need a Name"],
        minLength: [4, "the name has got to be longer"],
        // validate:{
        //     validator: (input) => {
        //         return !input.toUpperCase().includes("CHOCOLATE")
        //     },
        //     message: "death to chocolate"
        // }
    }
   
    // toppings: [String]



}, {timeseries: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
