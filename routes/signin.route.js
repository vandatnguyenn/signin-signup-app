const express = require('express');
const router = express.Router();
const signinController = require('../controllers/signin.controller');

router.post('/post', async function(req, res, next){
    try{
        await signinController.checkAccount(req, res);
    }catch (err){
        console.error('Error: ', err.message);
        next(err);
    }
});

module.exports = router;