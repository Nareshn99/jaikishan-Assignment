const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const route=require('./src/routes/route')

app.use(express.json());

mongoose.connect(process.env.MongoUrl, {
    useNewUrlParser: true
}
)
    .then(() => console.log("MongoDB is Connected"))
    .catch((e) => console.log(e.message))



app.use("/", route);

const PORT = process.env.Port || 3000;

app.listen(PORT, () => {
    console.log(`Express is Running on Port ${PORT}`);
})