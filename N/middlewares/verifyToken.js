var jwt = require('jsonwebtoken');


module.exports = function(req,res,next) {

var token = req.body.token || req.query.token || req.headers['x-access-token']||req.params.token||req.headers["Authorization"];
  if (token) {
    // verifies secret and checks exp
        jwt.verify(token, 'secret', function(err, decoded) {
            if (err) { //failed verification.
                return res.json({"error": true});
            }
            req.decoded = decoded;
            next(); //no error, proceed
        });
    } else {
        // forbidden without token
        console.log('called error for checking');
        return res.status(403).send({
            "error": true
        });
    }
}