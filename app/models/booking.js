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
  price_adult_standard_cabin: { type: String },
  price_adult_standard_cabin_discount: { type: String },
  price_child_standard_cabin: { type: String },
  price_child_standard_cabin_discount: { type: String },
  price_adult_cristal_cabin: { type: String },
  price_adult_cristal_cabin_discount: { type: String },
  price_child_cristal_cabin: { type: String },
  price_child_cristal_cabin_discount: { type: String },

  price_adult_standard_cabin_return: { type: String },
  price_adult_standard_cabin_discount_return: { type: String },
  price_child_standardl_cabin_return: { type: String },
  price_child_standard_cabin_discount_return: { type: String },

  price_adult_cristal_cabin_return: { type: String },
  price_adult_cristal_cabin_discount_return: { type: String },
  price_child_cristal_cabin_return: { type: String },
  price_child_cristal_cabin_discount_return: { type: String },

  total_price:            { type: Number}
});


module.exports = mongoose.model('Booking', BookingSchema);
