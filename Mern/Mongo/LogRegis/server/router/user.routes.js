 const UserController = require("../controller/user.controller");


 module.exports = app =>{
     app.post("/api/register", UserController.register)
     app.post("/api/login", UserController.login)
 }