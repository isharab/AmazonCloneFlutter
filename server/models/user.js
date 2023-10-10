const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please enter your email'],
        validate: {
            validator: (v) => {
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return v.match(re);
            },
            message: props => `${props.value} is not a valid email address`
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        validate: {
            validator: (v) => {
                return v.length >= 8;
            },
            message: `Please enter a password that is at least 8 characters long`
        }
    },
    address: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'user'
    }
    // cart
});


const User = mongoose.model('User', userSchema);
module.exports = User;