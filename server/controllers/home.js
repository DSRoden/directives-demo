'use strict';
var request = require('request');

exports.index = function(req, res){
  res.send({mean:['MongoDB', 'Express.js', 'Angular.js', 'Node.js']});
};
exports.findCity = function(req,res){
  var url = 'http://www.wikisherpa.com/api/1/page/en/' + req.body.city;
  request(url, function(error, response, city){
    city = JSON.parse(city);
    res.send({city:city});
  });
};
