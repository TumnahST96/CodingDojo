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