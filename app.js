const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/my_db');

const user = require('./models/user.models');

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/', async (req, res) => {
    const body = req.body;
    await user.create({
        name: req.body.name,
        age: req.body.age
    }).then(console.log('Mongodb Working'));
    res.json(req.body);
});


app.listen(3000, console.log('Listening to port : http://localhost:3000'));