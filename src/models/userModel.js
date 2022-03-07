// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,

//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // id: ObjectId("61951bfa4d9fe0d34da86829"),
    name: String,
    balance: {
        type: Number,
        default: 100
    }, // Default balance at user registration is 100
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    }, // Allowed values are - “male”, “female”, “other”
    isFreeAppUser: {
        type: Boolean,
        default: false
    }// Default false value.

}, { timestamps: true });

module.exports = mongoose.model('newUser', userSchema)