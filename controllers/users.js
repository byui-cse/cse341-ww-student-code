const usersData = require('../data/users')
const User = require('../model/user')

exports.getUsers = (req, res, next) => {
    User.find().then(users => {
        res.status(200).json({
            message: "Users fetched successfully",
            users: users
        })
    })
}

exports.postUser = async (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: req.body.age,
    })
    user.save().then(user => {
        res.status(201).json({
            message: "User created successfully",
            userId: user._id
        })
    }).catch(err => {
        console.log(err)
    })
}