const mongoose = require("mongoose");

const db_name = "loginregisterMernMarchDB";

module.exports = () => {
    mongoose.connect(`mongodb://localhost/${db_name})`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("yo, you're connected to the freaking database"))
    .catch((err) => console.log("beep boop, db wasn't connected", err));
}