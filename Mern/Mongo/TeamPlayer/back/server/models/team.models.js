const mongoose = require("mongoose");

const TeamPlayerSchema = new mongoose.Schema({

   

    TeamName: {
        type: String,
        required: [true, "you need a name"],
        minLength: [4, "the name has got to be longer"],
        
    }, 
    Position: {
        type: String,
        required: [true, "you need to pick a posityion youre good at"],
        min: [5, "optons are forward, Midfielder, and goalkeeper"],
        
    },
    
    



}, {timeseries: true})

const TeamPlayer = mongoose.model("TeamPlayer", TeamPlayerSchema);

module.exports = TeamPlayer;
