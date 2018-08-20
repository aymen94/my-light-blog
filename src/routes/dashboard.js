const model = require('../model');
function dashboard(req, res) {
    if (!req.session.user)
        res.redirect('/login');

    model.category.getAll(function (err, category) {
        if (err) {
            console.error(err.message);
            res.status(500).send();
        }
        model.post.getAll(function (err, post) {
            if (err) {
                console.error(err.message);
                res.status(500).send();
            }
            res.render('dashboard', { category, post });
        });
    })
}

module.exports = dashboard;