const Manager = require("../model/manager.model")

module.exports.testResponse = (req, res) =>{
    res.json({message:"test response here!"})
}

module.exports.findAll = (req, res) =>{
    Manager.find({})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({
            message:"that didnt work", err
        }))
}

module.exports.createManager = (req, res) =>{
    Manager.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}

module.exports.findOne = (req, res) => {
    Manager.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}


module.exports.deleteOne = (req, res) => {
    Manager.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}
module.exports.updateOne = (req, res) => {
    Manager.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}



     