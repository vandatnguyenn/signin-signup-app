async function checkAccount(req, res){
    res.send('Your email is ' + req.body.email + 
    ' and your password is ' + req.body.pass);
}

module.exports = {
    checkAccount
};