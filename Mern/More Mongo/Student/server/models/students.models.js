const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String, 
    home_state: String, 
    lucky_number: Number, 
    birthday: {
        month: Number, 
        day: Number, 
        year: Number
    }
})

const Students = mongoose.model("Student", StudentSchema);

module.exports = Students;