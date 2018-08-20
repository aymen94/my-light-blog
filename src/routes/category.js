const model = require('../model');

function category(req, res) {
    model.post.getByCategory(req.params.id, function (err, post) {
        if (err) {
            console.error(err.message);
            res.status(500);
        }
        model.category.getAll(function (err, category) {
            if (err) {
                console.error(err.message);
                res.status(500);
            }
            res.render('index', { post, category, page:null });
        });
    });
}

module.exports = category;