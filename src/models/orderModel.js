

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "newUser",
    },
    productId: {
        type: ObjectId,
        ref: "newproduct"
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: true
    },
    date: Date

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)