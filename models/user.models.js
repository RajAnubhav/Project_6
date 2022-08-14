const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: { type: String },
    age: { type: Number }
},
    { collection: 'collection1' },
)

const model = mongoose.model('ModelName', User);
module.exports = model