const Sundae = require("../models/sundae.model")

module.exports.testResponse = (req, res) =>{
    res.json({message:"test response here!"})
}

module.exports.findAll = (req, res) =>{
    Sundae.find({})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({
            message:"that didnt work", err
        }))
}

module.exports.createSundae = (req, res) =>{
    Sundae.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}

module.exports.findOne = (req, res) => {
    Sundae.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}


module.exports.deleteOne = (req, res) => {
    Sundae.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}
module.exports.updateOne = (req, res) => {
    Sundae.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}

module.exports.addTopping = (req, res) => {
    Sundae.updateOne({_id: req.params._id},
        {$push: {toppings: req.body.topping}})
        .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}

