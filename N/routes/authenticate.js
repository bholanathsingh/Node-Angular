
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

router.route('/login')
.post(function (req, res) {
    User.getUser({ $or: [{ username: req.body.username }, { phonenumber: req.body.username }] }, function (error, user) {
        if (error)
            throw error;
        if(user)    
        {
        if (user.validPassword(req.body.password)) {
            const payload = {
                admin: user.email 
              };
            var token = jwt.sign(payload,'secret', { expiresIn: '4h' });
              // return the information including token as JSON
            res.json({
                success: true,
                message: 'Enjoy your token!',
                user:{username:user.username,email:user.email,displayName:user.displayName,phonenumber:user.phonenumber},
                token: token
              });

        } 
        else  
        {
            console.log('Invalid Password');
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        }
      }
       else
       res.json({ success: false, message: 'Authentication failed. User not found.' });
    });
});


router.route('/signup')
.post(function (req, res) {
    User.getUser({ $or: [{ username: req.body.username }, { phonenumber: req.body.username }] }, function (error, user) {
        if (error)
               res.json({ success: false, message: 'Authentication failed. User not found.' });
            if(user)    
            {
               res.json({ success: false, message: 'User already exists with username / phone number' });
            } else {
                // if there is no user, create the user
                var newUser = new User();

                // set the user's local credentials
                newUser.username = req.param('emailid');
                newUser.password = newUser.generateHash(password);
                newUser.email = req.param('emailid');
                newUser.phonenumber = req.param('phonenumber');
                newUser.displayName = username;
                newUser.provider = 'buydata';
                // save the user
                User.addUser(newUser, function (err, user) {
                    if (err) {
                        console.log('Error in Saving user: ' + err);
                        throw err;
                    }
                    var token = jwt.sign(payload,'secret', { expiresIn: '4h' });
                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        user:{username:user.username,email:user.email,displayName:user.displayName,phonenumber:user.phonenumber},
                        token: token
                    });
                });
            }
        });
});

// //log out

// router.route('/signout')
// .get(function (req, res) {
//     req.logout();
//     res.redirect('/');
// });

module.exports = router;