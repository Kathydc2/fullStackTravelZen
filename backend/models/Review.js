const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
    //properties of the schema
    //ObjectId to create a relationship between my "user" and review schema
    userId: {type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    name: String,
    description: String,
});
//access to connect schema and our CRUD routes such as Review.find()
const Review = mongoose.model("Review", reviewSchema)

module.exports = Review