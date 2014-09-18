'use strict';

var Movie = require('../models/movie');

exports.create = function(req, res){
  Movie.create(req.body, req.user, function(err, movie){
    console.log(movie);
    res.send({movie:movie});
  });
};

exports.destroy = function(req, res){
  Movie.remove(req.body, req.user, function(err, num){
    res.status(200).end();
  });
};

