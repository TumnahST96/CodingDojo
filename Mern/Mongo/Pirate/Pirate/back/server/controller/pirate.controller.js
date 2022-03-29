const Pirate = require("../models/pirate.model")



module.exports.findAll = (req, res) =>{
    Pirate.find({})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({
            message:"that didnt work", err
        }))
}

module.exports.createPirate = (req, res) =>{
    Pirate.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}

module.exports.findOne = (req, res) => {
    Pirate.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}


module.exports.deleteOne = (req, res) => {
    Pirate.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}
module.exports.updateOne = (req, res) => {
    Pirate.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}

module.exports.addTopping = (req, res) => {
    Pirate.updateOne({_id: req.params._id},
        {$push: {toppings: req.body.topping}})
        .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}

