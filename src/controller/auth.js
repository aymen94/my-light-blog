const model = require('../model');
const SHA256 = require("crypto-js/sha256");

module.exports = (req, res) => {
    let email = req.body.email.toLowerCase();
    let password = req.body.password;
    req.session.user = undefined;
    model.user.getByEmail(email, function (err, row) {
        if(err){
            console.error(err.message);
            res.status(500).send();
        }
        if (row.length==0)
            res.json({ message: 'email not found' });

        else if (row[0].password === SHA256(password).toString()) {
            req.session.user = row[0].id;
            res.json({ message: 'welcome' });
        }
        else
            res.json({ message: 'password not match' });
    });
}