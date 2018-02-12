var index = require('./index');
var auth = require('./authenticate');
let verifyToken = require('../middlewares/verifyToken');

module.exports = function (app) {
    // app.use('/bittrex',bittrex);
    app.use('/auth', auth);
    app.use('/api', index);
};
