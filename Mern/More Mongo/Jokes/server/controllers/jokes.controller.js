const Joke = require("../models/jokes.models")

module.exports = {
    findAll: (req, res) =>{
        Joke.find({})
            .then(result => res.json(result))
            .catch(err => res.status(400).json({
                message:"that didnt work", err
            }))
        },
    createJoke: (req, res) =>{
        Joke.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message:"that didnt work", err
        }))
    },
    findOne: (req, res) => {
        Joke.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message:"that didnt work", err
        }))
    },
    deleteOne: (req, res) => {
        Joke.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message:"that didnt work", err
        }))
    },
    updateOne: (req, res) => {
        Joke.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({
            message:"that didnt work", err
        }))
    },
}

// module.exports.testResponse = (req, res) =>{
//     res.json({message:"test response here!"})
// }

// module.exports.findAll = (req, res) =>{
//     Joke.find({})
//         .then(result => res.json(result))
//         .catch(err => res.status(400).json({
//             message:"that didnt work", err
//         }))
// }

// module.exports.createJoke = (req, res) =>{
//     Joke.create(req.body)
//     .then(results => res.json(results))
//     .catch(err => res.status(400).json({
//         message:"that didnt work", err
//     }))
// }

// module.exports.findOne = (req, res) => {
//     Joke.findOne({_id: req.params._id})
//     .then(results => res.json(results))
//     .catch(err => res.status(400).json({
//         message:"that didnt work", err
//     }))
// }


// module.exports.deleteOne = (req, res) => {
//     Joke.deleteOne({_id: req.params._id})
//     .then(results => res.json(results))
//     .catch(err => res.status(400).json({
//         message:"that didnt work", err
//     }))
// }
// module.exports.updateOne = (req, res) => {
//     Joke.updateOne({_id: req.params._id}, req.body)
//     .then(results => res.json(results))
//     .catch(err => res.status(400).json({
//         message:"that didnt work", err
//     }))
// }

// // module.exports.addTopping = (req, res) => {
// //     Joke.updateOne({_id: req.params._id},
// //         {$push: {toppings: req.body.topping}})
// //         .then(results => res.json(results))
// //     .catch(err => res.status(400).json({
// //         message:"that didnt work", err
// //     }))
// // }

