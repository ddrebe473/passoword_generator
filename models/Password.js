const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
    url: 'string',
    service: 'string',
    password: 'string'
});

module.exports = mongoose.model('password', passwordSchema);
