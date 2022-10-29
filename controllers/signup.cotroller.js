async function createAccount(req, res){
    res.send('Your full name is ' + req.body.fname + ' ' + req.body.lname + 
    '. Your email is ' + req.body.email + 
    ' and your password is ' + req.body.pass);
}

module.exports = {
    createAccount
};