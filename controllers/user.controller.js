const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.registerUser = (req, res) => {
  let userData = req.body;
  let user = new User(userData);

  user.save((err, savedUser) => {
    if(err) {
      console.log(err);
    } else {
      let payload = { subject: savedUser._id };
      let token = jwt.sign(payload, 'supersecretkey');
      res.status(200).send({token});
    }
  })
}

module.exports.loginUser = (req, res) => {
  let userData = req.body;

  User.findOne({email: userData.email}, (err, user) => {
    if(err) {
      console.log(err);
    } else {
      if(!user) {
        res.status(401).send('Invalid Credentials');
      } else {
        if(user.password !== userData.password) {
          res.status(401).send('Invalid Credentials');
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, 'supersecretkey');
          res.status(200).send({token});
        }
      }
    }
  })
}