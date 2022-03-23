const SundaeController = require("../controllers/sundae.controller")

module.exports = app =>{
    app.get("/api/test", SundaeController.testResponse);
    app.get("/api/sundaes/findAll", SundaeController.findAll);

    app.post("/api/sundaes/create", SundaeController.createSundae);
    app.get("/api/sundaes/:_id", SundaeController.findOne);
    app.delete("/api/sundaes/:_id", SundaeController.deleteOne);
    app.patch("/api/sundaes/:_id", SundaeController.updateOne);
    app.put("/api/sundaes/:_id/addTopping", SundaeController.addTopping)
    

}