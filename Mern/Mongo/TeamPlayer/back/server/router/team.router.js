const TeamPlayerController = require("../controller/team.controller")

module.exports = app =>{
    
    app.get("/api/players/list", TeamPlayerController.findAll);

    app.post("/api/players/create", TeamPlayerController.createTeamPlayer);
    app.get("/api/players/:_id", TeamPlayerController.findOne);
    app.delete("/api/players/:_id", TeamPlayerController.deleteOne);
    app.patch("/api/players/:_id", TeamPlayerController.updateOne);

}