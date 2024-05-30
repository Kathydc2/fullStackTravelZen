const Review = require('../models/Review');

const fetchAllReviews = async (req, res) => {
    // get all reviews from DB
    const reviews = await Review.find({});
    // send them as a response
    res.json({reviews: reviews});
};

const fetchReview = async (req, res) => {
    //get id off the url
    const reviewId = req.params.id;
    //find the review with that id
    const review = await Review.findById(reviewId);
    //send response with that review ad the payload
    res.json({review: review});
};

const createReview = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    //get data from req.body
    const {userId,name,description} = req.body
    //create data by passing data into model schema
    const review = await Review.create({
        userId: userId,
        name: name,
        description:description
    });
    // send response with copy of new review
    res.json({review: review});
};

const updateReview = async (req, res) => {
    //get the id off the url
    const reviewId = req.params.id;
    //get data off req.body
    const {userId,name,description} = req.body
    //find and update that particular review
    const review = await Review.findByIdAndUpdate(reviewId,{
        userId: userId,
        name: name,
        description: description
    }, { new: true });
    // retrieve updatedreview and send response
    res.json({review: updatedreview});

};

const deleteReview = async (req, res) => {
    //get id off url
    const reviewId = req.params.id;
    // delete the review
    await Review.findByIdAndDelete(reviewId);
    //send the response
    res.json({success: "Review deleted successfully"});
};

module.exports = {
    fetchAllReviews,
    fetchReview,
    createReview,
    updateReview,
    deleteReview
}