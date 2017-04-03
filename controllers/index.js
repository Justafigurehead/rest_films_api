var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/films', require('./films'));

router.use(express.static('./client/build'));

router.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname + 'build/index.html'));
}); 

module.exports = router;