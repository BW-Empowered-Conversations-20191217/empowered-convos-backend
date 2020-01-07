const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
find,
findById
};

function find(){
    return db('login');
}

function findById(id){
    return db('login')
        .where(id)
}