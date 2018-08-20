const conn = require('../config/db');
const Query = require('../config/query');

function getPage(page, callback) {
    return conn.query(Query.getPage, [page], callback);
}

function getAll(callback) {
    return conn.query(Query.getAllPosts, callback);
}

function getById(id, callback) {
    return conn.query(Query.getPostById, [id], callback);
}

function getByCategory(id, callback) {
    return conn.query(Query.getPostByCategory, [id], callback);
}

function add(title, body, user, category, callback) {
    return conn.query(Query.addPost, [title, body, user, category], callback);
}

function remove(id, callback) {
    return conn.query(Query.deletePost, [id], callback);
}

function search(text, callback) {
    return conn.query(Query.searchByPost, [text], callback);
}

module.exports = {
    getPage,
    getAll,
    getById,
    getByCategory,
    add,
    remove,
    search
}