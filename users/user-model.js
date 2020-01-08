const db = require('../data/db-config');

function findUser(){
    return db('users');
}

function findUserById(id){
    
    return db('users')
        .where({ id })
        .first();
}

module.exports = {
    findUser,
    findUserById
}