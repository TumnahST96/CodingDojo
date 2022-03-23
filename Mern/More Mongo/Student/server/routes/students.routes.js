const StudentController = require("../controllers/student.controller");

module.exports = app => {
    app.get("/api/test", StudentController.testResponse);
    app.get("/api/student/findAll", StudentController.findAll);
    app.get("/api/student/findAllbyState/:home_state", StudentController.findAllbyState);

    app.post("/api/student/create", StudentController.createStudent);
    app.get("/api/student/:_id", StudentController.findOne);
    app.delete("/api/student/:_id", StudentController.deleteOne);

    app.patch("/api/student/:_id", StudentController.updateOne);

    // app.put("/api/student/:_id/birth", StudentController.addBirth);
}