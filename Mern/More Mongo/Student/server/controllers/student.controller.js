const Student = require("../models/students.models");

module.exports.testResponse = (req, res)=>{
    res.json({message: "test response here!"})
}

module.exports.findAll = (req, res)=>{
    Student.find({})
        .then(results => res.json(results))
        .catch(err=>res.status(400).json({message:"that didnt go as planned", err}))
}

module.exports.createStudent = (req, res) => {
    Student.create(req.body)
    .then(results => res.json(results))
        .catch(err=>res.status(400).json({message:"that didnt go as planned", err}))


}

module.exports.findOne = (req, res) => {
    Student.findOne({_id: req.params._id})
    .then(results => res.json(results))
        .catch(err=>res.status(400).json({message:"that didnt go as planned", err}))


}

module.exports.findAllbyState = (req, res) => {
    Student.findAllbyState({home_state: req.params.home_state})
    .then(results => res.json(results))
        .catch(err=>res.status(400).json({message:"that didnt go as planned", err}))


}

module.exports.deleteOne = (req, res) => {
    Student.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
        .catch(err=>res.status(400).json({message:"that didnt go as planned", err}))


}

module.exports.updateOne = (req, res) => {
    Student.updateOne({_id: req.params._id}, req.body)
    .then(results => res.json(results))
        .catch(err=>res.status(400).json({message:"that didnt go as planned", err}))


}
// module.exports.addBirth = (req, res) => {
//     Student.updateOne({_id: req.params._id}, 
//         {$push: {birthday: {month: {req.body.month}} }})
//     .then(results => res.json(results))
//         .catch(err=>res.status(400).json({message:"that didnt go as planned", err}))


// }