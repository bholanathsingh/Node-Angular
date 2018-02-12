var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

router.route('/user/:username')
.get(function (req, res,next) {
  User.getUser({ $or: [{ username: req.params.username }, { phonenumber: req.body.username }] }, function (error, user) {
    if (error)
        throw error;
    return res.send(user);
  });
});

module.exports = router;
