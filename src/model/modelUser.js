const conn = require('../config/db');
const Query = require('../config/query');

function getByEmail(email, callback) {
    return conn.query(Query.getUserByEmail, [email], callback);
}

function getAll(callback) {
    return conn.query(Query.getAllUsers, callback);
}

function add(name, lastname, email, password, callback) {
    return conn.query(Query.addPost, [name, lastname, email, password], callback);
}

function remove(id, callback) {
    return conn.query(Query.deleteUser, [id], callback);
}

module.exports = {
    getByEmail,
    getAll,
    add,
    remove
}