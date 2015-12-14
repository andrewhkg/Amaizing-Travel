var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BookingSchema = new Schema({
  attraction_id:          { type: mongoose.Schema.ObjectId, ref: "Attraction"},
  user_id:                { type: mongoose.Schema.ObjectId, ref: "User"},
  // tour_id:             { type: mongoose.Schema.ObjectId, ref: "Tour"},
  // transportation_id:   { type: mongoose.Schema.ObjectId, ref: "Transportation"},
  date:                   { type: Date },
  price_adult:            { type: String},
  price_adult_discount:   { type: String},
  price_child:            { type: String},
  price_child_discount:   { type: String},
  qnt_adult:              { type: String},
  qnt_child:              { type: String},
  total_price:            { type: Number}
});


module.exports = mongoose.model('Booking', BookingSchema);
