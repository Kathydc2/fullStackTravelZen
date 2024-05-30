const Review = require('../models/Review');

const fetchAllReviews = async (req, res) => {
    const reviews = await Review.find({});
    res.json({reviews: reviews});
};

const fetchReview = async (req, res) => {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);
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
    const reviewId = req.params.id;
    const {userId,name,description} = req.body
    const review = await Review.findByIdAndUpdate(reviewId,{
        userId: userId,
        name: name,
        description: description
    }, { new: true });
    res.json({review: review});

};

const deleteReview = async (req, res) => {
    const reviewId = req.params.id;
    await Review.findByIdAndDelete(reviewId);
    res.json({success: "Review deleted successfully"});
};

module.exports = {
    fetchAllReviews,
    fetchReview,
    createReview,
    updateReview,
    deleteReview
}