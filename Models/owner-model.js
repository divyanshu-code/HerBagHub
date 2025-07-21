const mongoose = require('mongoose')

const ownerSchema =  mongoose.Schema({

    fullname : {
          
       type: String,
       minlength : 3 ,
       trim : true 
    },
    email: String,
    password : Number,
    product : {
         type: Array,
         default :[]
    },
    
    gst : String,
    picture : String


})

module.exports = mongoose.model('owner' , ownerSchema)