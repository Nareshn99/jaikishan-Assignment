const mongoose = require('mongoose');



const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requied: true
    },
    lastName: {
        type: String,
        requied: true
    },
    mobileNumber: {
        type: String,
        requied: true
    },
    email: {
        type: String,
        requied: true
    },
    DOB: {
        type: Date,
        required: true
    },
    customerId: {
        type: String,
        requied: true
    },
    address: {
        type: String,
        requied: true
    },
    status: {
        enum: ["Active", "Inactive"]
    }
}, { timeStamp: true })



module.exports = mongoose.model("Customer", customerSchema)