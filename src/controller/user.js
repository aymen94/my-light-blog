const model = require('../model');
const SHA256 = require("crypto-js/sha256");

function add(req, res) {

    if (!req.session.user)
        res.status(403).json({ message: "unidentified user" });

    let name = req.body.name;
    let lastname = req.body.lastname;
    let email = req.body.email.toLowerCase();
    let password = req.body.password;

    model.user.add(name, lastname, email, SHA256(password).toString(), function (err) {
        if (err) {
            console.error(err.message);
            res.json({ message: "it was not possible to add ... try again later" });
        }

        res.json({ message: "user has been added." });
    });
}

function remove(req, res) {

    if (!req.session.user)
        res.status(403).json({ message: "unidentified user" });

    let id = req.body.id;

    model.user.remove(id, function (err) {
        if (err) {
            console.error(err.message);
            res.json({ message: "it was not possible to add ... try again later" })
        }
        res.json({ message: "user has been removed." })
    });
}


module.exports = {
    add,
    remove
}