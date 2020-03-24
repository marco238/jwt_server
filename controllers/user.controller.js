const User = require('../models/user.model');

module.exports.registerUser = (req, res) => {
  let userData = req.body;
  let user = new User(userData);

  user.save((err, savedUser) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).send(savedUser);
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
          res.status(200).send(user);
        }
      }
    }
  })
}