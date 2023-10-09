// CREATING AN API
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

const PORT = 3000;
const app = express();

app.use(authRouter); 

// CONNECTING TO MONGODB
mongoose.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {console.log(err);});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});