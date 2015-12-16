var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Attraction = require('../../models/user')

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
router.get('/users', function (req, res){
  User.find({}, function (err, users){
    if (err) {
      res.status(400).json({message: "There was an error with your GET request " + err});
    } else {
      res.status(200).json({users: users});
    }
  });
})

//SHOW
router.get('/users/:id', function (req, res){
  User.findById(req.params.id, function (err, user){
    if (err) {
      res.status(400).json({message: "There was an error with your GET request " + err});
    } else {
      res.status(200).json(user);
    }
  });
})

// //POST
router.post('/users', function (req, res){
  User.create(req.body.user, function (err, user){
    if (err) {
      res.status(400).json({message: "There was an error with your GET request " + err});
    } else {
      res.status(200).json(user);
    }
  });
})

// //PUT
router.put('/users/:id', function (req, res){
  User.findByIdAndUpdate(req.params.id, req.body.user,function (err, user){
    if (err) {
      res.status(400).json({message: "There was an error with your GET request " + err});
    } else {
      res.status(200).json(user);
    }
  });
})

// DELETE
router.delete('/users/:id', function (req, res){
  User.findByIdAndRemove(req.params.id, function (err, user){
    if (err) {
      res.status(400).json({message: "There was an error with your GET request " + err});
    } else {
      res.status(200).json({message: "ok" });
    }
  });
})
