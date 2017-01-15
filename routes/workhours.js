var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var WorkHours = require('../models/WorkHours.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  WorkHours.find(function (err, workhours) {
    if (err) return next(err);
    res.json(workhours);
  });
});

router.post('/', function(req,res,next) {
  WorkHours.create(req.body, function( err, post){
    if (  err ) return next( err );
    res.json(post);
  });
});

module.exports = router;

