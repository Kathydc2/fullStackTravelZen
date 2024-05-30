const express = require("express");
const {fetchAllReviews, fetchReview, createReview, updateReview, deleteReview} = require("../controllers/reviewsController");

//my routes for my reviews and made sure to test all on postman
const router = express.Router();

//------------------------------------------[GET all reviews - READ]
router.get("/", fetchAllReviews);
//------------------------------------------[GET specific review by ID - READ]
router.get("/:id", fetchReview);
//------------------------------------------[POST new review - CREATE]
router.post("/",  createReview);
//------------------------------------------[PUT new review - UPDATE]
router.put("/:id", updateReview);
//------------------------------------------[DELETE a review - DELETE]
router.delete("/:id",  deleteReview);

module.exports = router;