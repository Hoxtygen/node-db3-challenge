const knex = require('knex');
const config = require('../knexfile.js')
const db = require('../data/dbConfig');


module.exports = {
    find,
    findById,
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id })
}