const model = require('../model');

function post(req, res) {
    model.post.getById(req.params.id, function (err, post) {
        if (err) {
            console.error(err.message);
            res.status(500).send();
        }

        res.render('post', { post: post[0] });
    });
}

module.exports = post;