var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var AttractionSchema = new Schema({
  name:         { type: String},
  picture:      { type: String },
  description:  { type: String },
  longitude:    { type: Number},
  latitude:     { type: Number},
  price_adult:  { type: String},
  price_child:  { type: String}
});


module.exports = mongoose.model('Attraction', AttractionSchema);
