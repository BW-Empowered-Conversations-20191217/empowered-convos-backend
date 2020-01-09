const db = require('../data/db-config');

function findMessage(){
    return db('messages');
}

function findMessageById(id){
    
    return db('messages')
        .where({ id })
        .first();
}

function addMessage(message){
    return db('messages').insert(message);
}

function updateMessage(updates, id){
    return db('messages')
        .where({id}).update(updates);
}

function deleteMessage(id){
    return db('users').where({id}).del()
}

module.exports = {
    findMessage,
    findMessageById,
    addMessage,
    updateMessage,
    deleteMessage
}