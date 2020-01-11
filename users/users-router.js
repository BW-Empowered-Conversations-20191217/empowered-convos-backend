const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('./user-model');

const router = express.Router();

router.get('/', (req, res) => {
    Users.findUser()
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to retrieve user"
            })
        })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Users.findUserById(id)
        .then(user => {
            if(user){
                res.json(user);
            } else {
                res.status(404).json({
                    message: "Could not find user with that id"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to retrieve user"
            })
        });
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const updates = req.body;
    Users.updateUser(updates, id)
        .then(updatedUser => {
            if(updatedUser){
                res.status(201).json({updated: updatedUser})
            } else {
                res.status(404).json({
                    message: "Could not find user with given id"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to update user"
            });
        });
    });

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Users.deleteUser(id)
        .then(user => {
            if(user){
                res.json({ removed: user});
            } else {
                res.status(404).json({
                    message: "Could not find user with given id"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to delete user"
            });
        });
});


//Register & Login Functions
router.post('/register', (req, res) => {
    const user = req.body;
    //hash password
    const hash = bcrypt.hashSync(user.password, 8);
    //override plain text password
    user.password = hash;
    Users.addUser(user)
        .then(newUser => {
            res.status(201).json({created: newUser})
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to create new user"
            });
        });
});

//Login
router.post('/', (req, res) => {
    let { userName, password } = req.body;
  
    Users.findBy({ userName })
      .first()
      .then(user => {
        if (user && bcrypt.compare(password, user.password)) {
          res.status(200).json({ message: `Welcome ${user.userName}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;