const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String, 
    home_state: String, 
    lucky_number: Number, 
    birthday: Date
})

const Students = mongoose.model("Student", StudentSchema);

module.exports = Students;