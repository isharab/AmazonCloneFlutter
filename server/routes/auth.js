const express = require('express');

const authRouter = express.Router();

authRouter.post('/api/signup', (req, res) => {
    // post the data in database
    // return the response
    const { name, email, password } = req.body;
        
    
    res.send('User signed up');
});

module.exports = authRouter;