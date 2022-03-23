const StudentController = require("../controllers/student.controller");

module.exports = app => {
    app.get("/api/test", StudentController.testResponse);
    app.get("/api/findAll", StudentController.findAll);

    app.post("/api/create", StudentController.createStudent);
    app.get("/api/student/:_id", StudentController.findOne)
}