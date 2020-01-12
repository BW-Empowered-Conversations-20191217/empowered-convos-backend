const express = require('express');

const Users = require('./user-model');
const restricted = require('../auth/restricted-middleware');
const checkRole = require('../auth/check-role-middleware');

const router = express.Router();

router.get('/', restricted, (req, res) => {
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


module.exports = router;