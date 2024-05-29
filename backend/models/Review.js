const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    description: String,
});

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review