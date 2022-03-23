
const express = require("express");
const app = express();
const port = 8000;

// app.get("/api/test", (req, res)=>{
//     res.json({message: "hey its me"})
// })

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/students.routes")(app);

app.listen(port, ()=>console.log('running on port ${port} is how i like it'));



