const knex = require('knex');
const config = require('../knexfile.js')
const db = require('../data/dbConfig');


module.exports = {
    find,
}

function find() {
    return db('schemes')
}