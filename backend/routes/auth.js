const express = require('express');

// this is where we do credentials validation for the route

// this intercepts the body of the request and makes the check
// importing only the body property of express-validator
const { body } = require('express-validator');

// the router allows us to make requests from different locations
const router = express.Router()
const User = require('../models/user');


router.post(
    '/signup',
    [
        body('name').trim().isEmpty(),
        //the custom function verifies that a user with same email is already present
        body('email').isEmail().withMessage('Please enter a valid email.').custom(async (email) => {
            const user = await User.find(email);

            // it the response from the database has a lenght more than 1 means a user already exists
            if (user[0].length > 0) {
                return Promise.reject('Email address already registered')
            }
        })
            // removes capital letters from email string
            .normalizeEmail(),
        body('password').trim().isLength({ min: 7 })
    ], authController.signup
) ;

module.exports = router
