const Author = require("../models/author.models")

// module.exports.testResponse = (req, res) =>{
//     res.json({message:"test response here!"})
// }

module.exports.findAll = (req, res) =>{
    Author.find({})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({
            message:"that didnt work", err
        }))
}

module.exports.createAuthor = (req, res) =>{
    Author.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}

module.exports.findOne = (req, res) => {
    Author.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}


module.exports.deleteOne = (req, res) => {
    Author.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}
module.exports.updateOne = (req, res) => {
    Author.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
    .catch(err => res.status(400).json({
        message:"that didnt work", err
    }))
}



     