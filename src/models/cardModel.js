const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        requied: true
    },
    customerName: {
        type: String,
        requied: true
    },
    vision: {
        type: String,
        requied: true
    },
    customerId: {
        type: mongoose.Types.ObjectId,
        ref:"Customer"
    },
    cardType: {
        enum: ["Regular", "Special"]
    },
    status: {
        enum: ["Active", "Inactive"]
    }
}, { timeStamp: true })



module.exports = mongoose.model("Card", cardSchema)