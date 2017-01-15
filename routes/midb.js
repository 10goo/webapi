var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Midb = require('../models/Midb.js');
/* GET  listing. */
router.get('/', function(req, res, next) {
  Midb.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.post('/', function(req,res,next) {
  Midb.create(req.body, function( err, post){
    if (  err ) return next( err );
    res.json(post);
  });
});

module.exports = router;

