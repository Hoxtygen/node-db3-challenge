const knex = require('knex');
const config = require('../knexfile.js')
const db = require('../data/dbConfig');


module.exports = {
    find,
    findById,
    findSteps
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id })
}

function findSteps(id) {
    return db('steps')
        .join('schemes', 'schemes.id', 'scheme_id')
        .select('steps.*', 'scheme_name as scheme')
        where({ 'scheme_id': id})
}