const db = require('../data/db-config');

function findMessage(){
    return db('messages');
}

function findMessageById(id){
    
    return db('messages')
        .where({ id })
        .first();
}

module.exports = {
    findMessage,
    findMessageById
}