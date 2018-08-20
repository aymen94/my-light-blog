const conn = require('../config/db');
const Query = require('../config/query');

function getAll(callback) {
    return conn.query(Query.getAllCategory, callback);
}

function add(name, callback) {
    return conn.query(Query.addCategory, [name], callback);
}

function remove(id, callback) {
    return conn.query(Query.deleteCategory, [id], callback);
}

module.exports = {
    getAll,
    add,
    remove
}