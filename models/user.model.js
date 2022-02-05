const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true

    }
})

const users = mongoose.model('users', usersSchema);
module.exports = users;
