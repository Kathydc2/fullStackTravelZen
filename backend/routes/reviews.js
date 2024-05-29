const express = require("express");
const {fetchAllReviews, fetchReview, createReview, updateReview, deleteReview} = require("../controllers/reviewsController");



const router = express.Router();

//------------------------------------------[GET all reviewa - READ]
router.get("/", fetchAllReviews);
//------------------------------------------[GET specific reviewa by ID - READ]
router.get("/:reviewId", fetchReview);
//------------------------------------------[POST new review - CREATE]
router.post("/", createReview);
//------------------------------------------[PUT new review - UPDATE]
router.put("/:reviewId", updateReview);
//------------------------------------------[DELETE a review - DELETE]
router.delete("/:reviewId",  deleteReview);

module.exports = router;