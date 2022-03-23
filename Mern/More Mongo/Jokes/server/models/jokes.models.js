const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "you need a joke, bro"],
        minLength: [10, "you need 10 charavters for a good joke"]
    }, 
    punchline: {
        type: String,
        required: [true, "what's the punchline, idiot"],
        minLength: [5, "Punchline so short, didn't see it coming"]
    }


}, {timestamps : true})

const Jokes = mongoose.model("jokes", JokeSchema);

module.exports = Jokes;
