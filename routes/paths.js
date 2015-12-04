var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI || 'localhost/africa-project');
var places = db.get('places');
var experiences = db.get('experiences');
var resources = db.get('resources');
var maps = db.get('maps');

router.get('/', function(req, res, next) {
  res.render('paths');
});

router.get('/places', function(req, res, next) {
	places.find({}, function(err, data){
		res.render('lists', {lists: data, title: "Popular Places", route: "places"})
	})
})

router.get('/places/:name', function(req, res, next){
	places.findOne({name: req.params.name}, function(err, data){
		res.render('list-item', {name: req.params.name, items: data, descriptions: data.description})
	})
})

router.get('/experiences', function(req, res, next) {
	experiences.find({}, function(err, data){
		res.render('lists', {lists: data, title: "Experiences", route: "experiences"})
	})
})

router.get('/experiences/:name', function(req, res, next){
	experiences.findOne({name: req.params.name}, function(err, data){
		res.render('list-item', {name: req.params.name, items: data, descriptions: data.description})
	})
})

router.get('/resources', function(req, res, next) {
	resources.find({}, function(err, data){
		res.render('lists', {lists: data, title: "Resources", route: "resources"})
	})
})

router.get('/resources/:name', function(req, res, next){
	resources.findOne({name: req.params.name}, function(err, data){
		res.render('list-item', {name: req.params.name, items: data, descriptions: data.description})
	})
})

router.get('/wishlist', function(req, res, next) {
	res.render('wishlist')
})

router.get('/maps', function(req, res, next) {
	maps.find({}, function(err, data){
		res.render('maps', {items:data})
	})
})

router.get('/about', function(req, res, next) {
	res.render('about')
})



module.exports = router;
