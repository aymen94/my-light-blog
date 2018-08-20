module.exports = (req, res) => {
    req.session.destroy(function(err){
        res.redirect('/');
    });
}