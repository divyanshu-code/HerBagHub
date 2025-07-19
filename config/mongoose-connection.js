 // this connection is default set to the mongodb in the system or if we will host this project publically then it will not work because it does not connected to main db for that we will make a dynamic connection

const mongoose = require('mongoose')
mongoose
.connect("mongodb://127.0.0.1:27017/HerBagHub")
.then(function(){
     
    console.log("connected");
    
}).catch((err)=>{
       
    console.log(err);
    
})


module.exports = mongoose.connection;