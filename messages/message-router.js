const express = require('express');

const Messages = require('./message-model');

const router = express.Router();

router.get('/', (req, res) => {
    Messages.findMessage()
        .then(message => {
            res.json(message);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to retrieve message'
            });
        })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Users.findMessageById(id)
        .then(message => {
            const messages = message[0];
            if(messages){
                res.json(message);
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