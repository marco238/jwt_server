const User = require('../models/user.model');

const registerUser = (req, res) => {
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

module.exports = registerUser;