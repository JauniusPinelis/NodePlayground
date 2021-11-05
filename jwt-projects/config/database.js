const mongoose = require("mongoose");

const {MONGO_URI} = process.env;

exports.connect = () => {
    //connecting to the database
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("connected to db");
    })
    .catch((error) => {
        console.log('database connection failed');
        console.error(error);
    })
}