// CREATING AN API
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

const PORT = 3000;
const app = express();
const DB = 'mongodb+srv://isharab:isharab1999@amaxon.lls7yhx.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use(authRouter); 

// CONNECTING TO MONGODB
mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {console.log(err);});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});