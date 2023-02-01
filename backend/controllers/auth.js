const { validationResult } = require('express-validator');

// hashing password

const bcrypt = require('bcryptjs');
const user = require('../models/user');

exports.signup = async (req, res, next) => {

    const errors = validationResult(req).errors;

    if (!errors.isEmpty()) return


    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const hashedPassword = await bcrypt.hash(password, 12)

        // saving user details to our database

        const userDetails = {
            name: name,
            email: email,
            password: hashedPassword

        }

        const result = await user.save(userDetails)


        // making 

        req.status(201).json({message:'User registered!'})

    } catch (err) {
        if (!err.status){
            // if status error is not set, we set it
            err.status = 500;
        }
        next(err)
    }
}