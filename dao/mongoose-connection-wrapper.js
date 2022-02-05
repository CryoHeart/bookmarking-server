const mongoose = require('mongoose')


const mongoConnect = () =>{
    mongoose.connect('mongodb+srv://CryoHeart:1234@cluster0.wgfas.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res =>{
        console.log('connection Success');
    })
    .catch(err => console.log(err))
}

exports.mongoConnect = mongoConnect