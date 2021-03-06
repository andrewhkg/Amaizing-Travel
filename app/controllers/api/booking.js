var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Booking = require('../../models/booking')

module.exports = function (app) {
  app.use('/api', router);
};

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(400).json({message: "Please Login"});
  }
}

//INDEX
router.get('/bookings', function (req, res){
  Booking.find({}, function (err, bookings){
    if (err) {
      res.status(400).json({message: "There was an error with your GET request " + err});
    } else {
      res.status(200).json({bookings: bookings});
    }
  }).populate("attraction_id");
})

//SHOW
router.get('/bookings/:id', function (req, res){
  Booking.findById(req.params.id, function (err, booking){
    if (err) {
      res.status(400).json({message: "There was an error with your GET request " + err});
    } else {
      res.status(200).json(booking);
    }
  }).populate("attraction_id");
})

// //POST
router.post('/bookings', authenticatedUser, function (req, res){
  Booking.create(req.body.booking, function (err, booking){
    if (err) {
      res.status(400).json({message: "There was an error with your POST request " + err});
    } else {
      res.status(200).json(booking)
    }
  });
})

// //PUT
router.put('/bookings/:id', function (req, res){
  Booking.findByIdAndUpdate(req.params.id, req.body.booking, function (err, booking){
    if (err) {
      res.status(400).json({message: "There was an error with your PUT request " + err});
    } else {
      res.status(200).json(booking);
    }
  });
})

// DELETE
router.delete('/bookings/:id', function (req, res){
  Booking.findByIdAndRemove(req.params.id, function (err, booking){
    if (err) {
      res.status(400).json({message: "There was an error with your DELETE request " + err});
    } else {
      res.status(200).json({message: "ok" });
    }
  });
})
