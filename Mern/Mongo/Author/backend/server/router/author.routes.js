const AuthorController = require("../controller/author.controller")

module.exports = app =>{
    
    app.get("/api/authors/findAll", AuthorController.findAll);

    app.post("/api/authors/create", AuthorController.createAuthor);
    app.get("/api/authors/:_id", AuthorController.findOne);
    app.delete("/api/authors/:_id", AuthorController.deleteOne);
    app.patch("/api/authors/:_id", AuthorController.updateOne);

}