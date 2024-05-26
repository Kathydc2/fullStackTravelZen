const express = require("express");
const {fetchAllReviews, fetchReview, createReview, updateReview, deleteReview} = require("../controllers/reviewsController");


const router = express.Router();

//------------------------------------------[GET all reviewa - READ]
router.get("/", fetchAllReviews);
//------------------------------------------[GET specific reviewa by ID - READ]
router.get("/:id", fetchReview);
//------------------------------------------[POST new review - CREATE]
router.post("/", createReview);
//------------------------------------------[PUT new review - UPDATE]
router.put("/:id", updateReview);
//------------------------------------------[DELETE a review - DELETE]
router.delete("/:id", deleteReview);

module.exports = router;