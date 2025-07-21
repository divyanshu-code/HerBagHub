 // this connection is default set to the mongodb in the system or if we will host this project publically then it will not work because it does not connected to main db for that we will make a dynamic connection

 // to make dynamic connection we have to set debug 
 // npm i debug 
 // set DEBUG=development:*       if its not set the debug then add manually through script in package.json through cross-env

 // to set the config 
 // npm i config  then make json file like development.json  in that set connection 

const mongoose = require('mongoose')
const config = require('config');

const dbgr = require('debug')("development:mongoose")

mongoose
.connect(`${config.get("MONGODB_URI")}/HerBagHub`)
.then(function(){
     
    dbgr("connected");
    
}).catch((err)=>{
       
    dbgr(err);
    
})


module.exports = mongoose.connection;