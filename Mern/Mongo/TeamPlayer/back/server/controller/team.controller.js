const TeamPlayer = require("../models/team.models")



module.exports.findAll = (req, res) =>{
    TeamPlayer.find({})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({
            message:"that didnt work", err
        }))
}

module.exports.createTeamPlayer = (req, res) =>{
    TeamPlayer.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}

module.exports.findOne = (req, res) => {
    TeamPlayer.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}


module.exports.deleteOne = (req, res) => {
    TeamPlayer.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}
module.exports.updateOne = (req, res) => {
    TeamPlayer.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}



     