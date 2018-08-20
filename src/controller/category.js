const model = require('../model');

function add(req, res) {
    if (!req.session.user)
        res.status(403).json({ message: "unidentified user" });

    let name = req.body.category;

    model.category.add(name, function (err, result) {
        if (err) {
            console.error(err.message);
            res.json({ message: "it was not possible to add ... try again later" });
        }
        res.json({ message: "category has been added." });
    });
}

function remove(req, res) {
    if (!req.session.user)
        res.status(403).json({ message: "unidentified user" });

    let id = req.body.id;

    model.category.remove(id, function (err) {
        if (err) {
            console.log(err.message);
            res.json({ message: "it was not possible to add ... try again later" });
        }
        res.json({ message: "category has been removed." });
    });
}

module.exports = {
    add,
    remove
}