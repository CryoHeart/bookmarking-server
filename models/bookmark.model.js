const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema({

    // id: {
    //     type: Number,
    //     required: false,
    //     unique: false,
    // },

    name: {
        type: String,
        required: true,
        unique: false
    },
    category: {
        type: String,
        required: true,
        unique: false
    },
    url: {
        type: String,
        required: true,
        unique: true
    }

})

const bookmarks = mongoose.model('bookmarks', bookmarkSchema);
module.exports= bookmarks;
