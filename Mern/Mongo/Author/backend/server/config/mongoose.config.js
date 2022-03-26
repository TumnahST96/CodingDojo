const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/march_2022_authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("yo, you're connected to the freaking database"))
  .catch((err) => console.log("beep boop, db wasn't connected", err));
