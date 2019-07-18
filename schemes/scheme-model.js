const knex = require('knex');
const config = require('../knexfile.js')
const db = require('../data/dbConfig');


module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
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
        .orderBy('step_number', 'asc');
}

async function add(scheme) {
    const id = await db('schemes')
        .insert(scheme);
    return findById(id);
}

function addStep(step, id) {
    return db('steps').insert({...step, scheme_id: id})
}

function update(changes, id) {
    return db('schemes')
        .where({id})
        .update(changes)
        .then(() => findById(id))
}

async function remove(id) {
    const scheme = findById(id);
    if (scheme) {
        await db('schemes')
            .where({id})
            .del();
        return scheme;
    }
    return null;
}