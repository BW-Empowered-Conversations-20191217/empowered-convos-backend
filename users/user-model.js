const db = require('../data/db-config');

function findUser(){
    return db('users');
}

function findUserById(id){
    
    return db('users')
        .where({ id })
        .first();
}

function findBy(filter) {
    return db('users')
    .select('id', 'userName', 'password')
    .where(filter);
}

function addUser(user){
    return db('users').insert(user);
}

function updateUser(updates, id){
    return db('users')
        .where({id}).update(updates);
}

function deleteUser(id){
    return db('users').where({id}).del()
}

module.exports = {
    findUser,
    findUserById,
    findBy,
    addUser,
    updateUser,
    deleteUser
}