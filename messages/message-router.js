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
        Messages.findMessageById(id)
        .then(message => {
            if(message){
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

router.post('/', (req, res) => {
    const message = req.body;
    Messages.addMessage(message)
        .then(newMessage => {
            res.status(201).json({created: newMessage})
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to create new user"
            });
        });
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const updates = req.body;
    Messages.updateMessage(updates, id)
        .then(updatedMessage => {
            if(updatedMessage){
                res.status(201).json({updated: updatedMessage})
            } else {
                res.status(404).json({
                    message: "Could not find message with given id"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to update message"
            });
        });
    });

    router.delete('/:id', (req, res) => {
        const {id} = req.params;
    
        Messages.deleteMessage(id)
            .then(message => {
                if(message ){
                    res.json({ removed: message });
                } else {
                    res.status(404).json({
                        message: "Could not find message  with given id"
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Failed to delete message "
                });
            });
    });

module.exports = router;