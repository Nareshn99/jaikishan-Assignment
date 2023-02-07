const express = require('express');
const route = express.Router();
const { createCusto, getCusto, deleteCusto } = require('../controllers/customerConrtoller')
const { createCard, getCard } = require('../controllers/cardController')


route.get("/test", (req, res) => {
    res.send("Api is working perfectly")
})

route.post("/customer", createCusto)
route.get("/getCusto", getCusto)
route.delete("/deleteCusto", deleteCusto)

route.post("/card", createCard)
route.get("/getCard", getCard)

module.exports = route