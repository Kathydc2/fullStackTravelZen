const mongoose = require('mongoose');


const tourSchema = new mongoose.Schema({
  destination: {type: String,required: true},
  price: {type: Number,required: true},
  duration: {type: Number,required: true},
  image: {type: String,required: true}
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;