const express = require("express");
const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());

// app.get("/api/test", (req, res)=>{
//     res.json({message:"hey its me"});
// })

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/router/manager.route")(app);

app.listen(port, ()=>console.log(`running on port ${port} hjehe`));
