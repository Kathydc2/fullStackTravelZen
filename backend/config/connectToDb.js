require("dotenv").config();

//Connect to the MongoDB database//
const mongoose = require("mongoose");

const connectToDb = async() => {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB Cluster")

}

module.exports = connectToDb
