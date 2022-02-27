const mongoose = require('mongoose');

//const userSchema = new mongoose.Schema({
// firstName: String,
// lastName: String,
// mobile: {
//     type: String,
//     unique: true,
//     required: true
// },
// emailId: String,
// gender: {
//     type: String,
//     enum: ["male", "female", "LGBTQ"] //"falana" will give an error
// },
// age: Number,
// // isIndian: Boolean,
// // parentsInfo: {
// //     motherName: String,
// //     fatherName: String,
// //     siblingName: String
// // },
// // cars: [ String  ]

// Create a bookSchema with bookName, authorName, category and year .Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 




const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true
    },
    authorName: {
        type: String,
        required: true
    },
    bookCategory: {
        type: String,
        unique: true,
        required: true
    },
    publishYear: Number
    // bookList: [{ type: String }]


}, { timestamps: true });

module.exports = mongoose.model('Piyush', bookSchema) //users



// String, Number
// Boolean, Object/json, array