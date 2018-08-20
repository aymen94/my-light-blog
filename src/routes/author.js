const model = require('../model');

module.exports = (req, res) => {
   model.user.getAll(function(err,author){
    if (err) {
        console.error(err.message);
        res.status(500).send();
    }
    res.render('author',{author});
   });
}