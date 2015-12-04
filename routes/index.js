var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/conflicts', function(req, res, next){
	res.render('conflicts')
})

module.exports = router;
