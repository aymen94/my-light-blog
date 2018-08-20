const express = require('express');
const route = express.Router();

const home = require('./home');
const post = require('./post');
const author = require('./author');
const category = require('./category');
const login = require('./login');
const dashboard = require('./dashboard');
const controller = require('../controller');

/************* mapping *************/

// home 
route.get('/', home);

// home 
route.get('/page/:page?', home);

// post 
route.get('/post/:id', post);

// category 
route.get('/category/:id', category);

// author 
route.get('/author', author);

// login 
route.get('/login', login);

// dashboard 
route.get('/dashboard', dashboard);

/************* controller *************/

// search
route.get('/search', controller.Post.search);

// authentiaction user
route.post('/auth', controller.auth);

// destroy session user
route.get('/logout', controller.logout);

// add post
route.post('/addpost', controller.Post.add);

// remove post
route.post('/removepost', controller.Post.remove);

// add category
route.post('/addcategory', controller.Category.add);

// remove category
route.post('/removecategory', controller.Category.remove);

// add user
route.post('/adduser', controller.User.add);

// remove user
route.post('/removeuser', controller.User.remove);

/************* handle error *************/
// 404
route.use(function (req, res, next) {
    return res.status(404).render('error', { status: 404, message: "Page Not Found " });
});

// 403
route.use(function (req, res, next) {
    return res.status(403).render('error', { status: 403, message: "Access Denied" });
});

// 500
route.use(function (req, res, next) {
    return res.status(500).render('error', { status: 500, message: "Internal Error Server" });
});

// export route
module.exports = route;