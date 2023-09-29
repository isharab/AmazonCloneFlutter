// CREATING AN API
const express = require('express');

const PORT = 3000;

const app = express();

// GET, POST, PUT, DELETE , UPDATE => CRUD
app.get('/flutter-world', (req,  res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});