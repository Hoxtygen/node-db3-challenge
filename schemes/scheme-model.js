const knex = require('knex');
const config = require('../knexfile.js')
const db = require('../data/dbConfig');


module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep
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

async function add(scheme) {
    const id = await db('schemes')
        .insert(scheme);
    return findById(id);
}

function addStep(step, id) {
    return db('steps').insert({...step, scheme_id: id})
}