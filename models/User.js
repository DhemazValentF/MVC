const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        require: [true, 'Silahkan Isikan nama'],
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isikan email']
    }
})

module.exports = mongoose.model('user', UserSchema)