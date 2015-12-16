var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var AttractionSchema = new Schema({
  city:                   { type: String },
  name:                   { type: String},
  picture:                { type: String },
  description:            { type: String },
  longitude:              { type: String},
  latitude:               { type: String},
  price_adult:            { type: String},
  price_adult_discount:   { type: String},
  price_child:            { type: String},
  price_child_discount:   { type: String},

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



  to_go_there:            { type: String},
  use_tkts:               { type: String}
});


module.exports = mongoose.model('Attraction', AttractionSchema);
