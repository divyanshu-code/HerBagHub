const mongoose = require('mongoose')

const userSchema =  mongoose.Schema({

    fullname : String,
    email: String,
    password : Number,

    cart : {
         type: Array,
         default :[]
    },

    order : {
         type: Array,
         default :[]
    },
    contact :  Number,
    picture : String


})

module.exports = mongoose.model('user' , userSchema)