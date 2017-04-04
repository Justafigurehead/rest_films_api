var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/films', require('./films'));

router.use(express.static('./client/build'));

router.get('/', function(req, res){ 
  // res.sendFile(path.join('./build/home.html'));
}); 

module.exports = router;