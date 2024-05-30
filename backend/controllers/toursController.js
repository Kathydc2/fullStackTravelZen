const Tour = require("../models/Tours");

const fetchAllTours = async (req, res) => {
    const tours = await Tour.find({});
    res.json({tours: tours});
};

const fetchTour = async (req, res) => {
    const tourId = req.params.id;
    const tour = await Tour.findById(tourId);
    res.json({tour: tour});
};

const createTour = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    const {destination,price,duration,image} = req.body;
    const tour = await Tour.create({
        destination: destination,
        price: price,
        duration: duration,
        image: image
    });
    res.json({tour: tour});
};

const updateTour = async (req, res) => {
    const tourId = req.params.id;
    const {destination,price,duration,image} = req.body;
    const tour = await Tour.findByIdAndUpdate(tourId,{
        destination: destination,
        price: price,
        duration: duration,
        image: image
    });
    const updatedTour = await Tour.findById(tourId);
    res.json({tour: updatedTour});
};

const deleteTour = async (req, res) => {
    const tourId = req.params.id;
    await Tour.findByIdAndDelete(tourId);
    res.json({success: "Tour deleted successfully"});
};

module.exports = {
    fetchAllTours,
    fetchTour,
    createTour,
    updateTour,
    deleteTour
}