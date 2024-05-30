const express = require("express");
const {fetchAllTours, fetchTour, createTour, updateTour, deleteTour} = require("../controllers/toursController");


const router = express.Router();

//------------------------------------------[GET all tours - READ]
router.get("/", fetchAllTours);
//------------------------------------------[GET specific tour by ID - READ]
router.get("/:id", fetchTour);
//------------------------------------------[POST new tour - CREATE]
router.post("/",  createTour);
//------------------------------------------[PUT new tour - UPDATE]
router.put("/:id", updateTour);
//------------------------------------------[DELETE a tour - DELETE]
router.delete("/:id",  deleteTour);

module.exports = router;