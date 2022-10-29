const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signup.cotroller');

router.post('/post', async function(req, res, next){
    try{
        await signupController.createAccount(req, res);
    }catch (err){
        console.error('Error: ', err.message);
        next(err);
    }
});

module.exports = router;