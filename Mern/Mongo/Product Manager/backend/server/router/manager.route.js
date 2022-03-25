const ManagerController = require("../controller/manager.controller")

module.exports = app =>{
    app.get("/api/test", ManagerController.testResponse);
    app.get("/api/managers/findAll", ManagerController.findAll);

    app.post("/api/managers/create", ManagerController.createManager);
    app.get("/api/managers/:_id", ManagerController.findOne);
    app.delete("/api/managers/:_id", ManagerController.deleteOne);
    app.patch("/api/managers/:_id", ManagerController.updateOne);

}