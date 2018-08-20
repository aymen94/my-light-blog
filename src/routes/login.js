function login(req, res) {
    if (req.session.user){
        res.redirect('/dashboard');
    }

    res.render('login');
}

module.exports = login;