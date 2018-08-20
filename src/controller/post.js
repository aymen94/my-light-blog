const model = require('../model');

function add(req, res) {

    if (!req.session.user)
        res.status(403).json({ message: "unidentified user" });

    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;

    model.post.add(title, body, req.session.user, category, function (err, result) {
        if (err) {
            console.error(err.message);
            res.json({ message: "it was not possible to add ... try again later" })
        }

        res.json({ message: "your post has been added." })
    });
}

function remove(req, res) {

    if (!req.session.user)
        res.status(403).json({ message: "unidentified user" });

    let id = req.body.id;

    model.post.remove(id, function (err, result) {
        if (err) {
            console.error(err.message);
            res.json({ message: "it was not possible to add ... try again later" })
        }

        res.json({ message: "your post has been removed." })
    });
}

function search(req, res) {
    model.post.search(req.query.q, function (err, post) {
        if (err) {
            console.error(err.message);
            res.status(500).send();
        }

        model.category.getAll(function (err, category) {
            if (err) {
                console.error(err.message);
                res.status(500).send();
            }

            res.render('index', { post, category, page: null });
        });
    });
}

module.exports = {
    add,
    remove,
    search
}