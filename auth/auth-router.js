const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const Users = require('../users/user-model')

//Register 
router.post('/register', (req, res) => {
    const user = req.body;
    //hash password
    const hash = bcrypt.hashSync(user.password, 8);
    //override plain text password
    user.password = hash;
    Users.addUser(user)
        .then(newUser => {
            const token = genToken(newUser);
            res.status(201).json({created: newUser, token: token});
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to create new user"
            });
        });
});



//Login
router.post('/login', (req, res) => {
    let { userName, password } = req.body;
  
    Users.findBy({ userName })
      .first()
      .then(user => {
        if (user && bcrypt.compare(password, user.password)) {
          const token = genToken(user);

          res.status(200).json({ 
            token: token,  
            message: `Welcome ${user.userName}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  function genToken(user){
    const payload = {
        userid: user.id,
        userName: user.userName,
        roles: ['Sender']
    };
   
    const options = {
        expiresIn: '1h'
    };
    const token = jwt.sign(payload, secrets.jwtSecret, options);

    return token;
}

  //Logout
  
  module.exports = router;