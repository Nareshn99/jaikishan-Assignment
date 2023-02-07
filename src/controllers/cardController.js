const cardModel = require('../models/cardModel')


const createCard = async (req, res) => {
    try {
        const { cardNumber, customerName, vision, customerId, cardType, status } = req.body
        const data = await cardModel.create(re.body);
        res.status(201).send({ status: true, message: "Card Created Successfully", data: data })
    }
    catch (e) {
        res.status(500).send({ status: false, message: e.message })
    }
}




const getCard = async (req, res) => {
    try {
        const data = await cardModel.find();
        res.status(200).send({ status: true, message: "Success", data: data })
    }
    catch (e) {
        res.status(500).send({ status: false, message: e.message })
    }
}



module.exports = {
    createCard,
    getCard
}