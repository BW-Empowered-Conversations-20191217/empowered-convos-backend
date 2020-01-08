const express = require('express');

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
            const users = user[0];
            if(users){
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

module.exports = router;