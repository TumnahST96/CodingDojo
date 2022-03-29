const PirateController = require("../controller/pirate.controller")

module.exports = app =>{
    // app.get("/api/test", PirateController.testResponse);
    app.get("/api/pirates/findAll", PirateController.findAll);

    app.post("/api/pirates/create", PirateController.createPirate);
    app.get("/api/pirates/:_id", PirateController.findOne);
    app.delete("/api/pirates/:_id", PirateController.deleteOne);
    app.patch("/api/pirates/:_id", PirateController.updateOne);

}