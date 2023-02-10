const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
    name: {
        type: 'string'
    },
});

module.exports = mongoose.model('password', passwordSchema);
