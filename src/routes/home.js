const model = require('../model');

function home(req, res) {
    let page = req.params.page || 1;
    model.post.getPage((page*5)-5,function (err, post,fields) {
        if (err) {
            console.error(err.message);
            res.status(500).send();
        }
        model.category.getAll(function (err, category) {
            if (err) {
                console.error(err.message);
                res.status(500).send();
            }

            res.render('index', { post, category, page });
        })
    });
}

module.exports = home;