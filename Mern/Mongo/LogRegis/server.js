const express = require ("express");
const cors = require("cors");
const cookies = require("cookie-parser")
const port  = 8000;
const app = express();

app.use(cors({
    credentials: true,
    origin: "http://localhost:300"
}))
app.use(express.json());
app.use(cookies());
require("./server/config/mongoose.config")()
require("./server/router/user.routes")(app)

app.listen(port, () => console.log('listening on ${port} is how i like it'))