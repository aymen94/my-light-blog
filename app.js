const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookie = require('cookie-parser');
const helmet = require('helmet');

const routes = require('./src/routes');

const app = express();

// set port
var port = process.env.PORT || 3000;

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set cookie parser
app.use(cookie());

// configure session
app.use(session({
    secret: 'mylightblog123321',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } //https => true
}));

// set template engine and folder 
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');


// change  public folder in assets
app.use('/assets', express.static(__dirname + '/public'));

// middleware for use `user` in view 
app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});

// helmet for security
app.use(helmet());
app.disable('x-powered-by');

// set routes
app.use(routes);

//run server
app.listen(port, () => {
    console.log("server has been run in port: %s", port);
})
