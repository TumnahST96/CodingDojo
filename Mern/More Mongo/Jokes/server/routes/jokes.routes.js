const{ findAll, createJoke, findOne, deleteOne, updateOne } = require("../controllers/jokes.controller")

module.exports = app =>{
    app.route("/api/jokes").get(findAll).post(createJoke)
    
    app.route("/api/jokes/:_id").get(findOne).delete(deleteOne).patch(updateOne)




    
    // app.get("/api/jokes", JokesController.findAll);
    // app.post("/api/jokes", JokesController.createJoke);
    // app.get("/api/jokes/:_id", JokesController.findOne);
    // app.delete("/api/jokes/:_id", JokesController.deleteOne);
    // app.patch("/api/jokes/:_id", JokesController.updateOne);
    // app.put("/api/jokes/:_id/addTopping", JokesController.addTopping)
    

}