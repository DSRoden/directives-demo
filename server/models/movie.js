'use strict';

var Mongo  = require('mongodb');

function Movie(o, user){
  this.title = o.title;
  this.userId = user._id;
}

Object.defineProperty(Movie, 'collection', {
  get: function(){return global.mongodb.collection('movies');}
});

Movie.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Movie.collection.findOne({_id:_id}, cb);
};

Movie.create = function(o, user, cb){

  var m = new Movie(o, user);
  Movie.collection.save(m,cb);
};

Movie.remove = function(o, user, cb){
  Movie.collection.remove({_id:user._id, title: o._id}, cb);
};

module.exports = Movie;
