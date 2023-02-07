const customerModel = require('../models/customerModel')


const createCusto = async (req, res) => {
    try {
        const { firstName, lastName, mobileNumber, email, DOB, customerId, address, status } = req.body
        const data = await customerModel.create(re.body);
        res.status(201).send({ status: true, message: "Customer Created Successfully", data: data })
    }
    catch (e) {
        res.status(500).send({ status: false, message: e.message })
    }
}



const getCusto = async (req, res) => {
    try {
        const data = await customerModel.find({ status: "Active" });
        res.status(200).send({ status: true, message: "Success", data: data })
    }
    catch (e) {
        res.status(500).send({ status: false, message: e.message })
    }
}



const deleteCusto = async (req, res) => {
    try {
        const custoId = req.params.id
        const data = await customerModel.findByIdAndDelete(custoId);
        res.status(200).send({ status: true, message: "Success", data: data })
    }
    catch (e) {
        res.status(500).send({ status: false, message: e.message })
    }
}





module.exports = {
    createCusto,
    getCusto,
    deleteCusto
}