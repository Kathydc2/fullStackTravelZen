const Review = require('../models/Review');

const fetchAllReviews = async (req, res) => {
    const reviews = await Review.find({});
    res.json({reviews: reviews});
};

const fetchReview = async (req, res) => {
    const userId = req.params.userId;
    const review = await Review.findById(userId);
    res.json({review: review});
};

const createReview = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    const {userId,name,description} = req.body
    const review = await Review.create({
        userId: userId,
        name: name,
        description:description
    });
    res.json({review: review});
};

const updateReview = async (req, res) => {
    // const userId = req.params.id;
    const {userId, name,description} = req.body
    const review = await Review.findByIdAndUpdate(userId,{
        userId: userId,
        name: name,
        description: description
    });
    const updatedReview = await Review.findById(userId)
    res.json({review: updatedReview}) 
};

const deleteReview = async (req, res) => {
    const userId = req.params.id;
    await Review.findByIdAndDelete({userId});
    res.json({success: "User has been deleted successfully"});
};

module.exports = {
    fetchAllReviews,
    fetchReview,
    createReview,
    updateReview,
    deleteReview
}